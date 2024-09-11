import Link from "next/link";
import React from "react";

const Header = () => (
    <header className="bg-gray-800 text-white py-4 px-8">
        <nav>
            <ul className="flex justify-between">
                <li className="list-none">
                    <Link className="hover:underline" href="/">
                        Home
                    </Link>
                </li>
                <li className="list-none">
                    <Link className="hover:underline" href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
