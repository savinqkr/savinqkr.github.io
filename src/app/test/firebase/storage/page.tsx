"use client";

import { NextPage } from "next";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import firestore from "@/common/firebase/firestore";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import storage from "@/common/firebase/storage";
import Image from "next/image"; // Import the Image component from Next.js

const FirebaseStorage: NextPage = () => {
  const [titlename, setTitleName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [inputImage, setInputImage] = useState<File | null>(null);
  const [list, setList] = useState<any[]>([]);

  const onClickUploadB = async () => {
    // 버튼 클릭 시 스토리지에 이미지 업로드 및 파이어스토어에 데이터 등록
    const uploadFileName = uuid() + ".png";
    console.log(uploadFileName);

    if (!inputImage) return;

    try {
      const imageRef = ref(storage, `images/${uploadFileName}`);
      await uploadBytes(imageRef, inputImage);

      await addDoc(collection(firestore, `auth`), {
        titlename,
        name,
        uploadFileName,
      });

      setTitleName("");
      setName("");
      setInputImage(null);
    } catch (error) {
      console.error("Error uploading file and saving data: ", error);
    }
  };

  useEffect(() => {
    // onSnapshot을 이용하여 실시간으로 게시판 글 정보 가져오기
    const snap = onSnapshot(collection(firestore, "auth"), (querySnapshot) => {
      const tempList: any[] = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        tempList.push(data);
      });
      setList(tempList);
    });

    // Cleanup the onSnapshot listener when the component unmounts
    return () => snap();
  }, []);

  return (
    <div>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label>제목</label>
          <input
            value={titlename}
            onChange={(event) => {
              setTitleName(event.target.value);
            }}
          />
          <label>작성자 이름</label>
          <input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <label>이미지 파일</label>
          <input
            type="file"
            onChange={(event) => {
              setInputImage(event.target.files ? event.target.files[0] : null);
            }}
          />
        </form>
      </div>
      <button onClick={onClickUploadB}>업로드</button>

      <div>
        {list.map((item, index) => (
          <div key={index}>
            <div>
              <label>게시글 제목: </label>
              <h4>{item.titlename}</h4>
              <label>작성자: </label>
              <h4>{item.name}</h4>
              <Post imagename={item.uploadFileName} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirebaseStorage;

function Post({ imagename }: { imagename: string }) {
  const [imgurl, setImgurl] = useState<string | null>(null);

  useEffect(() => {
    const func = async () => {
      if (imagename) {
        try {
          const reference = ref(storage, `images/${imagename}`);
          const url = await getDownloadURL(reference);
          setImgurl(url);
        } catch (error) {
          console.error("Error fetching image URL: ", error);
        }
      }
    };
    func();
  }, [imagename]);

  return (
    <div>
      {imgurl && (
        <Image
          unoptimized={true}
          alt="uploaded image"
          width={300}
          height={150}
          src={imgurl}
        />
      )}
    </div>
  );
}
