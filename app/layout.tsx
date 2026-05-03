import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Search Honeypot — Catch Registrars Stealing Your Searches",
  description: "Monitor domain availability searches to catch registrars that register domains you search for. Protect your ideas with automated honeypot tracking."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0e92bd19-ccd0-4fbf-bf9b-ac1581e6f4d2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
