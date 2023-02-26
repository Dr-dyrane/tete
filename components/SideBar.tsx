"use client";

import NewChat from "./NewChat";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";

export default function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session.user?.email!, "chats")
  );

  return (
    <div className="p-2 flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="space-y-1">
          <NewChat />
          <div>{/* Model Selection */}</div>
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <div
          onClick={() => signOut()}
          className="flex hover:opacity-50 cursor-pointer flex‐row mb-2"
        >
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
