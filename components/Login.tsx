"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  return (
    <div
      className="bg-purple-900 text-white text-center h-screen 
    items-center justify-center space-y-8 flex flex-col"
    >
      <Image src="/images/tete.png" width={150} height={150} alt="logo" />
      <button className="font-bold text-3xl animate-pulse">
        Sign In to use TêteBöT
      </button>
    </div>
  );
}
