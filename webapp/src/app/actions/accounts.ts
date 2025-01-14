"use server"

import { PrismaClient } from "@prisma/client";
import { genSaltSync, hashSync } from "bcrypt-ts"

const prisma = new PrismaClient();

export async function createAccount(data: {
    name: string
    email: string
    role: string
    password: string
    confirm: string
    createdAt: Date
    updatedAt: Date
    lastLogin: Date
}) {    
    if (data.password != data.confirm) {
        console.log('niet goed');
    }

    const salt = genSaltSync(10);
    const hashedPass = hashSync(data.password, salt);

    try {
        const account = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                role: data.role,
                password: hashedPass,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
                last_login: data.lastLogin,
            }
        });

        return { success: true, data: account }
    } catch (error) {
        console.log('Fout bij het aanmaken van account' + error);
        return { success: false, error: 'Fout bij het aanmaken van account' }
    }
}


export async function getAccounts() {
    try {
        const allUsers = await prisma.user.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        
        return allUsers;
    } catch (error) {
        console.log('Fout bij het ophalen van accounts' + error);
        return { succes: false, error: "Fout bij het ophalen van accounts" }
    }

}