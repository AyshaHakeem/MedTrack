"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import RegisterFormSchema from "@/schema/RegisterFormSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import handleRegistration from "@/utils/auth/handleRegistrationForm";
import DisplayText from "@/components/ui/DisplayText";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { pending } = useFormStatus();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterFormSchema>) => {
    return handleSubmission(data, form, setLoading, setErrorMessage, router);
  };

  const handleSubmission = async (
    data: z.infer<typeof RegisterFormSchema>,
    form: any,
    setLoading: (value: boolean) => void,
    setErrorMessage: (message: string) => void,
    router: any
  ) => {
    await handleRegistration(data, form, setLoading, setErrorMessage, router);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <DisplayText content={errorMessage} />
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
          <div className="md:flex space-between">
            <div className="md:mr-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="John" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="******" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          {loading ? "Loading..." : "Register"}
        </Button>
      </form>
    </Form>
  );
};
