import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const textContents = await prisma.textContent.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json(textContents);
    } catch (error) {
        console.error('GET -> TEXT', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { pagina, sectie, inhoud } = body;

        if (!pagina || !sectie || !inhoud) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const textContent = await prisma.textContent.create({
            data: { pagina, sectie, inhoud }
        });
        return NextResponse.json(textContent, { status: 201 });
    } catch (error) {
        console.error('POST -> TEXT', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function PUT(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        const body = await req.json();
        const { pagina, sectie, inhoud } = body;

        if (!pagina && !sectie && !inhoud) {
            return NextResponse.json({ error: 'At least one field to update is required' }, { status: 400 });
        }

        const updatedTextContent = await prisma.textContent.update({
            where: { id: parseInt(id) },
            data: { pagina, sectie, inhoud }
        });

        return NextResponse.json(updatedTextContent);
    } catch (error) {
        console.error('PUT -> TEXT', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        await prisma.textContent.delete({
            where: { id: parseInt(id) }
        });

        return NextResponse.json({ message: 'Text content deleted successfully' });
    } catch (error) {
        console.error('DELETE -> TEXT', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}