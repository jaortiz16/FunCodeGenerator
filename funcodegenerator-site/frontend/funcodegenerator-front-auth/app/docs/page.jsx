"use client"
import { useState } from "react";
import { Componentdocs } from "@/components/component/componentdocs";
import React from 'react'
import Link from "next/link";
function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
        <header className="px-4 lg:px-6 h-16 flex items-center bg-white/40 backdrop-blur-lg">
      <div className="flex items-center w-full justify-between">
        {/* Brand */}
        <Link className="flex items-center" href="/">
          <TornadoIcon className="h-6 w-6 text-black" />
          <span className="ml-2 text-black font-medium">
            FunCodeGenerator
          </span>
        </Link>

        {/* Botón del menú (solo en dispositivos móviles) */}
        <button
          className="lg:hidden p-2"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Enlaces de la barra de navegación (solo en dispositivos grandes) */}
      <nav className="hidden lg:flex gap-4 sm:gap-6 text-black ml-auto">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 py-2"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 py-2"
          href="/docs"
        >
          Documentation
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 py-2"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 py-2"
          href="#"
        >
          Contact
        </Link>
        <Link
          className="text-sm font-medium bg-black rounded-md text-white px-4 py-2 hover:bg-gray-900"
          href="/login"
        >
          Login
        </Link>
      </nav>

      {/* Dropdown de menú para dispositivos móviles */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 w-full bg-white shadow-lg rounded-md z-50`}>
        <div className="flex flex-col gap-2 p-4">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 py-2"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 py-2"
            href="/docs"
          >
            Documentation
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 py-2"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 py-2"
            href="#"
          >
            Contact
          </Link>
          <Link
            className="text-sm font-medium bg-black rounded-md text-white px-4 py-2 hover:bg-gray-900"
            href="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
      <Componentdocs />
    </div>
  )
}

export default page
function TornadoIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 4H3" />
        <path d="M18 8H6" />
        <path d="M19 12H9" />
        <path d="M16 16h-6" />
        <path d="M11 20H9" />
      </svg>
    );
  }
  
