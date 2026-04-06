import { Link } from "react-router-dom";
import { Phone, Mail, Facebook } from "lucide-react";

function GoBrainLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M30,3 C40,3 44,12 44,22 C44,33 38,41 35,44 L25,46 L15,46 L17,40 C11,37 7,31 6,25 C4,17 7,9 13,6 C18,3 24,3 30,3 Z" fill="currentColor"/>
      <ellipse cx="26" cy="25" rx="14" ry="12" fill="white"/>
      <path d="M17,24 C19,21 22,22 26,25" stroke="#b3d4f0" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M26,25 C30,22 33,23 35,26" stroke="#b3d4f0" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M18,30 C21,27 24,28 26,31" stroke="#b3d4f0" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M22,20 C20.5,24 20,28 20.5,31 L31.5,31 C32,28 31.5,24 30,20 C28.5,17.5 23.5,17.5 22,20 Z" fill="currentColor"/>
      <rect x="20.5" y="31" width="11" height="2" rx="1" fill="currentColor"/>
      <rect x="22" y="33.5" width="8" height="1.8" rx="0.9" fill="currentColor"/>
      <line x1="26" y1="16" x2="26" y2="14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="30" y1="17.5" x2="31.5" y2="16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="22" y1="17.5" x2="20.5" y2="16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
              <div className="bg-primary/10 p-2 rounded-lg">
                <GoBrainLogo className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">GoBrain</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-5">
              Interaktywny Trening Słuchowy. Zindywidualizowany program online wspierający rozwój Twojego dziecka.
            </p>
            <div className="space-y-2">
              <a href="tel:+48608650435" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-phone">
                <Phone className="w-4 h-4 shrink-0" />
                608 650 435
              </a>
              <a href="mailto:gobrainterapeuta@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-email">
                <Mail className="w-4 h-4 shrink-0" />
                gobrainterapeuta@gmail.com
              </a>
              <a href="https://www.facebook.com/zabawyzdzwiekami" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-facebook">
                <Facebook className="w-4 h-4 shrink-0" />
                Facebook
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Produkty</h3>
            <ul className="space-y-3">
              <li><Link to="/sklep" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-sklep">Sklep</Link></li>
              <li><Link to="/its" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-its">ITS GoBrain</Link></li>
              <li><Link to="/its-school" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-its-school">ITS GoBrain School</Link></li>
              <li><Link to="/strefa-terapeuty" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-terapeuta">Platforma Terapeuta</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Firma</h3>
            <ul className="space-y-3">
              <li><Link to="/szkolenia-i-webinary" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-szkolenia">Szkolenia</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-blog">Blog</Link></li>
              <li><Link to="/pomoc" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-pomoc">Pomoc i Kontakt</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Pobierz Demo</h3>
            <ul className="space-y-3">
              <li>
                <a href="http://gobraintech.pl/current/Sklep_PC/ITS_Starter.exe" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-demo-pc">
                  ITS Starter (PC)
                </a>
              </li>
              <li>
                <a href="http://gobraintech.pl/current/Sklep_Android/ITS_Gobrain_Starter.apk" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-demo-android">
                  ITS Starter (Android)
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GoBrain Aneta Pakieła. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/polityka-prywatnosci" className="hover:text-primary transition-colors" data-testid="link-footer-privacy">Polityka prywatności</Link>
            <Link to="/regulamin" className="hover:text-primary transition-colors" data-testid="link-footer-terms">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
