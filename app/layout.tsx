import { SessionProvider } from "../components/SessionProvider";
import SideBar from "../components/SideBar";
import { getServerSession } from "next-auth";
import "../styles/globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          <div className="flex">
            <div
              className="bg-[#200635] max-w-xs h-screen 
          overflow-y-auto md:min-w-[20rem]"
            >
              <SideBar />
            </div>

            {/* ClientProvider - Notificaton */}

            <div className="bg-purple-900 flex-1">{children}</div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
