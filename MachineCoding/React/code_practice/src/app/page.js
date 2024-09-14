import React from "react";
import Link from "next/link";

export default function HomePage() {
    const practiceLinks = [
        { id: 1, title: "Memory Game", link: "/memory-game" },
        { id: 2, title: "Form", link: "/form" },
        { id: 3, title: "CRUD", link: "/crud" },
        { id: 4, title: "Stopwatch", link: "/stopwatch" },
        { id: 5, title: "Hooks", link: "/hooks" },
    ];

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">
                Machine Coding Practice Links
            </h1>
            <ol>
                {practiceLinks.map((item) => (
                    <li key={item.id} className="mb-2">
                        <Link
                            className="text-blue-500 hover:underline"
                            href={item.link}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    );
}
