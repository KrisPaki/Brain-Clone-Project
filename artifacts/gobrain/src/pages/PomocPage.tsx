import { motion, type Variants } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Facebook,
  MessageSquare,
  Send,
  HelpCircle,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function PomocPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="Pomoc i wsparcie techniczne – ITS GoBrain"
        description="Centrum pomocy ITS GoBrain. Instrukcje instalacji, FAQ i wsparcie techniczne dla użytkowników oprogramowania GoBrain."
        canonical="/pomoc"
      />
      <div className="pt-16">

        {/* Hero */}
        <section className="py-16 md:py-24 bg-card/40 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                <span>Centrum pomocy</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                Pomoc i kontakt
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
                Jesteśmy tu, żeby pomóc. Skontaktuj się z nami przez telefon, e-mail lub formularz kontaktowy.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact methods + form */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >

              {/* Left: Contact info */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold text-foreground mb-8">Dane kontaktowe</h2>

                <div className="space-y-5 mb-10">
                  <a
                    href="tel:+48608650435"
                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Telefon</p>
                      <p className="font-semibold text-foreground text-lg">608 650 435</p>
                    </div>
                  </a>
                  <a
                    href="tel:+48572557326"
                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Telefon</p>
                      <p className="font-semibold text-foreground text-lg">572 557 326</p>
                    </div>
                  </a>

                  <a
                    href="mailto:gobrainterapeuta@gmail.com"
                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">E-mail</p>
                      <p className="font-semibold text-foreground">gobrainterapeuta@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/gobrainpl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Facebook className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Facebook</p>
                      <p className="font-semibold text-foreground">@gobrainpl</p>
                    </div>
                  </a>
                </div>

                {/* Quick links */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="font-bold text-foreground mb-4">Przydatne linki</h3>
                  <div className="space-y-3">
                    {[
                      { icon: HelpCircle, label: "Często zadawane pytania (FAQ)", href: "/faq", internal: true },
                    ].map((link, i) => (
                      link.internal ? (
                        <Link key={i} to={link.href as string} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                          <link.icon className="w-4 h-4 shrink-0" />
                          {link.label}
                        </Link>
                      ) : (
                        <a key={i} href={link.href} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                          <link.icon className="w-4 h-4 shrink-0" />
                          {link.label}
                        </a>
                      )
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: Contact form */}
              <motion.div variants={fadeInUp}>
                <div className="bg-card rounded-3xl border border-border p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Formularz kontaktowy</h2>

                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Imię i nazwisko</Label>
                        <Input id="name" placeholder="Jan Kowalski" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Adres e-mail</Label>
                        <Input id="email" type="email" placeholder="jan@example.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon (opcjonalnie)</Label>
                      <Input id="phone" type="tel" placeholder="+48 123 456 789" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Temat</Label>
                      <Input id="subject" placeholder="Np. Pytanie o zakup kodu aktywacyjnego" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Wiadomość</Label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Opisz swoje pytanie lub problem..."
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 resize-none"
                      />
                    </div>

                    <p className="text-xs text-muted-foreground">
                      Twoje dane osobowe będą przetwarzane wyłącznie w celu odpowiedzi na Twoje zapytanie, zgodnie z{" "}
                      <Link to="/polityka-prywatnosci" className="text-primary hover:underline">polityką prywatności</Link>.
                    </p>

                    <Button type="submit" className="w-full h-12">
                      <Send className="w-4 h-4 mr-2" />
                      Wyślij wiadomość
                    </Button>
                  </form>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* Technical support */}
        <section className="py-16 bg-card border-t border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div variants={fadeInUp} className="bg-background rounded-2xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-3">Wsparcie techniczne</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">Problemy z instalacją lub uruchomieniem programu? Napisz do nas na gobrainterapeuta@gmail.com lub zadzwoń.</p>
                <a href="mailto:gobrainterapeuta@gmail.com" className="text-sm font-semibold text-primary hover:underline">Napisz e-mail →</a>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-background rounded-2xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-3">Problem z kodem aktywacyjnym?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">Jeśli kod aktywacyjny nie działa, skontaktuj się ze sprzedawcą — kliknij opcję kontaktu ze sprzedawcą po zakupie.</p>
                <a href="mailto:gobrainterapeuta@gmail.com?subject=Problem z kodem aktywacyjnym" className="text-sm font-semibold text-primary hover:underline">Skontaktuj się →</a>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-background rounded-2xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-3">Pytania o program</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">Sprawdź nasze FAQ — odpowiedzi na najczęściej zadawane pytania dotyczące programów ITS GoBrain.</p>
                <Link to="/faq" className="text-sm font-semibold text-primary hover:underline">Przejdź do FAQ →</Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
