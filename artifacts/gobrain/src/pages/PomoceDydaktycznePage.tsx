import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  BookOpen,
  Package,
  ChevronRight,
  Star,
  Users,
  GraduationCap,
  Heart,
  Layers,
  Mail,
  Phone,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import childrenClassroomImg from "@/assets/children-classroom.png";
import therapistChildImg from "@/assets/therapist-child.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const products = [
  {
    id: "karty-mowy",
    icon: "🗣️",
    badge: "Bestseller",
    badgeColor: "bg-primary text-white",
    title: "Karty mowy",
    subtitle: "Zestaw do terapii logopedycznej",
    desc: "Kolorowe, trwałe karty obrazkowe wspierające terapię logopedyczną. Ćwiczą artykulację, słownik czynny i bierny oraz rozumienie mowy u dzieci.",
    price: "59",
    priceNote: "PLN (brutto)",
    features: [
      "Ponad 200 kolorowych kart obrazkowych",
      "Pogrupowane tematycznie i według głosek",
      "Dla dzieci od 2. roku życia",
      "Trwały, laminowany materiał",
      "Wskazówki metodyczne dla terapeutów",
      "Możliwość pracy indywidualnej i grupowej",
    ],
    cta: "Zamów karty",
    ctaHref: "mailto:gobrainterapeuta@gmail.com?subject=Zamówienie: Karty mowy",
    color: "border-primary",
    highlight: true,
  },
  {
    id: "karty-slow",
    icon: "📚",
    badge: "Nowość",
    badgeColor: "bg-green-500 text-white",
    title: "Karty słów",
    subtitle: "Rozwijanie słownika i mowy",
    desc: "Zestaw kart do rozwijania słownika czynnego i biernego. Idealne do ćwiczeń kategoryzacji, opisywania i budowania zdań.",
    price: "49",
    priceNote: "PLN (brutto)",
    features: [
      "150 kart z ilustracjami i podpisami",
      "Kategorie: jedzenie, zwierzęta, przyroda, dom",
      "Ćwiczenia słownikowe i gramatyczne",
      "Dla dzieci od 3. roku życia",
      "Dwustronne — ilustracja i opis",
      "Świetne do terapii i przedszkola",
    ],
    cta: "Zamów karty",
    ctaHref: "mailto:gobrainterapeuta@gmail.com?subject=Zamówienie: Karty słów",
    color: "border-green-400",
    highlight: false,
  },
  {
    id: "zeszyty-cwiczen",
    icon: "✏️",
    badge: "Polecane",
    badgeColor: "bg-orange-500 text-white",
    title: "Zeszyty ćwiczeń",
    subtitle: "Trening słuchowy i językowy",
    desc: "Drukowane materiały ćwiczeniowe do systematycznej pracy z dzieckiem w domu i gabinecie. Gotowe do użycia ćwiczenia słuchowe, artykulacyjne i językowe.",
    price: "39",
    priceNote: "PLN (brutto)",
    features: [
      "Gotowe ćwiczenia do druku (PDF + druk)",
      "Poziomy: przedszkolny i wczesnoszkolny",
      "Ćwiczenia oddechowe, fonacyjne, artykulacyjne",
      "Zadania do pracy domowej",
      "Postępy śledzisz samodzielnie",
      "Kompatybilne z programem ITS GoBrain",
    ],
    cta: "Zamów zeszyt",
    ctaHref: "mailto:gobrainterapeuta@gmail.com?subject=Zamówienie: Zeszyty ćwiczeń",
    color: "border-orange-400",
    highlight: false,
  },
  {
    id: "pakiet-terapeuta",
    icon: "🎓",
    badge: "Dla specjalistów",
    badgeColor: "bg-purple-600 text-white",
    title: "Pakiet terapeuty",
    subtitle: "Komplet materiałów do gabinetu",
    desc: "Pełny zestaw materiałów dydaktycznych dla logopedy lub pedagoga. Karty mowy, karty słów, zeszyty ćwiczeń i przewodnik metodyczny w jednym pakiecie.",
    price: "139",
    priceNote: "PLN (brutto)",
    features: [
      "Karty mowy + Karty słów + Zeszyty ćwiczeń",
      "Przewodnik metodyczny dla terapeuty",
      "Szybka wysyłka kurierem",
      "Faktura VAT w cenie",
      "Rabat -15% vs zakup oddzielny",
      "Wsparcie merytoryczne GoBrain",
    ],
    cta: "Zamów pakiet",
    ctaHref: "mailto:gobrainterapeuta@gmail.com?subject=Zamówienie: Pakiet terapeuty",
    color: "border-purple-400",
    highlight: false,
  },
];

export default function PomoceDydaktycznePage() {
  return (
    <div className="min-h-screen bg-background font-sans pt-16">

      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-orange-50 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Materiały edukacyjne GoBrain
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
              Pomoce{" "}
              <span className="text-primary">dydaktyczne</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Profesjonalne materiały do terapii logopedycznej i wsparcia rozwoju mowy. Stworzone przez Anetę Pakieła — neurologopeda i twórczynię metody GoBrain.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {[
                { icon: Star, label: "Materiały autorskie" },
                { icon: GraduationCap, label: "Zatwierdzone przez specjalistów" },
                { icon: Package, label: "Szybka wysyłka" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-primary" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {products.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeInUp}
                className={`relative flex flex-col rounded-2xl border-2 ${p.highlight ? p.color + " shadow-xl shadow-primary/10" : "border-border"} bg-card overflow-hidden`}
              >
                <div className="absolute top-3 left-3 z-10">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>

                {/* Icon area */}
                <div className="h-40 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-7xl">
                  {p.icon}
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-3">{p.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="mb-5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-2">Co zawiera:</p>
                    <ul className="space-y-1.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-4">
                      <span className="text-3xl font-black text-foreground">{p.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">{p.priceNote}</span>
                    </div>
                    <Button
                      className={`w-full h-11 font-semibold ${p.highlight ? "" : "variant-outline"}`}
                      variant={p.highlight ? "default" : "outline"}
                      asChild
                    >
                      <a href={p.ctaHref}>
                        {p.cta}
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who it's for */}
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
              Dla kogo są nasze materiały?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-xl mx-auto">
              Projektujemy pomoce zarówno do pracy terapeutycznej, jak i do codziennych ćwiczeń w domu.
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
                icon: Heart,
                color: "bg-rose-50 text-rose-600",
                title: "Rodzice",
                desc: "Systematyczna praca w domu to klucz do postępów. Nasze materiały są proste w użyciu — bez specjalistycznej wiedzy.",
              },
              {
                icon: GraduationCap,
                color: "bg-blue-50 text-blue-600",
                title: "Logopedzi i terapeuci",
                desc: "Profesjonalne narzędzia do pracy gabinetowej. Kompatybilne z metodą GoBrain i innymi podejściami terapeutycznymi.",
              },
              {
                icon: Users,
                color: "bg-green-50 text-green-600",
                title: "Nauczyciele",
                desc: "Materiały do pracy grupowej i indywidualnej w przedszkolu i szkole. Gotowe scenariusze ćwiczeń.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-background rounded-2xl border border-border p-6 text-center"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image section */}
      <section className="py-16 md:py-24">
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
                src={childrenClassroomImg}
                alt="Dzieci pracujące z pomocami dydaktycznymi"
                className="w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Layers className="w-4 h-4" />
                Metoda autorska
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-4">
                Stworzone przez praktyka, dla praktyka
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
                Wszystkie pomoce dydaktyczne GoBrain zostały opracowane przez Anetę Pakieła — neurologopedę z ponad 20-letnim doświadczeniem klinicznym. Materiały łączą aktualną wiedzę naukową z codzienną praktyką terapeutyczną.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3">
                {[
                  "Oparte na metodzie integracji słuchowej",
                  "Testowane z setkami dzieci i terapeutów",
                  "Regularnie aktualizowane i uzupełniane",
                  "Dostępne jako wydruk lub do druku (PDF)",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Masz pytanie o materiały?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8">
              Napisz lub zadzwoń — chętnie pomożemy dobrać odpowiednie pomoce do potrzeb Twojego dziecka lub gabinetu.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="h-13 px-8 text-base font-semibold" asChild>
                <a href="mailto:gobrainterapeuta@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  gobrainterapeuta@gmail.com
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="tel:+48608650435">
                  <Phone className="w-4 h-4 mr-2" />
                  608 650 435
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
