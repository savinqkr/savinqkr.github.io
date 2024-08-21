"use client";

import { NextPage } from "next";
import { collection, addDoc } from "firebase/firestore";
import firestore from "@/common/firebase/firestore";

const FirebaseDatabase: NextPage = () => {
  const onClickUpLoadButton = async () => {
    await addDoc(collection(firestore, "post"), {
      date: Date.now(),
      category: "Next.js",
      title: "Next.js & Firebase 연동하기 2",
      contents: "게시글 내용 ( 마크다운 ) 2",
    });
  };

  return (
    <div>
      <button onClick={onClickUpLoadButton}>Ada Lovelace 등록</button>
    </div>
  );
};

export default FirebaseDatabase;
