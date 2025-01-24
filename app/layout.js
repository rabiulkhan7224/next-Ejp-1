import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" >
      <body className="font-sans">
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <div>
              <Link href="/" className="mr-4">Home</Link>
              <Link href="/profile">Profile</Link>

             
            </div>
          </nav>
        </header>
        <main className="container  mx-auto mt-4">{children}</main>
      </body>
    </html>
  );
}
