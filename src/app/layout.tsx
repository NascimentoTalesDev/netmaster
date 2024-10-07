import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastProvider } from "./providers/ToastProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Gerar teste IPTV",
  description: "Experimente nosso serviço IPTV com um teste gratuito e descubra uma nova forma de assistir TV.",
  viewport: "width=device-width, initial-scale=1",
  keywords: "IPTV, teste gratuito, streaming, TV online",
  authors: [{ name: "NetMaster" }],
  robots: "index, follow",
  openGraph: {
    title: "Gerar teste IPTV",
    description: "Experimente nosso serviço IPTV com um teste gratuito e descubra uma nova forma de assistir TV.",
    type: "website",
    url: "https://netmastertvonline.com",
    images: [
      {
        url: "https://netmastertvonline.com/wp-content/uploads/2022/10/favicon.png",
        width: 800,
        height: 600,
        alt: "Logo IPTV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerar teste IPTV",
    description: "Experimente nosso serviço IPTV com um teste gratuito e descubra uma nova forma de assistir TV.",
    images: [
      "https://netmastertvonline.com/wp-content/uploads/2022/10/favicon.png",
    ],
  },
  other: {
    language: "pt-BR",
  },
  icons: {
    icon: "https://netmastertvonline.com/wp-content/uploads/2022/10/favicon.png",
    shortcut: "https://netmastertvonline.com/wp-content/uploads/2022/10/favicon.png",
    apple: "https://netmastertvonline.com/wp-content/uploads/2022/10/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://netmastertvonline.com/wp-content/uploads/2022/10/favicon.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
