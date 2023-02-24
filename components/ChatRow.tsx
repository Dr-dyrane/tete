import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
  id: string;
};

export default function ChatRow({ id }: Props) {
  return (
    <Link className="flex chatRow px-1 justify-start" href={`/chat/${id}`}>
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p>Chatheader</p>
    </Link>
  );
}
