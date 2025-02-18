import { User } from "@prisma/client";

const API_URL = '/api/user'; // Gebruik relatieve URL voor betere compatibiliteit

export const getUsers = async (): Promise<User[]> => {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            throw new Error("Fout bij het ophalen van gebruikers");
        }
        return res.json();
    } catch (error) {
        console.error("getUsers error:", error);
        throw error;
    }
};

export const createUser = async (userData: Partial<User>): Promise<User> => {
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });

        const result = await res.json();
        if (!res.ok) {
            throw new Error(result.error || "Fout bij het aanmaken van gebruiker");
        }

        return result;
    } catch (error) {
        console.error("createUser error:", error);
        throw error;
    }
};

export const updateUser = async (id: number, userData: Partial<User>): Promise<User> => {
    try {
        const res = await fetch(`${API_URL}?id=${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });

        const result = await res.json();
        if (!res.ok) {
            throw new Error(result.error || "Fout bij het updaten van gebruiker");
        }

        return result;
    } catch (error) {
        console.error("updateUser error:", error);
        throw error;
    }
};

export const deleteUser = async (id: number): Promise<void> => {
    try {
        const res = await fetch(`${API_URL}?id=${id}`, { method: 'DELETE' });

        if (!res.ok) {
            throw new Error("Fout bij het verwijderen van gebruiker");
        }
    } catch (error) {
        console.error("deleteUser error:", error);
        throw error;
    }
};

export default getUsers;