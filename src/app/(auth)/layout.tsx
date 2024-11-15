"use client";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


const AuthLayout = ({ children }: { children: React.ReactNode }) => {

    const parthname = usePathname();
    const isSignUp = parthname === "/sign-up";

    return (
        <main className='bg-neutral-100 min-h-screen'>
            <div className='mx-auto max-w-screen-2xl p-4'>
                <nav className='flex justify-between items-center'>
                    <Image src="/logo.svg" alt="Jira Clone Logo" width={152} height={56} />
                    <Button asChild variant={"secondary"}>
                        <Link href={isSignUp ? "/sign-in" : "/sign-up"}>
                            {isSignUp ? "Sign In" : "Sign Up"}
                        </Link>
                    </Button>
                </nav>
                <div className='flex flex-col items-center justify-center pt-4 md:pt-14'>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default AuthLayout;
