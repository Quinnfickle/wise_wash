// components/header.js
"use client";

import Link from 'next/link';
import Image from 'next/image';
import './header.css'; // optional, for custom styles

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <Image src="/logo.png" alt="Wise Wash Logo" width={100} height={100} />
      </Link>
      <nav>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
