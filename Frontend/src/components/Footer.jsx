import React from 'react'
import { Wallet } from "lucide-react"


function Footer() {
  return (
    <>
    {/* Footer */}
    <footer className="py-12 border-t shadow-[0_-4px_6px_-1px_rgba(0,0.1,0,0.1)] ">
    <div className="px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Wallet className="h-6 w-6 text-[var(--secondary-color)]" />
          <span className="text-xl font-bold text-[var(--primary-color)]">Finance Tracker</span>
        </div>
        <p className="text-sm text-[var(--placeholder-color)]">
          Free personal finance tracking to help you manage your money better.
        </p>
      </div>
      {[
        {
          title: "Product",
          links: [
            { name: "Features", href: "#features" },
            { name: "How It Works", href: "#" },
            { name: "Help Center", href: "#" }
          ]
        },
        {
          title: "Company",
          links: [
            { name: "About", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Contact", href: "#" }
          ]
        },
        {
          title: "Legal",
          links: [
            { name: "Privacy", href: "#" },
            { name: "Terms", href: "#" },
            { name: "Cookie Policy", href: "#" }
          ]
        }
      ].map((section, index) => (
        <div key={index}>
          <h3 className="font-semibold mb-4 text-[var(--primary-color)]">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.href} className="text-sm text-[var(--primary-color)] hover:text-[var(--accent-color)] hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </footer>
  </>
  )
}

export default Footer