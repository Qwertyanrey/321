"use client";

import { useState } from "react";

const navItems = [
  { href: "#hero", label: "Главная" },
  { href: "#about", label: "Обо мне" },
  { href: "#projects", label: "Проекты" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 bg-gray-800 rounded-lg p-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-gray-300 hover:text-blue-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
