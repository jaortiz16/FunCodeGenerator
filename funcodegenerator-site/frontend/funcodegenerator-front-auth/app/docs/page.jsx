import { Componentdocs } from "@/components/component/componentdocs";
import React from 'react'
import Link from "next/link";
function page() {
  return (
    <div>
        <header className="px-4 lg:px-6 h-16 flex items-center bg-white/40 backdrop-blur-lg">
          <Link className="flex items-center justify-center" href="#">
            <TornadoIcon className="h-6 w-6 text-black" />
            <span className="ml-2 text-black font-medium">
              FunCodeGenerator
            </span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6 text-black">
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
  