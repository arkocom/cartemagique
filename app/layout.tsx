import type { Metadata } from "next";
import { Great_Vibes, Dancing_Script, Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-great" });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-dancing" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "CarteMagique.io V2",
  description: "Créateur de cartes magiques avec animations et IA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${greatVibes.variable} ${dancing.variable} ${montserrat.variable} ${roboto.variable} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white`}>
        {children}
      </body>
    </html>
  );
}