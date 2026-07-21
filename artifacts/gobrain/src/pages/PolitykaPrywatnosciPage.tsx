import { motion, type Variants } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

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

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="Polityka prywatnosci — ITS GoBrain"
        description="Polityka prywatnosci serwisu gobrain.pl. Dowiedz sie, jakie dane osobowe zbieramy, jak je przetwarzamy i jakie masz prawa jako uzytkownik."
        canonical="/polityka-prywatnosci"
      />
      <div className="pt-16">
        <section className="py-12 md:py-16 bg-card/40 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                Polityka prywatności
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
            <Section title="1. Administrator danych">
              <p>
                Administratorem danych osobowych przetwarzanych za pośrednictwem serwisu
                gobrain.pl jest <strong>Aneta Pakieła, LogoMedic</strong>, prowadząca działalność
                gospodarczą pod adresem wskazanym w Regulaminie.
              </p>
              <p>
                Kontakt z administratorem: <a href="mailto:gobrainterapeuta@gmail.com" className="text-primary hover:underline">gobrainterapeuta@gmail.com</a>,
                telefon: <a href="tel:+48608650435" className="text-primary hover:underline">608 650 435</a>, <a href="tel:+48572557326" className="text-primary hover:underline">572 557 326</a>.
              </p>
            </Section>

            <Section title="2. Zakres zbieranych danych">
              <p>Zbieramy dane wyłącznie w zakresie niezbędnym do realizacji usług:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Dane kontaktowe (imię, adres e-mail, numer telefonu) — podane dobrowolnie przez formularz kontaktowy lub przy zakupie licencji.</li>
                <li>Dane płatności — przetwarzane przez operatora płatności; administrator nie przechowuje danych kart płatniczych.</li>
                <li>Dane techniczne — adres IP, rodzaj przeglądarki, czas wizyty — zbierane automatycznie przez serwer i narzędzia analityczne.</li>
              </ul>
            </Section>

            <Section title="3. Cel i podstawa prawna przetwarzania">
              <p>Dane osobowe przetwarzane są w następujących celach:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Realizacja umowy (art. 6 ust. 1 lit. b RODO) — obsługa zamówień, dostarczenie licencji, wsparcie techniczne.</li>
                <li>Prawnie uzasadniony interes administratora (art. 6 ust. 1 lit. f RODO) — analiza ruchu, bezpieczeństwo serwisu, kontakt w sprawach związanych z usługą.</li>
                <li>Zgoda użytkownika (art. 6 ust. 1 lit. a RODO) — przesyłanie informacji handlowych i newslettera, jeśli wyrażono zgodę.</li>
              </ul>
            </Section>

            <Section title="4. Okres przechowywania danych">
              <p>
                Dane przechowywane są przez czas niezbędny do realizacji celu, a po jego zakończeniu
                — przez okres wynikający z przepisów prawa (m.in. przepisy podatkowe, rachunkowe).
                Dane przetwarzane na podstawie zgody są usuwane po cofnięciu zgody.
              </p>
            </Section>

            <Section title="5. Prawa użytkownika">
              <p>Przysługują Ci następujące prawa na podstawie RODO:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Prawo dostępu do danych i otrzymania kopii.</li>
                <li>Prawo do sprostowania danych.</li>
                <li>Prawo do usunięcia danych ("prawo do bycia zapomnianym").</li>
                <li>Prawo do ograniczenia przetwarzania.</li>
                <li>Prawo do przenoszenia danych.</li>
                <li>Prawo do wniesienia sprzeciwu wobec przetwarzania.</li>
                <li>Prawo do cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność przetwarzania przed cofnięciem).</li>
                <li>Prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO).</li>
              </ul>
              <p>
                Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem:
                <a href="mailto:gobrainterapeuta@gmail.com" className="text-primary hover:underline ml-1">gobrainterapeuta@gmail.com</a>.
              </p>
            </Section>

            <Section title="6. Pliki cookies">
              <p>
                Serwis używa plików cookies w celu zapewnienia poprawnego działania, zapamiętywania
                preferencji użytkownika oraz analizy statystycznej. Użytkownik może zarządzać
                ustawieniami cookies w przeglądarce.
              </p>
            </Section>

            <Section title="7. Udostępnianie danych">
              <p>
                Dane osobowe mogą być udostępniane podmiotom wspierającym realizację usług
                (hostingodawca, operator płatności, dostawca narzędzi e-mail) wyłącznie w zakresie
                niezbędnym i na podstawie stosownych umów powierzenia przetwarzania danych. Dane
                nie są sprzedawane ani przekazywane podmiotom trzecim w celach marketingowych bez
                zgody użytkownika.
              </p>
            </Section>

            <Section title="8. Zmiany polityki">
              <p>
                Administrator zastrzega sobie prawo do zmiany niniejszej polityki prywatności.
                O wszelkich istotnych zmianach użytkownicy zostaną powiadomieni drogą elektroniczną
                lub poprzez komunikat na stronie.
              </p>
            </Section>

            <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Masz pytania dotyczące prywatności?
              </p>
              <Link
                to="/pomoc"
                className="text-sm text-primary hover:underline font-medium"
              >
                Skontaktuj się z nami
              </Link>
              <span className="text-muted-foreground mx-3 text-sm">lub</span>
              <Link
                to="/regulamin"
                className="text-sm text-primary hover:underline font-medium"
              >
                Przeczytaj Regulamin
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
