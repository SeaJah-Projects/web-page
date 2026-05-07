import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SeaJah — Software Consultancy",
  description:
    "We build world-class software and scale your team with senior talent. Staff augmentation, software development, UX/UI design, and AI consulting.",
  icons: {
    icon: "/icono-gris.png",
    apple: "/icono-gris.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${barlowCondensed.variable} ${dmSans.variable} h-full antialiased`}
    >
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var theme = localStorage.getItem('theme');
          if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          }
        })();
      ` }} />
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
