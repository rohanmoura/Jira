"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Input />
      <Button variant={"primary"} onClick={() => alert("Hello!")}>
        Hello World
      </Button>
      <Button variant={"destructive"} onClick={() => alert("Hello!")}>
        Hello World
      </Button>
      <Button variant={"secondary"} onClick={() => alert("Hello!")}>
        Hello World
      </Button>
      <Button variant={"ghost"} onClick={() => alert("Hello!")}>
        Hello World
      </Button>
      <Button variant={"muted"} onClick={() => alert("Hello!")}>
        Hello World
      </Button>
      <Button variant={"teritary"} onClick={() => alert("Hello!")}>
        Hello World
      </Button>
    </>
  );
}
