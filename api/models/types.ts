import { Timestamp } from "@firebase/firestore";

export type User = {
    name: string,
    profile: string
};

export type Task = {
    id: string,
    title: string,
    description: string,
    steps: any[],
    currentStep: number,
    state: string,
    priority: number,
    image: string,
    expire: Timestamp
}