import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Juneid Shaikh - Full-Stack Developer | Hire Me",
  description: "Full-stack developer specializing in React, Node.js, and cloud infrastructure. I build reliable, scalable applications from concept to deployment. View my projects, case studies, and technical expertise.",
  keywords: [
    "full-stack developer",
    "React developer",
    "Node.js developer",
    "JavaScript developer",
    "web developer",
    "software engineer",
    "hire developer",
    "freelance developer",
    "Next.js developer"
  ],
  authors: [{ name: "Juneid Shaikh" }],
  creator: "Juneid Shaikh",
  openGraph: {
    title: "Juneid Shaikh - Full-Stack Developer",
    description: "Full-stack developer specializing in React, Node.js, and cloud infrastructure. Building reliable, scalable applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juneid Shaikh - Full-Stack Developer",
    description: "Full-stack developer specializing in React, Node.js, and cloud infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://juneidshaikh.dev" />
      </head>
      <body style={{overflowX:'hidden'}} className={inter.className}>{children}</body>
    </html>
  );
}
