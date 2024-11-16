"use client";

import DottedSpearator from '@/components/dotted-separator'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaGoogle } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { z } from 'zod'
import { RegisterSchema } from '../schemas'
import { useRegister } from '../api/use-register'



const SignUpCard = () => {

    const { mutate, isPending } = useRegister();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        mutate(values);
    }


    return (
        <Card className='w-full h-full md:w-[487px] border-none shadow-none'>
            <CardHeader className='flex items-center justify-center text-center p-7'>
                <CardTitle>
                    Sign Up
                </CardTitle>
                <CardDescription>
                    By Signing up, you agree to our {""}
                    <Link href={"/privacy"}>
                        <span className='text-blue-700'>
                            Privacy Policy
                        </span>
                    </Link> {""}
                    <Link href={"/terms"}>
                        <span className='text-blue-700'>
                            Term of Services
                        </span>
                    </Link>
                </CardDescription>
            </CardHeader>
            <div className='px-7'>
                <DottedSpearator />
            </div>
            <CardContent className='p-7'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                        <FormField name='name' control={form.control} render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='text' placeholder='Enter your Name' {...field} disabled={isPending} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField name='email' control={form.control} render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='email' placeholder='Enter email address' {...field} disabled={isPending} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField name='password' control={form.control} render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='password' placeholder='Enter eyour Password' {...field} disabled={isPending} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <Button size={"lg"} disabled={isPending} className='w-full'>
                            Register
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <div className='px-7'>
                <DottedSpearator />
            </div>
            <CardContent className='p-7 flex flex-col gap-y-4'>
                <Button disabled={isPending} size={"lg"} variant={"secondary"} className='w-full'>
                    <FaGoogle className='mr-2 size-5' />
                    Login with Google
                </Button>
                <Button disabled={isPending} size={"lg"} variant={"secondary"} className='w-full'>
                    <FaGithub className='mr-2 size-5' />
                    Login with Github
                </Button>
            </CardContent>
            <div className='px-7'>
                <DottedSpearator />
            </div>
            <CardContent className='p-7 flex items-center justify-center'>
                <p>
                    Already have an account?
                    <Link href={"/sign-in"}>
                        <span className='text-blue-700'>
                            &nbsp;Sign In
                        </span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    )
}

export default SignUpCard;
