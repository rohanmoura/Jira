"use client";

import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function Home() {

  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate: logout } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data])

  return (
    <pre className="flex min-h-screen flex-col items-center justify-center py-2">
        <Button onClick={() => logout()}>
          LogOut
        </Button>
    </pre>
  );
}

// email
// : 
// "convex@gmail.com"
// name
// : 
// "convex"
// password
// : 
// "Convex789456"