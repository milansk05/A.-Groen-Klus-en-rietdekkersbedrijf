import { z } from "zod";
import { prisma } from "../../../../utils/prismadb";
import { NextResponse } from "next/server";
import { genSaltSync, hashSync } from "bcrypt-ts";

const userSchema = z.object({
    name: z.string({ message: "Naam is vereist!" }),
    password: z.string().min(4, { message: "Wachtwoord is vereist!" }),
    email: z.string().email().min(4, { message: "Email is vereist!" }),
    role: z.string({ message: "Role is vereist" }),
    last_login: z.union([z.date(), z.string().datetime()]).optional(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        // Validatie check
        const validation = userSchema.safeParse(body);
        if (!validation.success) {
            console.error('Validation error:', validation.error.format());
            return NextResponse.json({ error: validation.error.format() }, { status: 400 });
        }

        // Converteer last_login indien nodig
        if (typeof body.last_login === 'string') {
            body.last_login = new Date(body.last_login);
        }

        const user = await prisma.user.create({ data: validation.data });

        return NextResponse.json(user);
    } catch (error) {
        console.error('POST -> ACCOUNTS', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.error('GET -> ACCOUNTS', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        await prisma.user.delete({ where: { id: parseInt(id) } });

        return NextResponse.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('DELETE -> ACCOUNTS', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        const body = await req.json();

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        const validation = userSchema.partial().safeParse(body);
        if (!validation.success) {
            console.error('Validation error:', validation.error.format());
            return NextResponse.json({ error: validation.error.format() }, { status: 400 });
        }

        if (body.password) {
            const salt = genSaltSync(10);
            body.password = hashSync(body.password, salt);
        }

        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id) },
            data: validation.data
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error('PUT -> ACCOUNTS', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}