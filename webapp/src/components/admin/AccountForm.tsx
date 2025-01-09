"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { date, z } from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from '../ui/input';
import { Button } from '../ui/button';

import { createAccount } from '@/app/actions/accounts';

const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
});


export default function AccountForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
        }
    })

    

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(createAccount)}>
                <FormField control={form.control} name="name"  render={({ field }) => (

                    <FormItem>
                        <FormLabel>Naam</FormLabel>
                        <FormControl>
                            <Input placeholder="naam" {...field} />
                        </FormControl>
                    </FormItem>

                )}
                />
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                        </FormItem>
                )}
                />

                <Button type='submit'>Submit</Button>
            </form>
        </Form>
    )
}