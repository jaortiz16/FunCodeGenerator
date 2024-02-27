"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginComponent() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await fetch("http://localhost:4000/api/auth/signin", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (!data.message) {
        setErrorMessage("");
        window.location.href = "http://localhost:3001/";
   
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };
  return (
    <div
      key="1"
      className="min-h-screen flex items-center justify-center bg-black"
    >
      
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/wallpaper-network.mp4" type="video/mp4" />
      </video>
      
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6 z-10 relative">
        <div className="text-center">
          <TornadoIcon className="h-10 w-10 mx-auto mb-2" />
          <h1 className="text-3xl font-bold text-gray-700 dark:text-white mb-3">
            Funcodegenerator
          </h1>
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-3">
            Login
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The best application to understand how programming works, have fun!!
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter your password"
              required
              type="password"
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <Button className="w-full">Login</Button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?
            <Link className="text-blue-500 underline" href="/register">
              Register
            </Link>
          </p>
        </div>
        <Separator className="my-4" />
        <div className="space-y-4">
          <Button
            className="w-full flex items-center justify-center"
            variant="outline"
          >
            <ChromeIcon className="h-5 w-5 mr-2" />
            Login with Google
          </Button>
          <Button
            className="w-full flex items-center justify-center"
            variant="outline"
          >
            <FacebookIcon className="h-5 w-5 mr-2" />
            Login with Facebook
          </Button>
          <Button
            className="w-full flex items-center justify-center"
            variant="outline"
          >
            <GithubIcon className="h-5 w-5 mr-2" />
            Login with Github
          </Button>
        </div>
      </div>
    </div>
  );
}

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

function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
