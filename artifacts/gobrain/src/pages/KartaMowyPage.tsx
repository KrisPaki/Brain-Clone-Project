import { motion, type Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Mic,
  FileText,
  Gamepad2,
  BarChart3,
  Download,
  ChevronRight,
  ShieldCheck,
  Users,
  Wifi,
  Mail,
  Phone,
  Printer,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import therapistChildImg from "@/assets/therapist-child.webp";
import therapistDashboardImg from "@/assets/therapist-dashboard.webp";
import childTabletTogetherImg from "@/assets/child-tablet-together.jpg";
import kartaMowyDlaKogoImg from "@/assets/karta-mowy-dla-kogo.jpg";
import anetaPakielaImg from "@/assets/aneta-pakiela.jpg";
import { AUTOMATER_PRODUCTS } from "@/config/automater";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function KartaMowyPage() {
  return (
    <div className="min-h-screen bg-background font-sans pt-16">
      <SEO
        title="Karta Mowy – narzędzie diagnostyczne GoBrain"
        description="Karta Mowy GoBrain – sprawdź poziom rozwoju mowy swojego dziecka za pomocą bezpłatnego narzędzia diagnostycznego."
        canonical="/karta-mowy"
      />
      <Helmet>
        <link
          rel="preload"
          as="image"
          href="/img/therapist-child-1280w.webp"
          imageSrcSet="/img/therapist-child-640w.webp 640w, /img/therapist-child-1280w.webp 1280w"
          imageSizes="100vw"
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Karta Mowy GoBrain",
          "url": "https://gobrain.pl/karta-mowy",
          "description": "Interaktywne narzedzie diagnostyczne do oceny rozwoju mowy dziecka. Pozwala logopedzie i rodzicowi sprawdzic poziom rozwoju mowy, identyfikowac opoznienia i monitorowac postep.",
          "applicationCategory": "MedicalApplication",
          "operatingSystem": "Windows, macOS, ChromeOS, Android, iOS",
          "inLanguage": "pl",
          "availableOnDevice": "Desktop, Mobile, Tablet",
          "featureList": "Diagnostyka mowy, Raporty PDF, Monitorowanie postepu, Baza norm rozwojowych",
          "offers": {
            "@type": "Offer",
            "name": "Karta Mowy GoBrain — licencja",
            "url": "https://gobrain.pl/karta-mowy",
            "price": "389",
            "priceCurrency": "PLN",
            "availability": "https://schema.org/InStock",
            "seller": { "@id": "https://gobrain.pl/#organization" }
          },
          "publisher": { "@id": "https://gobrain.pl/#organization" },
          "brand": { "@id": "https://gobrain.pl/#organization" },
          "audience": {
            "@type": "Audience",
            "audienceType": "Logopedzi, pedagodzy, rodzice dzieci z opoznieniem mowy"
          }
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-green-900 text-white">
        <div className="absolute inset-0">
          <img
            src={therapistChildImg}
            srcSet="/img/therapist-child-640w.webp 640w, /img/therapist-child-1280w.webp 1280w"
            sizes="100vw"
            alt="Logopedka pracuje z dzieckiem korzystając z Karty Mowy GoBrain"
            className="w-full h-full object-cover opacity-60"
            style={{ objectPosition: "center 15%" }}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-900/55 to-green-900/10" />
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20">
              <Mic className="w-4 h-4" />
              Narzędzie diagnostyczne
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white">
              Karta <span className="text-green-300">Mowy</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/85 mb-4 leading-relaxed">
              Kompleksowe narzędzie cyfrowe do badania, dokumentowania i utrwalania prawidłowej wymowy — dzięki angażującym zadaniom w formie gier — dla logopedów, terapeutów, pedagogów i rodziców.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-base text-white/70 mb-8">
              Działa online i offline. Każde dziecko ma własną kartotekę. Dane zapisywane lokalnie.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" className="h-14 px-8 text-base font-semibold bg-white text-green-900 hover:bg-white/90" asChild>
                <a href={AUTOMATER_PRODUCTS.kartaMowy} target="_blank" rel="noopener noreferrer">
                  Kup kod aktywacyjny — 389 PLN
                  <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-xs text-white/60 flex items-center gap-1 mb-8">
              <ShieldCheck className="w-3.5 h-3.5 text-green-300" />
              Bezpieczna płatność przez Automater.pl
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              {[
                { icon: Wifi, label: "Działa offline — bez potrzeby internetu" },
                { icon: ShieldCheck, label: "Dane lokalne — pełna kontrola" },
                { icon: Users, label: "Każde dziecko ma własną kartotekę" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-green-300" />
                  </div>
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Co zawiera Karta Mowy?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg">
              Cztery moduły, które zastępują stos papierów i segregatorów.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Mic,
                color: "bg-green-50 text-green-600",
                border: "border-green-100",
                title: "Badanie mowy – krok po kroku",
                points: [
                  "Diagnoza w nagłosie, śródgłosie i wygłosie",
                  "Spersonalizowane ankiety i ocena narządów mowy",
                  "Czytelna analiza wyników w tabelach",
                ],
              },
              {
                icon: Gamepad2,
                color: "bg-blue-50 text-blue-600",
                border: "border-blue-100",
                title: "Mówisz i grasz!",
                points: [
                  "Gry wspierające wymowę",
                  "Kolorowe karty, obrazki, elementy do wycinania",
                  "Możliwość zajęć bez komputera",
                  "Program działa offline — internet potrzebny tylko do drukowania",
                ],
              },
              {
                icon: Printer,
                color: "bg-purple-50 text-purple-600",
                border: "border-purple-100",
                title: "Materiały do druku (PDF)",
                points: [
                  "Gotowe elementy do wycinania i karty pracy",
                  "Dokumenty do tradycyjnych zajęć bez komputera",
                  "Wydruki dostępne z poziomu programu",
                ],
              },
              {
                icon: BarChart3,
                color: "bg-orange-50 text-orange-600",
                border: "border-orange-100",
                title: "Diagnoza + analiza wyników",
                points: [
                  "Czytelna analiza wyników w tabelach",
                  "Raporty i historia sesji",
                  "Kartoteka każdego dziecka z pełną dokumentacją",
                ],
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={`bg-card border ${item.border} rounded-2xl p-6 hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-foreground text-base">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* For whom + image */}
      <section className="py-16 bg-card/40 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={kartaMowyDlaKogoImg}
                alt="Logopedka z dzieckiem przy tablecie — sesja z Kartą Mowy GoBrain"
                className="w-full object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                Dla kogo?
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-4">
                Skuteczne wsparcie bez chaosu i papierologii
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
                Karta Mowy jest stworzona dla wszystkich, którzy chcą skutecznie wspierać rozwój mowy dzieci — bez stresu, bez stosu papierów, z pełną kontrolą nad dokumentacją i wynikami.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3">
                {[
                  "Logopedzi i neurologopedzi w gabinetach",
                  "Pedagodzy szkolni i terapeuci pedagogiczni",
                  "Psycholodzy pracujący z dziećmi",
                  "Rodzice chcący śledzić postępy wymowy dziecka",
                  "Poradnie i ośrodki terapeutyczne",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Child playing section */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Zdjęcie */}
            <div className="relative">
              <img
                src={childTabletTogetherImg}
                alt="Rodzic i dziecko grają razem w GoBrain na tablecie — ćwiczenie wymowy w domu"
                className="w-full object-cover"
                style={{ maxHeight: "460px", objectPosition: "center 30%" }}
                loading="lazy"
              />
              {/* gradient tylko na md+ — tekst nakładka na desktop */}
              <div className="hidden md:block absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)" }} />
              <div className="hidden md:flex absolute inset-0 items-center px-16">
                <div className="max-w-lg">
                  <p className="text-white/80 text-sm font-medium mb-2 uppercase tracking-widest">Karta Mowy w praktyce</p>
                  <h2 className="text-3xl font-extrabold text-white leading-tight mb-4">
                    Ćwicz wymowę razem z dzieckiem — w dowolnym miejscu
                  </h2>
                  <p className="text-white/80 text-base leading-relaxed">
                    Program działa na tablecie i komputerze. Ćwiczenia są intuicyjne — dziecko samo chce do nich wracać.
                  </p>
                </div>
              </div>
            </div>
            {/* Tekst pod zdjęciem — tylko mobile */}
            <div className="md:hidden bg-foreground px-6 py-6">
              <p className="text-white/60 text-xs font-medium mb-1 uppercase tracking-widest">Karta Mowy w praktyce</p>
              <h2 className="text-xl font-extrabold text-white leading-tight mb-3">
                Ćwicz wymowę razem z dzieckiem — w dowolnym miejscu
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Program działa na tablecie i komputerze. Ćwiczenia są intuicyjne — dziecko samo chce do nich wracać.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialist documents */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <FileText className="w-4 h-4" />
                Dokumentacja specjalisty
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-4">
                Wszystko dla specjalisty
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
                Gotowe wzory dokumentów zaoszczędzają czas i zapewniają profesjonalną dokumentację pracy terapeutycznej.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3">
                {[
                  "karta badania mowy",
                  "przebieg terapii",
                  "tabele norm wymowy poszczególnych głosek",
                  "zgoda rodzica na badanie mowy",
                  "kwestionariusz do badania mowy do wydruku i wykorzystania w tradycyjny sposób",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={therapistDashboardImg}
                alt="Panel Karta Mowy — dokumentacja i raporty"
                className="w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical details */}
      <section className="py-16 bg-card/40 border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-3">
              Jak to działa?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-xl mx-auto">
              Elastyczna instalacja i prosta aktywacja — zacznij pracę od razu.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                step: "1",
                icon: Download,
                color: "bg-green-50 text-green-600",
                title: "Pobierz i zainstaluj",
                desc: "Po instalacji — jednorazowy, bezpłatny dostęp do pełnej wersji. Przy kolejnym uruchomieniu wymagane jest wprowadzenie zakupionego kodu aktywacyjnego.",
                links: [
                  { label: "Pobierz na Windows PC", href: "https://gobraintech.pl/current/Sklep_PC/KartaMowy.exe" },
                  { label: "Pobierz na Android", href: "https://gobraintech.pl/current/Sklep_Android/karta.apk" },
                ],
              },
              {
                step: "2",
                icon: ShieldCheck,
                color: "bg-blue-50 text-blue-600",
                title: "Kup kod aktywacyjny",
                desc: "Jednorazowy kod aktywacyjny odblokowuje program na 365 dni. Po wpisaniu kodu program działa bez ograniczeń — bez ponownego logowania.",
              },
              {
                step: "3",
                icon: Database,
                color: "bg-purple-50 text-purple-600",
                title: "Pracuj i dokumentuj",
                desc: "Każde dziecko ma swoją oddzielną bazę danych z wynikami i raportami. Dane zapisywane lokalnie — pełna kontrola i bezpieczeństwo.",
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className="bg-background border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-black text-2xl text-muted-foreground/30">0{item.step}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                {"links" in item && item.links && (
                  <div className="flex flex-col gap-2 mt-3">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-green-700 hover:text-green-800 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg px-3 py-2 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5 shrink-0" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-green-600">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Zacznij już dziś – Karta Mowy czeka na Ciebie
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-3">
              Licencja na 365 dni od aktywacji.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-white font-bold text-2xl mb-8">
              389 PLN (brutto)
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-13 px-8 text-base font-semibold bg-white text-green-700 hover:bg-white/90" asChild>
                <a href={AUTOMATER_PRODUCTS.kartaMowy} target="_blank" rel="noopener noreferrer">
                  Kup kod aktywacyjny
                  <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-white text-white hover:bg-white hover:text-green-700" asChild>
                <a href="mailto:gobrainterapeuta@gmail.com?subject=Pytanie o Kartę Mowy">
                  <Mail className="w-4 h-4 mr-2" />
                  Zadaj pytanie
                </a>
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6">
              <p className="text-white/60 text-xs mb-4 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Bezpieczna płatność przez Automater.pl — kod dostarczany natychmiast po zaksięgowaniu
              </p>
              <Link to="/sklep" className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors">
                ← Wróć do sklepu
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
