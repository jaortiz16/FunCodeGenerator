import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fun Code Generator: Genera Códigos Divertidos al Instante",
  description: "Descubre Fun Code Generator, tu nueva herramienta favorita para generar códigos de manera creativa y divertida. ¡Crea códigos únicos en segundos y sorprende a tus amigos con nuestras divertidas combinaciones! ¡Optimiza tu productividad y desata tu creatividad con Fun Code Generator hoy mismo!",  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {children}</body>
    </html>
  );
}
