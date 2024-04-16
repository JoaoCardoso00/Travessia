"use client"

import { Menu } from "@/components/Menu";
import "./globals.css";
import { Inter } from "next/font/google";
import { classNames } from "@/utils/cn";
import { useUserData } from "@/lib/hooks";
import { UserContext } from "@/lib/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = useUserData()

  return (
    <html lang="en">
      <UserContext.Provider value={userData}>
        <body className={classNames(inter.className, "bg-white")}>
          <Menu />
          {children}
        </body>
      </UserContext.Provider>
    </html>
  );
}
