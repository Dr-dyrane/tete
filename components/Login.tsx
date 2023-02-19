"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="bg-purple-900 text-white h-screen items-center justify-center flex">
      <Image src="/images/tete.png" width={300} height={300} alt="logo" />
    </div>
  );
}
