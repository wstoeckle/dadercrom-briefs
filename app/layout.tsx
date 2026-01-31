import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dadbercrom-Briefs | Pre-Distressed Briefs for Men",
  description: "Finally, briefs that look like you've owned them for 10 years. Skip the break-in period.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
