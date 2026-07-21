import { motion, type Variants } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section variants={fadeInUp} className="mb-10">
    <h2 className="text-xl font-bold text-foreground mb-3">{title}</h2>
    <div className="text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </motion.section>
);

export default function RegulaminPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="Regulamin — ITS GoBrain"
        description="Regulamin serwisu gobrain.pl i oprogramowania ITS GoBrain. Warunki korzystania z licencji, zamawiania i zwrotow."
        canonical="/regulamin"
      />
      <div className="pt-16">
        <section className="py-12 md:py-16 bg-card/40 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                Regulamin
              </h1>
              <p className="text-muted-foreground text-base max-w-xl mx-auto">
                Ostatnia aktualizacja: lipiec 2026
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <motion.div
            className="container mx-auto px-4 max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          >
            <Section title="1. Postanowienia ogólne">
              <p>
                Niniejszy Regulamin określa warunki korzystania z serwisu internetowego{" "}
                <strong>gobrain.pl</strong> oraz oprogramowania <strong>ITS GoBrain</strong>{" "}
                (Interaktywny Trening Słuchowy), oferowanego przez:{" "}
                <strong>Aneta Pakieła, LogoMedic</strong>.
              </p>
              <p>
                Kontakt: <a href="mailto:gobrainterapeuta@gmail.com" className="text-primary hover:underline">gobrainterapeuta@gmail.com</a>,
                telefon: <a href="tel:+48608650435" className="text-primary hover:underline">608 650 435</a>, <a href="tel:+48572557326" className="text-primary hover:underline">572 557 326</a>.
              </p>
              <p>
                Korzystanie z serwisu oznacza akceptację niniejszego Regulaminu.
              </p>
            </Section>

            <Section title="2. Definicje">
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong>Serwis</strong> — serwis internetowy dostępny pod adresem gobrain.pl.</li>
                <li><strong>Oprogramowanie</strong> — program komputerowy ITS GoBrain (Interaktywny Trening Słuchowy) dostarczany na licencji.</li>
                <li><strong>Licencja</strong> — zezwolenie na korzystanie z Oprogramowania w zakresie określonym w niniejszym Regulaminie.</li>
                <li><strong>Użytkownik</strong> — osoba fizyczna lub prawna korzystająca z Serwisu lub Oprogramowania.</li>
                <li><strong>Zamówienie</strong> — dyspozycja zakupu Licencji złożona przez Użytkownika.</li>
              </ul>
            </Section>

            <Section title="3. Zakres licencji">
              <p>Sprzedawca oferuje następujące rodzaje licencji:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong>Licencja domowa</strong> — do użytku na jednym urządzeniu w gospodarstwie domowym, przez rodzica lub opiekuna dziecka.</li>
                <li><strong>Licencja terapeutyczna</strong> — do użytku w gabinecie terapeutycznym przez specjalistę (logopeda, pedagog, terapeuta SI).</li>
                <li><strong>Licencja szkolna</strong> — do użytku w placówkach edukacyjnych (szkoła, przedszkole, poradnia).</li>
              </ul>
              <p>
                Licencja jest nieprzenoszalna i nie może być odsprzedawana bez pisemnej zgody administratora.
              </p>
            </Section>

            <Section title="4. Zamówienia i płatności">
              <p>
                Zamówienia realizowane są za pośrednictwem serwisu gobrain.pl lub platformy
                Automater. Ceny podane na stronie są cenami brutto (zawierają podatek VAT, jeśli
                dotyczy). Dostępne metody płatności są wskazane w procesie zamawiania.
              </p>
              <p>
                Po zaksięgowaniu płatności Użytkownik otrzymuje dostęp do Oprogramowania drogą
                elektroniczną na podany adres e-mail.
              </p>
            </Section>

            <Section title="5. Prawo do odstąpienia od umowy">
              <p>
                Zgodnie z art. 38 pkt 1 Ustawy o prawach konsumenta, prawo do odstąpienia od umowy
                nie przysługuje w odniesieniu do treści cyfrowych, które nie są zapisane na nośniku
                materialnym, jeżeli spełnianie świadczenia rozpoczęło się za wyraźną zgodą
                Konsumenta przed upływem terminu do odstąpienia od umowy i po poinformowaniu go przez
                sprzedawcę o utracie prawa do odstąpienia od umowy.
              </p>
              <p>
                W przypadku produktów fizycznych lub usług, dla których prawo do odstąpienia nie
                zostało wyłączone, Konsument ma prawo odstąpić od umowy w terminie 14 dni bez podania
                przyczyny.
              </p>
            </Section>

            <Section title="6. Reklamacje">
              <p>
                Reklamacje dotyczące Oprogramowania lub realizacji zamówienia należy składać na adres:{" "}
                <a href="mailto:gobrainterapeuta@gmail.com" className="text-primary hover:underline">gobrainterapeuta@gmail.com</a>.
              </p>
              <p>
                Reklamacja powinna zawierać: dane Użytkownika, opis problemu oraz datę wystąpienia.
                Sprzedawca rozpatruje reklamacje w terminie 14 dni roboczych.
              </p>
            </Section>

            <Section title="7. Własność intelektualna">
              <p>
                Wszelkie prawa do Oprogramowania ITS GoBrain, w tym prawa autorskie, prawa do znaków
                towarowych oraz patenty, przysługują Anecie Pakiela i jej partnerom technologicznym.
                Użytkownik nie nabywa żadnych praw własności intelektualnej do Oprogramowania poza
                zakresem udzielonej Licencji.
              </p>
            </Section>

            <Section title="8. Ochrona danych osobowych">
              <p>
                Zasady przetwarzania danych osobowych Użytkowników określa{" "}
                <Link to="/polityka-prywatnosci" className="text-primary hover:underline">
                  Polityka prywatności
                </Link>
                , stanowiąca integralną część niniejszego Regulaminu.
              </p>
            </Section>

            <Section title="9. Postanowienia końcowe">
              <p>
                W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy
                polskiego prawa, w szczególności Kodeksu cywilnego oraz Ustawy o prawach konsumenta.
              </p>
              <p>
                Sprzedawca zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzą w życie po
                opublikowaniu zaktualizowanej wersji w Serwisie.
              </p>
              <p>
                Wszelkie spory wynikające z korzystania z Serwisu lub Oprogramowania rozstrzygane
                będą przez sąd właściwy miejscowo dla siedziby Sprzedawcy, o ile przepisy prawa
                nie stanowią inaczej.
              </p>
            </Section>

            <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Pytania dotyczące regulaminu lub zamówień?
              </p>
              <Link
                to="/pomoc"
                className="text-sm text-primary hover:underline font-medium"
              >
                Centrum pomocy
              </Link>
              <span className="text-muted-foreground mx-3 text-sm">lub</span>
              <Link
                to="/polityka-prywatnosci"
                className="text-sm text-primary hover:underline font-medium"
              >
                Polityka prywatności
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
