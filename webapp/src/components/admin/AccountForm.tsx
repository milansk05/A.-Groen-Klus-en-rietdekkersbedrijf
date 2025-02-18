'use client'

import { z } from 'zod';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

// Schema validatie voor het formulier met Zod
const formSchema = z.object({
    name: z.string({ message: "Naam is vereist!" }),
    password: z.string().min(4, { message: "Wachtwoord is vereist!" }),
    email: z.string().email().min(4, { message: "Email is vereist!" }),
    role: z.string({ message: "Role is vereist" }),
    last_login: z.date(), // Laatste inlogdatum wordt automatisch gegenereerd
});

// Type definitie op basis van het schema
type UserFormValues = z.infer<typeof formSchema>

export default function AccountForm() {
    const router = useRouter(); // Next.js router om navigatie te beheren

    // Initialisatie van het formulier met react-hook-form
    const form = useForm<UserFormValues>({
        resolver: zodResolver(formSchema), // Koppelt Zod-schema aan react-hook-form
        defaultValues: {
            name: "", // Standaard lege velden
            password: "",
            email: "",
            role: "",
            last_login: new Date(), // Standaard waarde voor de laatste login
        }
    });

    // Functie die wordt uitgevoerd bij het indienen van het formulier
    const onSubmit = async (data: UserFormValues) => {
        try {
            await axios.post(`/api/user`, data); // Versturen van formuliergegevens naar de backend
            router.refresh(); // Verversen van de pagina na succesvolle verzending
        } catch (error) {
            console.log(error); // Foutafhandeling in de console
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>

                {/* Naam invoerveld */}
                <FormField control={form.control} name='name' render={({ field }) => (
                    <FormItem>
                        <FormLabel>Naam</FormLabel>
                        <FormControl>
                            <Input placeholder='naam' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                {/* E-mail invoerveld */}
                <FormField control={form.control} name='email' render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder='email' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                {/* Rol invoerveld */}
                <FormField control={form.control} name='role' render={({ field }) => (
                    <FormItem>
                        <FormLabel>Rol</FormLabel>
                        <FormControl>
                            <Input placeholder='role' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                {/* Wachtwoord invoerveld */}
                <FormField control={form.control} name='password' render={({ field }) => (
                    <FormItem>
                        <FormLabel>Wachtwoord</FormLabel>
                        <FormControl>
                            <Input placeholder='password' type='password' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                {/* Submit knop */}
                <Button type='submit'>Submit</Button>
            </form>
        </Form>
    )
}