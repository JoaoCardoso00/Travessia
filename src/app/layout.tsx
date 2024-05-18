"use client";

import { Menu } from "@/components/Menu";
import "./globals.css";
import { Inter } from "next/font/google";
import { classNames } from "@/utils/cn";
import { useUserData } from "@/lib/hooks";
import { AuthProvider } from "@/contexts/useAuth";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = useUserData();

  return (
    <html lang="en">
      <AuthProvider>
        <body className={classNames(inter.className, "bg-white min-h-screen")}>
          <Menu />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
