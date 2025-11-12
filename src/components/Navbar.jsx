import { Menu, Gamepad2 } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 to-blue-500 shadow-lg shadow-fuchsia-500/30">
            <Gamepad2 className="h-5 w-5" />
          </span>
          <span className="font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-blue-400">
            Frontend Architect
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-cyan-100/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-medium shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition"
          >
            Hire Me
          </a>
        </nav>
        <button
          className="md:hidden p-2 rounded-md border border-white/10 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open Menu"
        >
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-cyan-100/90 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-medium text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
