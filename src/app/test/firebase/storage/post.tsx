// // Post.js
// import { useState, useEffect } from "react";
// import Image from "next/image";

// import { ref, getDownloadURL } from "firebase/storage";
// import storage from "@/common/firebase/storage";

// export default function Post({ imagename }) {
//   const [imgurl, setImgurl] = useState();

//   useEffect(() => {
//     const func = async () => {
//       if (imagename !== undefined) {
//         const reference = ref(storage, `images/${imagename}`);
//         await getDownloadURL(reference).then((x: any) => {
//           setImgurl(x);
//         });
//       }
//     };
//     func();
//   }, []);

//   return (
//     <div>
//       <Image
//         unoptimized={true}
//         alt="text"
//         width={300}
//         height={150}
//         src={imgurl}
//       />
//     </div>
//   );
// }
