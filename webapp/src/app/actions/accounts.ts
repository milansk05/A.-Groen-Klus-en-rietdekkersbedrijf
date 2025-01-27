import { User } from "@prisma/client"
import axios from "axios";

const url = 'http://localhost:3000/api/user'

export const getUsers = async (): Promise<User[]> => {
    const res = await fetch(url)
    return res.json()
}

export const deleteUser = async (id: number): Promise<void> => {
    await fetch(`${url}?id=${id}`, { method: 'DELETE' });
}

export const updateUser = async (id: number, userData: Partial<User>): Promise<User> => {
    const res = await fetch(`${url}?id=${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return res.json();
}

export default getUsers;