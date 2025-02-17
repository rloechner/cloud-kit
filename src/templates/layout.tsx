import { ReactNode } from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Contact from "../sections/Contact";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <main className="flex-1">{children}</main>
      <About />
      <Contact />
      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>© 2025 CloudKit. Built with Next.js.</p>
      </footer>
    </div>
  );
}