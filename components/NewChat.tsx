import { PlusIcon } from "@heroicons/react/24/solid";

export default function NewChat() {
  return (
    <div className="flex border-gray-600 border chatRow justify-start">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}
