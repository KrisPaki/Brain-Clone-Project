import { motion, type Variants } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Laptop } from "lucide-react";

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

export default function RegulaminAplikacjiPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="Regulamin korzystania z aplikacji — ITS GoBrain"
        description="Zasady korzystania z oprogramowania ITS GoBrain. Wymagania techniczne, zasady logowania, ochrona danych i prawa uzytkownika."
        canonical="/regulamin-aplikacji"
      />
      <div className="pt-16">
        <section className="py-12 md:py-16 bg-card/40 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
                <Laptop className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                Regulamin korzystania z aplikacji
              </h1>
              <p className="text-muted-foreground text-base max-w-xl mx-auto">
                Dotyczy oprogramowania ITS GoBrain (Interaktywny Trening Słuchowy).
                Ostatnia aktualizacja: lipiec 2026.
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
            <Section title="1. Informacje ogólne">
              <p>
                Niniejszy Regulamin korzystania z aplikacji (dalej: "Regulamin aplikacji") określa zasady
                dostępu do oprogramowania <strong>ITS GoBrain</strong> (Interaktywny Trening Słuchowy)
                oraz korzystania z jego funkcji przez osoby posiadające aktywną licencję.
              </p>
              <p>
                Właścicielem i operatorem oprogramowania jest <strong>Aneta Pakieła, LogoMedic</strong>.
                Kontakt:{" "}
                <a href="mailto:gobrainterapeuta@gmail.com" className="text-primary hover:underline">
                  gobrainterapeuta@gmail.com
                </a>
                , tel.{" "}
                <a href="tel:+48608650435" className="text-primary hover:underline">
                  608 650 435
                </a>
                {" "}/ <a href="tel:+48572557326" className="text-primary hover:underline">
                  572 557 326
                </a>
                .
              </p>
              <p>
                Skorzystanie z dostępu do aplikacji jest równoznaczne z akceptacją niniejszego
                Regulaminu aplikacji oraz ogólnego{" "}
                <Link to="/regulamin" className="text-primary hover:underline">
                  Regulaminu serwisu gobrain.pl
                </Link>
                .
              </p>
            </Section>

            <Section title="2. Wymagania techniczne">
              <p>
                Do korzystania z oprogramowania ITS GoBrain wymagane jest spełnienie poniższych
                minimalnych wymagań technicznych:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <strong>Przeglądarka internetowa:</strong> aktualna wersja Google Chrome, Mozilla Firefox,
                  Microsoft Edge lub Safari (zalecany Chrome lub Firefox).
                </li>
                <li>
                  <strong>System operacyjny:</strong> Windows 7 lub nowszy, macOS 10.12 lub nowszy,
                  ChromeOS, Android 8+, iOS 13+.
                </li>
                <li>
                  <strong>Procesor:</strong> co najmniej Intel Core i3 lub odpowiednik AMD (2 GHz+).
                </li>
                <li>
                  <strong>Pamięć RAM:</strong> minimum 2 GB (zalecane 4 GB).
                </li>
                <li>
                  <strong>Karta dźwiękowa i słuchawki:</strong> wymagane. Zalecane słuchawki stereo
                  z mikrofonem (nie głośniki zewnętrzne).
                </li>
                <li>
                  <strong>Połączenie z internetem:</strong> stałe łącze o przepustowości minimum 5 Mbps
                  (pobieranie). Aplikacja wymaga aktywnego połączenia podczas sesji treningowych.
                </li>
                <li>
                  <strong>Rozdzielczość ekranu:</strong> minimum 1024 x 768 px.
                </li>
              </ul>
              <p>
                Operator nie gwarantuje poprawnego działania aplikacji na urządzeniach niespełniających
                powyższych wymagań lub w przeglądarkach innych niż wymienione.
              </p>
            </Section>

            <Section title="3. Dostęp do aplikacji i konta użytkownika">
              <p>
                Po zakupie licencji Użytkownik otrzymuje drogą e-mail dane dostępowe (login i hasło
                lub link aktywacyjny) do platformy ITS GoBrain.
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  Konto jest przypisane do konkretnej osoby (rodzic/opiekun lub terapeuta) i nie może
                  być udostępniane osobom trzecim.
                </li>
                <li>
                  W przypadku licencji domowej dostęp obejmuje jedno konto dla rodzica/opiekuna i
                  jedno konto dziecka na jednym urządzeniu jednocześnie.
                </li>
                <li>
                  W przypadku licencji terapeutycznej dostęp obejmuje konto terapeuty oraz profile
                  przypisanych pacjentów w ramach abonamentu.
                </li>
                <li>
                  Użytkownik jest odpowiedzialny za ochronę danych logowania i zobowiązany do
                  niezwłocznego powiadomienia operatora o nieautoryzowanym dostępie do konta.
                </li>
              </ul>
            </Section>

            <Section title="4. Zasady prowadzenia sesji treningowych">
              <p>
                ITS GoBrain opiera się na metodzie Interaktywnego Treningu Słuchowego. W celu uzyskania
                optymalnych efektów zaleca się przestrzeganie poniższych zasad:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <strong>Czas trwania sesji:</strong> 30 minut dziennie. Przekroczenie zalecanego
                  czasu w jednej sesji nie jest rekomendowane z uwagi na zmęczenie układu słuchowego.
                </li>
                <li>
                  <strong>Regularność:</strong> minimum 3 sesje tygodniowo przez okres 7 tygodni
                  (pełen cykl treningowy).
                </li>
                <li>
                  <strong>Warunki otoczenia:</strong> ćwiczenia należy wykonywać w cichym otoczeniu,
                  w słuchawkach. Ćwiczenia w hałasie mogą zakłocic pomiar wynikow i skutecznosc treningu.
                </li>
                <li>
                  <strong>Nadzor rodzica/terapeuty:</strong> w przypadku dzieci ponizej 10 roku zycia
                  zalecana jest obecnosc rodzica lub opiekuna podczas pierwszych kilku sesji.
                </li>
              </ul>
              <p>
                Operator nie ponosi odpowiedzialnosci za brak efektow wynikajacy z nieprzestrzegania
                powyzszych zalecen lub nieregularnego uzytkowania aplikacji.
              </p>
            </Section>

            <Section title="5. Dane gromadzone przez aplikację">
              <p>
                W trakcie korzystania z oprogramowania ITS GoBrain aplikacja gromadzi i przetwarza
                nastepujace dane:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <strong>Dane sesji treningowych:</strong> czas trwania, liczba powtorzen, wyniki
                  poszczegolnych cwiczen, poziom trudnosci — w celu monitorowania postepu.
                </li>
                <li>
                  <strong>Dane logowania:</strong> adres e-mail, identyfikator konta, data ostatniego
                  logowania.
                </li>
                <li>
                  <strong>Dane techniczne:</strong> typ przegladarki, system operacyjny, rozdzielczosc
                  ekranu — do celow diagnostycznych i optymalizacji.
                </li>
              </ul>
              <p>
                Aplikacja <strong>nie nagrywa</strong> dzwieku ani wideo uzytkownika. Dane sesji
                treningowych sa przechowywane na serwerach operatora i uzywane wylacznie do celow
                statystycznych i poprawy jakosci serwisu oraz — w przypadku licencji terapeutycznej —
                udostepniane zalogowanemu terapeucie prowadzacemu.
              </p>
              <p>
                Szczegolowe informacje o przetwarzaniu danych osobowych zawiera{" "}
                <Link to="/polityka-prywatnosci" className="text-primary hover:underline">
                  Polityka prywatnosci
                </Link>
                .
              </p>
            </Section>

            <Section title="6. Zakres dozwolonego użytkowania">
              <p>Uzytkownik jest uprawniony do:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Korzystania z aplikacji zgodnie z zakupiona licencja (domowa / terapeutyczna / szkolna).</li>
                <li>Wykonywania cwiczen i sesji treningowych w ramach aktywnego konta.</li>
                <li>Pobierania i drukowania wygenerowanych raportow postepu na wlasny uzytek.</li>
              </ul>
              <p>Uzytkownik <strong>nie jest</strong> uprawniony do:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Kopiowania, reprodukowania, dystrybucji ani sprzedazy oprogramowania lub jego elementow.</li>
                <li>Udostepniania danych logowania osobom trzecim nienalezacym do licencji.</li>
                <li>Inzynierii wstecznej, dekompilacji lub modyfikacji kodu aplikacji.</li>
                <li>Automatycznego pobierania danych z aplikacji (scraping).</li>
                <li>
                  Uzywania aplikacji w celach komercyjnych innych niz przewidzianych przez zakupiona licencje
                  (np. prowadzenia treningu dla platnych klientow na licencji domowej).
                </li>
              </ul>
            </Section>

            <Section title="7. Dostępność usługi i przerwy techniczne">
              <p>
                Operator dokłada staran, aby aplikacja była dostepna przez 24 godziny na dobe,
                7 dni w tygodniu. Operator zastrzega sobie prawo do:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  Przeprowadzania planowanych przerw technicznych (konserwacja, aktualizacje) —
                  informacja o planowanych przerwach pojawi sie na stronie gobrain.pl lub zostanie
                  wysłana e-mailem z wyprzedzeniem minimum 24 godzin.
                </li>
                <li>
                  Czasowego ograniczenia dostepu do aplikacji w przypadku awarii, ataku
                  cybernetycznego lub innych zdarzen niezaleznych od operatora.
                </li>
              </ul>
              <p>
                W przypadku niedostepnosci aplikacji trwajacej dluzej niz 72 godziny z przyczyn
                lezacych po stronie operatora, okres waznosci licencji zostaje automatycznie przedluzony
                o czas niedostepnosci.
              </p>
            </Section>

            <Section title="8. Wsparcie techniczne">
              <p>
                Wsparcie techniczne dotyczace korzytania z aplikacji jest dostepne:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:gobrainterapeuta@gmail.com" className="text-primary hover:underline">
                    gobrainterapeuta@gmail.com
                  </a>{" "}
                  — czas odpowiedzi do 2 dni roboczych.
                </li>
                <li>
                  <strong>Telefon:</strong>{" "}
                  <a href="tel:+48608650435" className="text-primary hover:underline">
                    608 650 435
                  </a>{" "}
                  /{" "}
                  <a href="tel:+48572557326" className="text-primary hover:underline">
                    572 557 326
                  </a>{" "}
                  — pn.-pt., godz. 9:00–17:00.
                </li>
                <li>
                  <strong>Centrum pomocy:</strong>{" "}
                  <Link to="/pomoc" className="text-primary hover:underline">
                    gobrain.pl/pomoc
                  </Link>{" "}
                  — baza wiedzy i odpowiedzi na czeste pytania.
                </li>
              </ul>
            </Section>

            <Section title="9. Odpowiedzialność">
              <p>
                Operator nie ponosi odpowiedzialnosci za:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Przerwy w dosteepie wynikajace z awarii lacz internetowych po stronie Uzytkownika.</li>
                <li>Skutki korzystania z aplikacji niezgodnie z zaleceniami terapeutycznymi lub niniejszym Regulaminem.</li>
                <li>Brak postepu terapeutycznego wynikajacy z nieregularnego uzywania aplikacji.</li>
                <li>
                  Szkody spowodowane wirusami, atakami hakerskimi lub innymi zdarzeniami wynikajacymi
                  z dzialan osob trzecich, jesli operator zachowal nalezyta starannosc w zakresie
                  bezpieczenstwa systemu.
                </li>
              </ul>
              <p>
                Aplikacja ITS GoBrain jest narzedziem wspierajacym — nie zastepuje diagnozy
                lekarskiej ani terapii prowadzonej przez specjalistow. W przypadku watpliwosci
                diagnostycznych nalezy skonsultowac sie z audiologiem lub neurologopeda.
              </p>
            </Section>

            <Section title="10. Zmiany Regulaminu aplikacji">
              <p>
                Operator zastrzega sobie prawo do zmiany niniejszego Regulaminu aplikacji.
                O istotnych zmianach Uzytkownicy posiadajacy aktywne konta zostana poinformowani
                droga e-mailowa z wyprzedzeniem co najmniej 14 dni.
              </p>
              <p>
                Dalsze korzystanie z aplikacji po dacie wejscia w zycie zmian oznacza akceptacje
                nowego brzmienia Regulaminu aplikacji. W przypadku braku akceptacji Uzytkownik
                moze zaprzestac korzystania z aplikacji i zwrocic sie do operatora w sprawie
                rozliczenia pozostalego okresu licencji.
              </p>
            </Section>

            <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Masz pytania dotyczace warunkow korzystania z aplikacji?
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Link to="/pomoc" className="text-sm text-primary hover:underline font-medium">
                  Centrum pomocy
                </Link>
                <span className="text-muted-foreground text-sm">·</span>
                <Link to="/regulamin" className="text-sm text-primary hover:underline font-medium">
                  Regulamin serwisu
                </Link>
                <span className="text-muted-foreground text-sm">·</span>
                <Link to="/polityka-prywatnosci" className="text-sm text-primary hover:underline font-medium">
                  Polityka prywatnosci
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
