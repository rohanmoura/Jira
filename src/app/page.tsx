"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <Button onClick={() => alert("Hello!")}>
      Hello World
    </Button>
  );
}
