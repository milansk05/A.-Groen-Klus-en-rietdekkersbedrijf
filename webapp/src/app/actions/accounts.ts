'use server'

import { Prisma } from "@prisma/client"
import { prisma } from "../../../utils/prismadb"


export async function getAccounts() {
    try {
        const users = await prisma.user.findMany();


        return {succes: true, data: users}
    } catch (error) {
        return {succes: false, error: "Ophalen van accounts/users is niet gelukt!"}

    }
}

export async function createAccounts(data: {
    name: string
    password: string
    email: string
    role: string
    last_login: Date
    createdAt: Date
    updatedAt: Date
}) {
    try {
        const users = await prisma.user.create({data})

        return {succes: true, data: users}
    } catch (error) {
        return {succes: false, error: "Fout bij het aanmaken van user!"}
    }
}