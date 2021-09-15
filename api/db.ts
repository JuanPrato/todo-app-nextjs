import "./client";
import { getFirestore, collection, getDocs, QueryDocumentSnapshot, PartialWithFieldValue, addDoc, doc, updateDoc } from "firebase/firestore";
import { Task, User } from "./models/types";

const firestore = getFirestore();

const converter = <T>() => ({
  toFirestore: (data: PartialWithFieldValue<T>) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T
})

const dataPoint = async <T>(collectionPath: string) => (await getDocs(collection(firestore, collectionPath).withConverter(converter<T>())));
const addDataPoint = async <T>(collectionPath: string, object: T) => (await addDoc(collection(firestore, collectionPath), object));
const updateDataPoint = async <T>(docPath: string, object: T) => (await updateDoc(doc(firestore, docPath), object));

const db = {
  // list your collections here
  users: dataPoint<User>('users'),
  userTasks: (userId: string) => dataPoint<Task[]>(`users/${userId}/tasks`),
  addTask: (userId: string, task: Task) => addDataPoint<Task>(`users/${userId}/tasks`, task),
  updateTask: (userId: string, docId: string, update: any) => updateDataPoint<Task>(`users/${userId}/tasks/${docId}`, update)
}

export { db }
export default db