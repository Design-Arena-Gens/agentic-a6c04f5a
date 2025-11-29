import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-geist-sans",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OWH STUDIO — Cinema, Producție, Experiențe",
  description:
    "OWH STUDIO este o casă de producție din Chișinău cu arhive curatoriate, servicii video premium și echipament de filmare disponibil în chirie.",
  keywords: [
    "film",
    "studio",
    "producție video",
    "OWH",
    "chișinău",
    "cronograf",
    "rental camere",
  ],
  openGraph: {
    title: "OWH STUDIO — Film, Producție video, Cronograf",
    description:
      "Descoperă filmele noastre, arhiva OWH, serviciile de producție și închiriere echipamente.",
    url: "https://agentic-a6c04f5a.vercel.app",
    siteName: "OWH STUDIO",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${inter.variable} ${bebas.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
