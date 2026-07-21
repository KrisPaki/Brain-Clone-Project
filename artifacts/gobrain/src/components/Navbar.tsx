import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/gobrain-logo-new.png";
import { AUTOMATER_PRODUCTS } from "@/config/automater";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Strona główna", href: "/" },
    { label: "ITS GoBrain", href: "/its" },
    { label: "ITS School", href: "/its-school" },
    { label: "Karta Mowy", href: "/karta-mowy" },
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
          <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors border border-primary/10">
            <img src={logoImg} alt="GoBrain logo" className="w-9 h-9 rounded-lg object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-2xl tracking-tight text-foreground" style={{ letterSpacing: "-0.02em" }}>GoBrain</span>
            <span className="flex flex-col text-[9px] font-semibold text-orange-500 uppercase tracking-widest leading-tight">
              <span>Interaktywny Trening</span>
              <span>{"Słuchowy"}</span>
            </span>
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
            <a href={AUTOMATER_PRODUCTS.itsEtap1} target="_blank" rel="noopener noreferrer">
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
              <a href={AUTOMATER_PRODUCTS.itsEtap1} target="_blank" rel="noopener noreferrer">
                Kup kod aktywacyjny
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
