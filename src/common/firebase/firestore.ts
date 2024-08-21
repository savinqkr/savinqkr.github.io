import { getFirestore } from "firebase/firestore";
import firebaseDb from "./firebasedb";

const fireStore = getFirestore(firebaseDb);

export default fireStore;
