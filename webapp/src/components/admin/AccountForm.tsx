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
    FormLabel, } from '../ui/form';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const formSchema =  z.object({
    name: z.string({ message: "Naam is vereist!" }),
    password: z.string().min(4, { message: "Wachtwoord is vereist!" }),
    email: z.string().email().min(4, { message: "Email is vereist!" }),
    role: z.string({ message: "Role is vereist" }),
    last_login: z.date(),
});

type UserFormValues = z.infer<typeof formSchema>

export default function AccountForm() {
    const router = useRouter();
    

    const form = useForm<UserFormValues>({
        resolver: zodResolver(formSchema),
        // default values voor als er wegens onbekende omstandigheden alternatieve data moet worden opgeslagen
        defaultValues: {
            name: "",
            password: "",
            email: "",
            role: "",
            last_login: new Date(),
        }
    });

   const onSubmit = async (data: UserFormValues) => {
    try {
        await axios.post(`/api/user`, data);
        router.refresh;
    } catch (error) {
        console.log(error);
    }
   }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>

                <FormField control={form.control} name='name' render={({ field }) => (
                    <FormItem>
                        <FormLabel>naam</FormLabel>
                        <FormControl>
                            <Input placeholder='naam' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField control={form.control} name='email' render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder='email' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField control={form.control} name='role' render={({ field }) => (
                    <FormItem>
                        <FormLabel>Role</FormLabel>
                        <FormControl>
                            <Input placeholder='role' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField control={form.control} name='password' render={({ field }) => (
                    <FormItem>
                        <FormLabel>Wachtwoord</FormLabel>
                        <FormControl>
                            <Input placeholder='password' {...field} />
                        </FormControl>
                    </FormItem>
                )} />  

                <Button type='submit'>Submit</Button>
            </form>
        </Form>
    )
}