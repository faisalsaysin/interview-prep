import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css"; // Add your global styles or Tailwind imports here

export const metadata = {
    title: "My Machine Coding Practice",
    description: "Links to machine coding practice components",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow py-4 px-6">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
