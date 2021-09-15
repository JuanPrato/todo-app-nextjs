import { getCurrentUser } from "../../api/auth";
import db from "../../api/db";
import { Task } from "../../api/models/types";
import * as types from "../types";

export const setTasks = (tasks: any[]) => ({
    type: types.SET_TASKS,
    payload: tasks
});

export const getTasks = async () => ({
    type: types.SET_TASKS,
    payload: getCurrentUser() ? ((await db.userTasks(getCurrentUser()!.uid)).docs.map(d => d.data())) : []
})

export const addTask = async (task: Task) => ({
    type: types.SET_TASKS,
    payload: (await addTaskOnDb(getCurrentUser()!.uid, task))
})

export const addStep = async (task: Task, step: string) => ({
    type: types.SET_TASKS,
    payload: (await addStepToTask(getCurrentUser()!.uid, task, step))
})

const addTaskOnDb = async (userId: string, task: Task) => {
    if (!getCurrentUser()) return null;
    const ref = await db.addTask(userId, task);
    await db.updateTask(userId, ref.id, {id: ref.id});
    return (await db.userTasks(userId)).docs.map(d => d.data()) ?? [];
};

const addStepToTask = async (userId: string, task: Task, step: string) => {

    if (!getCurrentUser()) return null;
    await db.updateTask(userId, task.id, {steps: [...task.steps, step]});
    return (await db.userTasks(userId)).docs.map(d => d.data()) ?? [];
}