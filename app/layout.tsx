import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Support Ticket Tracker",
  description: "A ticketing system for logging, tracking, and resolving IT issues; includes filtering, status updates, and database integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased flex flex-col'
      >
        {children}
      </body>
    </html>
  );
}
