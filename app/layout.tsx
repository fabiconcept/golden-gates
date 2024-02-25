import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const fontFamily = Quicksand({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
    title: "Goldwater Home Loans Experts",
    description: "Your trusted partner for personalized and transparent home financing solutions.",
    keywords: ["Home Loans", "Mortgage Financing", "Real Estate", "Property Financing", "Homeownership", "Tailored Loans", "Expert Guidance", "Transparent Processes", "Dream Home", "Home Financing Solutions", "Refinancing Options", "Seamless Journey", "Homeownership Goals"],
    authors: [{name: "Favour Tochukwu Ajokubi"}],
    creator: "Favour Ajokubi",
    openGraph: {
        title: "Goldwater Home Loans Experts",
        description: "Your trusted partner for personalized and transparent home financing solutions.",
        url: "goldwaterloans.com",
        locale: "en_US",
        images: [
            {
                url: "https://golden-gates.sirv.com/logo.png",
                width: "782",
                height: "162",
                alt: "Photo of a home"
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Goldwater Home Loans Experts',
        description: 'Your trusted partner for personalized and transparent home financing solutions.',
        images: ['https://golden-gates.sirv.com/logo.png'],
    },
    icons: {
        icon: 'icons/android-chrome-192x192.png',
        shortcut: 'icons/android-chrome-512x512.png',
        apple: 'icons/apple-touch-icon.png',
        other: {
            rel: 'icons/favicon-16x16.png',
            url: 'icons/favicon-32x32.png',
        },
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={fontFamily.className}>{children}</body>
        </html>
    );
}