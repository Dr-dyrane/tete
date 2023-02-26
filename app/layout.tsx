import { SessionProvider } from "../components/SessionProvider";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { getServerSession } from "next-auth";
import "../styles/globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";

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
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div
                className="hidden lg:block bg-[#200635] max-w-xs h-screen 
          overflow-y-hidden md:min-w-[17.5rem] px-2 pt-2 pb-2"
              >
                <SideBar />
              </div>
              <div className="flex-col w-screen">
                <div className="block lg:hidden">
                  <NavBar />
                </div>

                {/* ClientProvider - Notificaton */}

                <div className="bg-purple-900 h-screen flex-1">{children}</div>
              </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
