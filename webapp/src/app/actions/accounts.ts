"use server"

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function createAccount(data: {
    name: string
    email: string
}) {
    try {
        const account = await prisma.user.create({
            data: {
                ...data
            }
        })
        return { success: true, data: account }
    } catch (error) {
        console.log('Fout bij het aanmaken van account', error);
        return { success: false, error: 'Fout bij het aanmaken van account' }
    }
}

// async function onSubmit(values: z.infer<typeof formSchema>) {
//     const account = await prisma.user.create({
//         data: {
//             ...values
//         }
//     })
//     console.log(account);
// }