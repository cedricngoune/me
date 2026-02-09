import type { Metadata } from "next";
import { Montserrat, DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});
const description = [
  "I'm interested in building web scalable app and learning days on days.",
  "I also interested about dealing with devOps tools like Docker, K8s, and Cloud as Aws prospector",
];

export const metadata: Metadata = {
  title: "Cédric NGOUNÉ - Porfolio ",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
  description: description.join(" "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${poppins.variable} antialiased`}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
