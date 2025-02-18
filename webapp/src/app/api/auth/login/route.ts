import { prisma } from "@/../utils/prismadb";
import { NextResponse } from "next/server";
import { compareSync } from "bcrypt-ts";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: "E-mail en wachtwoord zijn vereist" }, { status: 400 });
        }

        // Zoek gebruiker in database
        const user = await prisma.user.findUnique({
            where: { email } // Nu werkt dit correct omdat email uniek is!
        });

        if (!user || !user.password) {
            return NextResponse.json({ error: "Ongeldige inloggegevens" }, { status: 401 });
        }

        // Controleer wachtwoord
        const isValidPassword = compareSync(password, user.password);
        if (!isValidPassword) {
            return NextResponse.json({ error: "Ongeldige inloggegevens" }, { status: 401 });
        }

        // Stuur een succesbericht terug
        return NextResponse.json({ success: true, userId: user.id, role: user.role });
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ error: "Interne serverfout" }, { status: 500 });
    }
}