import type { Metadata } from "next";
import { Archivo_Black, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Planet Circle",
  description: "Dogodki, projekti in hrup iz kolektiva Planet Circle.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
