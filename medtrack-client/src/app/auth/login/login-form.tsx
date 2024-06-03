"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import LoginFormSchema from "@/schema/LoginFormSchema";
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import DisplayText from "@/components/ui/DisplayText";
import loginSubmission from "@/services/api/login";
import handleLogin from "@/utils/auth/handleLoginForm";
import useSWR from "swr";

export const LoginForm = () => {

    const {pending } = useFormStatus()
    const router = useRouter()
    const [message, setMessage] = useState("")

    // if (router.query?.user == "registered"){
    //     setMessage("You are successfully registered")
    // }

    const form = useForm({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSubmit =  (data: z.infer<typeof LoginFormSchema>) => {
        return handleSubmission(data, setMessage, router)
    }

    const handleSubmission = async (
        data: z.infer<typeof LoginFormSchema>,
        setMessage: (message: string) => void,
        router: any
    ) => {
        await handleLogin(data, setMessage, router)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <DisplayText content={message} />
            <div className="space-y-4">
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input
                        {...field}
                        type="email"
                        placeholder="johndoe@gmail.com"
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <Button type="submit" className="w-full" disabled={pending}>
               Login
            </Button>
            </form>
        </Form>
    )
}