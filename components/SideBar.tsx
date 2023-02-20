"use client";

import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";

export default function SideBar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col min-h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* Map through the ChatRows */}
        </div>
      </div>
      {session && (
        <div onClick={() => signOut()} className="flex hover:opacity-50 cursor-pointer flex‐row mb-2">
          <div>
            <img
              
              src={session.user?.image!}
              alt="Profile pic"
              className="h-10 w-10 mb‐2 rounded-full mx-auto"
            />
          </div>
          <div className="flex-col px-4 space-y-1">
            <div className="text-sm text-white">{session.user?.name!}</div>
            <div className="text-xs text-slate-300">{session.user?.email!}</div>
          </div>
        </div>
      )}
    </div>
  );
}
