import { getStorage } from "firebase/storage";
import firebaseDb from "./firebasedb";

const storage = getStorage(firebaseDb);
export default storage;
