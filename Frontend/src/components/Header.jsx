import React from "react";
import { Menu, Wallet } from "lucide-react";
import { ThemeSwitch } from "./index.js";
import "../../public/stylesheets/Main.css";
import { Link } from "react-router-dom";
import { useState } from 'react';

export  default function Header({ isInRoute }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add toggle function
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleclick = () => setMobileMenuOpen(false);
return (
  <>
    <header
      className="sticky top-0 z-50 w-full shadow-md min-w-0"
      style={{
        backgroundColor: "var(--containers-background)",
        backdropFilter: "blur(16px)",
        background: "rgba(245, 245, 245, 0.3)",
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
        ) : (
          <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <ThemeSwitch />
              <Link to="/" className="text-sm font-medium text-[var(--primary-color)] hover:text-[var(--accent-color)] hover:underline underline-offset-4">Home</Link>

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
             
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center gap-3 rounded-md p-2.5 text-[var(--primary-color)]"
            >
              <ThemeSwitch />
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>

            {/* Mobile Menu Panel */}
            {mobileMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-[var(--containers-background)] border-b border-[var(--placeholder-color)] md:hidden">
                <div className="space-y-1 px-4 py-3">
                  {isInRoute ? (
                    <>
                      <Link onClick={handleclick} to="/in/dashboard" className="block px-3 py-2 text-[var(--primary-color)] hover:bg-[var(--placeholder-color)] hover:bg-opacity-10 rounded-md">Dashboard</Link>
                      <Link onClick={handleclick} to="/in/transactions" className="block px-3 py-2 text-[var(--primary-color)] hover:bg-[var(--placeholder-color)] hover:bg-opacity-10 rounded-md">Transactions</Link>
                      <Link onClick={handleclick} to="/in/expenses" className="block px-3 py-2 text-[var(--primary-color)] hover:bg-[var(--placeholder-color)] hover:bg-opacity-10 rounded-md">Expenses</Link>
                      <Link onClick={handleclick} to="/in/incomes" className="block px-3 py-2 text-[var(--primary-color)] hover:bg-[var(--placeholder-color)] hover:bg-opacity-10 rounded-md">Incomes</Link>
                    </>
                  ) : (
                    <>
                      <Link onClick={handleclick} to="/" className="block px-3 py-2 text-[var(--primary-color)] hover:bg-[var(--placeholder-color)] hover:bg-opacity-10 rounded-md">Home</Link>
                      <Link onClick={handleclick} to="/contact" className="block px-3 py-2 text-[var(--primary-color)] hover:bg-[var(--placeholder-color)] hover:bg-opacity-10 rounded-md">Contact</Link>
                      <Link onClick={handleclick} to="/about" className="block px-3 py-2 text-[var(--primary-color)] hover:bg-[var(--placeholder-color)] hover:bg-opacity-10 rounded-md">About</Link>
                      <Link onClick={handleclick} to="/entry" className="block px-3 py-2 text-white bg-[var(--secondary-color)] hover:opacity-90 rounded-md">Get Started Free</Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  </>
);
}