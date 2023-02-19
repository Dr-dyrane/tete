import { SessionProvider } from "../components/SessionProvider";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
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
              className="hidden md:block bg-[#200635] max-w-xs h-screen 
          overflow-y-auto md:min-w-[16rem]"
            >
              <SideBar />
            </div>
            <div className="flex-col">
              <div className="block md:hidden">
                <NavBar />
              </div>

              {/* ClientProvider - Notificaton */}

              <div className="bg-purple-900 overflow-y-scroll flex-1">
                {children}
              </div>
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
