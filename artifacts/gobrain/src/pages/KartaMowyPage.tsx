import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Mic,
  FileText,
  Gamepad2,
  BarChart3,
  Download,
  Monitor,
  Smartphone,
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
import therapistChildImg from "@/assets/therapist-child.png";
import therapistDashboardImg from "@/assets/therapist-dashboard.png";

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

      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-green-50 via-white to-blue-50 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              <Mic className="w-4 h-4" />
              Narzędzie diagnostyczne
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
              Karta{" "}
              <span className="text-green-600">Mowy</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
              Kompleksowe narzędzie cyfrowe do badania, dokumentowania i utrwalania prawidłowej wymowy — dla logopedów, terapeutów, pedagogów i rodziców.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-base text-muted-foreground mb-10 max-w-xl mx-auto">
              Działa online i offline. Każde dziecko ma własną kartotekę. Dane zapisywane lokalnie.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 text-base font-semibold bg-green-600 hover:bg-green-700 text-white" asChild>
                <a href="https://gobrain.pl/kartamowy" target="_blank" rel="noopener noreferrer">
                  Kup kod aktywacyjny — 299 PLN
                  <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base" asChild>
                <a href="https://gobraintech.pl/current/Sklep_PC/KartaMowy.exe">
                  <Download className="w-4 h-4 mr-2" />
                  Pobierz wersję demo
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              {[
                { icon: Wifi, label: "Działa offline" },
                { icon: ShieldCheck, label: "Dane lokalne — pełna kontrola" },
                { icon: Users, label: "Każde dziecko ma własną kartotekę" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-green-600" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Co zawiera Karta Mowy?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-xl mx-auto">
              Wszystko, czego potrzebujesz w terapii logopedycznej — w jednym miejscu.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Mic,
                color: "bg-green-50 text-green-600",
                title: "Interaktywna karta badania mowy",
                desc: "Diagnoza w nagłosie, śródgłosie i wygłosie. Spersonalizowane ankiety i ocena narządów mowy.",
              },
              {
                icon: Gamepad2,
                color: "bg-blue-50 text-blue-600",
                title: "Gry logopedyczne online",
                desc: "Kolorowe karty, obrazki i interaktywne ćwiczenia wspierające wymowę. Angażujące dla dziecka.",
              },
              {
                icon: Printer,
                color: "bg-purple-50 text-purple-600",
                title: "Materiały do druku (PDF)",
                desc: "Gotowe elementy do wycinania, karty pracy i dokumenty do tradycyjnych zajęć bez komputera.",
              },
              {
                icon: BarChart3,
                color: "bg-orange-50 text-orange-600",
                title: "Diagnoza + analiza wyników",
                desc: "Czytelna analiza wyników w tabelach. Raporty i historia sesji w kartotece każdego dziecka.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
                src={therapistChildImg}
                alt="Terapeuta pracujący z dzieckiem z Kartą Mowy"
                className="w-full object-cover"
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
                  "Karta badania mowy — gotowy wzór",
                  "Dokument przebiegu terapii",
                  "Tabele norm wymowy poszczególnych głosek",
                  "Zgoda rodzica na badanie mowy",
                  "Kwestionariusz do badania mowy do wydruku",
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
                desc: "Bezpłatna instalacja na PC (Windows) lub Android. Po instalacji program uruchamia się w pełnej wersji — bez ograniczeń przy pierwszym użyciu.",
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
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-3">
              Wypróbuj bez zobowiązań
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg">
              Po instalacji program działa w pełnej wersji przy pierwszym uruchomieniu — idealna okazja, by sprawdzić możliwości w praktyce.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          >
            <motion.div variants={fadeInUp}>
              <a
                href="https://gobraintech.pl/current/Sklep_PC/KartaMowy.exe"
                className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-card hover:border-green-400 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <Monitor className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Karta Mowy PC</p>
                  <p className="text-sm text-muted-foreground">Windows .exe — wersja demo</p>
                </div>
                <Download className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-green-600 transition-colors" />
              </a>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <a
                href="https://gobraintech.pl/current/Sklep_Android/karta.apk"
                className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-card hover:border-green-400 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Karta Mowy Android</p>
                  <p className="text-sm text-muted-foreground">Android .apk — wersja demo</p>
                </div>
                <Download className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-green-600 transition-colors" />
              </a>
            </motion.div>
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
              Zacznij już dziś
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-3">
              Karta Mowy czeka na Ciebie. Licencja na 365 dni od aktywacji.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-white font-bold text-2xl mb-8">
              299 PLN (brutto)
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-13 px-8 text-base font-semibold bg-white text-green-700 hover:bg-white/90" asChild>
                <a href="https://gobrain.pl/kartamowy" target="_blank" rel="noopener noreferrer">
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
            <motion.div variants={fadeInUp} className="mt-8">
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
