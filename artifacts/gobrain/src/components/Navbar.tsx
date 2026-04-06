import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function GoBrainLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Head silhouette – profile facing left */}
      <path
        d="M30,3
           C40,3 44,12 44,22
           C44,33 38,41 35,44
           L25,46 L15,46 L17,40
           C11,37 7,31 6,25
           C4,17 7,9 13,6
           C18,3 24,3 30,3 Z"
        fill="currentColor"
      />
      {/* White brain ellipse */}
      <ellipse cx="26" cy="25" rx="14" ry="12" fill="white" />
      {/* Subtle brain fold lines */}
      <path d="M17,24 C19,21 22,22 26,25" stroke="#b3d4f0" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M26,25 C30,22 33,23 35,26" stroke="#b3d4f0" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M18,30 C21,27 24,28 26,31" stroke="#b3d4f0" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      {/* Lightbulb body */}
      <path
        d="M22,20
           C20.5,24 20,28 20.5,31
           L31.5,31
           C32,28 31.5,24 30,20
           C28.5,17.5 23.5,17.5 22,20 Z"
        fill="currentColor"
      />
      {/* Lightbulb cap */}
      <rect x="20.5" y="31" width="11" height="2"   rx="1"   fill="currentColor"/>
      <rect x="22"   y="33.5" width="8"  height="1.8" rx="0.9" fill="currentColor"/>
      {/* Spark rays */}
      <line x1="26" y1="16"  x2="26" y2="14"  stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="30" y1="17.5" x2="31.5" y2="16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="22" y1="17.5" x2="20.5" y2="16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Strona g\u0142\u00f3wna", href: "/" },
    { label: "Sklep", href: "/sklep" },
    { label: "Strefa terapeuty", href: "/strefa-terapeuty" },
    { label: "Szkolenia", href: "/szkolenia-i-webinary" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Pomoc", href: "/pomoc" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all shadow-sm">
      <div className="container mx-auto px-4 h-18 flex items-center justify-between" style={{ height: "72px" }}>
        <Link to="/" className="flex items-center gap-3 group" data-testid="link-logo">
          <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary/20 transition-colors border border-primary/10">
            <GoBrainLogo className="w-9 h-9 text-primary" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-2xl tracking-tight text-foreground" style={{ letterSpacing: "-0.02em" }}>GoBrain</span>
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-widest">{'Trening s\u0142uchowy'}</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              data-testid={`link-${link.label.toLowerCase().replace(/ /g, "-")}`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2 font-semibold shadow-sm bg-orange-500 hover:bg-orange-600 text-white border-0" data-testid="button-buy-nav">
            <a href="https://automater.com/rest/order-viewer/buy/1073862" target="_blank" rel="noopener noreferrer">
              Kup kod aktywacyjny
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/ /g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full font-semibold shadow-sm bg-orange-500 hover:bg-orange-600 text-white border-0" data-testid="button-buy-nav-mobile">
              <a href="https://automater.com/rest/order-viewer/buy/1073862" target="_blank" rel="noopener noreferrer">
                Kup kod aktywacyjny
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
