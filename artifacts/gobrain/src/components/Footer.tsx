import { Link } from "react-router-dom";
import { Phone, Mail, Facebook } from "lucide-react";
import logoImg from "@/assets/gobrain-logo-new.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
              <img src={logoImg} alt="GoBrain logo" className="w-9 h-9 rounded-lg object-contain" />
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
