"use client";

import React, { useState } from "react"; // Import useState for toggling
import "../styles/globals.css";

export default function RootLayout({ children }) {
  // State to track if the menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the menu when clicking outside the menu
  const closeMenu = () => setMenuOpen(false);

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
          {/* Logo */}
          <div className="text-2xl font-bold">Wise Wash</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#about">About</a></li>
              <li><a href="#our-work">Our Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? "✖" : "☰"} {/* '✖' when menu is open, '☰' when closed */}
            </button>
          </div>
        </header>

        {/* Mobile Menu Container */}
        {menuOpen && (
          <div
            className={`mobile-menu-container ${menuOpen ? "open" : ""}`}
            onClick={closeMenu} // Close menu when clicking outside
          >
            {/* Mobile Navigation Menu */}
            <nav className={`mobile-menu ${menuOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
              <ul>
                <li className="py-2"><a href="#about">About</a></li>
                <li className="py-2"><a href="#our-work">Our Work</a></li>
                <li className="py-2"><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        )}

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
