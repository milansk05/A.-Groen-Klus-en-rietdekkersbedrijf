import { z } from "zod";
import { prisma } from "../../../../utils/prismadb"
import { NextResponse } from "next/server";
import { genSaltSync, hashSync } from "bcrypt-ts"

const userSchema =  z.object({
    name: z.string({ message: "Naam is vereist!" }),
    password: z.string().min(4, { message: "Wachtwoord is vereist!" }),
    email: z.string().email().min(4, { message: "Email is vereist!" }),
    role: z.string({ message: "Role is vereist" }),
    last_login: z.date().or(z.string().datetime())
}); 

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const salt = genSaltSync(10);

        body.password = hashSync(body.password, salt);
        
        
        const validation = userSchema.safeParse(body);

        if (!validation.success) {
            console.error('validation errror');
        }
        if (!validation.data) {
            console.error('validation data not correct')
        }


        
        const user = await prisma.user.create({data: validation.data});

        return NextResponse.json(user)
    } catch (error) {
        console.error('POST -> ACCOUNTS', error)
    }
}

export async function GET(req: Request) {
    try {
        const users = await prisma.user.findMany();

        return NextResponse.json(users)
    } catch (error) {
        console.error('GET -> ACCOUNTS', error);
    }
}