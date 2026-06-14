import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechQ — AI Technical Interview Question Generator",
  description: "Generate role-specific technical interview questions tailored to job descriptions and candidate profiles with AI-powered difficulty scaling."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b1b3755c-ff0e-45c8-ab16-885c7807ca17"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
