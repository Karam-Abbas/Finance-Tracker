import React from "react";
import { Menu, Wallet } from "lucide-react";
import { ThemeSwitch } from "./index.js";
import "../../public/stylesheets/Main.css";
import { Link } from "react-router-dom";
function Header({ isInRoute }) {
  return (
    <>
      <header
        className="sticky top-0 z-50 w-full shadow-md min-w-0"
        style={{
          backgroundColor: "var(--containers-background)",
          backdropFilter: "blur(16px)",
          background: "rgba(245, 245, 245, 0.3)", // Light theme
        }}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <Wallet className="h-6 w-6 text-[var(--secondary-color)]" />
            <span className="text-xl font-bold text-[var(--primary-color)]">
              Finance Tracker
            </span>
          </Link>
          {isInRoute ? (
            <>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <ThemeSwitch />
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2.5 text-[var(--primary-color)]">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
          </>
          ):(
            <>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <ThemeSwitch />
            <Link to="/about"
              className="text-sm font-medium text-[var(--primary-color)] hover:text-[var(--accent-color)] hover:underline underline-offset-4"
            >
              About Us
            </Link>
            <Link to="/contact"
              className="text-sm font-medium text-[var(--primary-color)] hover:text-[var(--accent-color)] hover:underline underline-offset-4"
            >
              Contact
            </Link>
            <Link
              to="/entry"
              className="inline-flex items-center justify-center rounded-md bg-[var(--secondary-color)] px-4 h-9 text-sm font-medium text-white shadow hover:opacity-90"
            >
              Get Started Free
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2.5 text-[var(--primary-color)]">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
          </>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
