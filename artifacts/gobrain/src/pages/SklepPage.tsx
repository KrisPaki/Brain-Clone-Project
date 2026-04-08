import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ShoppingCart, Shield, CreditCard, Truck, ChevronRight, Play, Monitor, Smartphone, School, Building2, Users, Star, Mail } from "lucide-react";
import parentChildImg from "@/assets/parent-child-home.png";
import { Button } from "@/components/ui/button";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import productItsImg from "@/assets/product-its-gobrain.png";
import productSchoolImg from "@/assets/product-its-school.png";
import productTerapeutaImg from "@/assets/product-terapeuta.png";
import therapistChildImg from "@/assets/therapist-child.png";
import childrenClassroomImg from "@/assets/children-classroom.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const products = [
  {
    id: "its-etap1",
    badge: "Bestseller",
    badgeColor: "bg-primary text-primary-foreground",
    title: "ITS GoBrain",
    subtitle: "'Zabawy z dźwiękami' — Etap 1",
    price: "250",
    priceNote: "PLN (brutto)",
    img: productItsImg,
    imgAlt: "Pudełko produktu ITS GoBrain Etap 1",
    target: "Dla dzieci od pi\u0105tego roku \u017cycia \u2014 do stosowania w domu",
    features: [
      "4 poziomy trudności",
      "20 zadań treningowych",
      "Gry bonusowe",
      "Platforma online + aplikacja Android i PC",
      "Dostęp przez przeglądarkę internetową",
      "System automatycznego dostosowania",
    ],
    cta: "Kup teraz",
    ctaHref: "https://automater.pl/rest/order-viewer/buy/918448",
    highlight: true,
  },
  {
    id: "its-etap2",
    badge: "Etap 2",
    badgeColor: "bg-accent/80 text-white",
    title: "ITS GoBrain",
    subtitle: "'Zabawy z dźwiękami' — Etap 2",
    price: "250",
    priceNote: "PLN (brutto)",
    img: productItsImg,
    imgAlt: "Pudełko produktu ITS GoBrain Etap 2",
    target: "Kontynuacja po Etapie 1 — zaawansowany trening",
    features: [
      "Zaawansowane ćwiczenia słuchowe",
      "Wyższe poziomy trudności",
      "Gry i zadania motywacyjne",
      "Platforma online + aplikacja Android i PC",
      "Wsparcie terapeutyczne w zestawie",
      "Zalecany po ukończeniu Etapu 1",
    ],
    cta: "Kup teraz",
    ctaHref: "https://automater.pl/rest/order-viewer/buy/918222",
    highlight: false,
  },
  {
    id: "its-school",
    badge: "Licencja wielostanowiskowa",
    badgeColor: "bg-orange-500 text-white",
    title: "ITS GoBrain Pre & School",
    subtitle: "Dla placówek, gabinetów i szkół",
    price: "799",
    priceNote: "PLN / rok (brutto)",
    img: productSchoolImg,
    imgAlt: "Program ITS GoBrain Pre & School dla terapeutów i instytucji",
    target: "Dla terapeutów, gabinetów, szkół, przedszkoli, poradni, instytucji",
    features: [
      "Nieograniczona liczba użytkowników",
      "Terapeuta kontroluje czas i zakres sesji",
      "Dostęp do wszystkich zadań i poziomów",
      "Brak dobowych ograniczeń czasowych",
      "Licencja 365 dni lub bezterminowa",
      "Faktura VAT w cenie",
    ],
    cta: "Zamów licencję",
    ctaHref: "https://automater.pl/rest/order-viewer/buy/979412",
    highlight: false,
    internal: false,
  },
  {
    id: "terapeuta",
    badge: "Dla specjalistów",
    badgeColor: "bg-foreground text-background",
    title: "Platforma Terapeuta",
    subtitle: "Narzędzie diagnostyczne i terapeutyczne",
    price: "799",
    priceNote: "zł",
    img: productTerapeutaImg,
    imgAlt: "Platforma Terapeuta GoBrain",
    target: "Dla terapeutów: logopedów, pedagogów, terapeutów SI, psychologów itp.",
    features: [
      "PreTest i PostTest (diagnoza słuchu)",
      "Monitoring postępów podopiecznych",
      "Ankiety i kwestionariusze",
      "Tytuł Providera GoBrain",
      "Dostęp do szkoleń certyfikacyjnych",
      "Wsparcie techniczne i merytoryczne",
    ],
    cta: "Kup teraz",
    ctaHref: "https://automater.pl/rest/order-viewer/buy/979413",
    highlight: false,
    internal: false,
  },
  {
    id: "karty-mowy",
    badge: "Narzędzie cyfrowe",
    badgeColor: "bg-green-500 text-white",
    title: "Karta Mowy",
    subtitle: "Diagnostyka i terapia logopedyczna",
    price: "299",
    priceNote: "PLN (brutto)",
    img: therapistChildImg,
    imgAlt: "Karta Mowy GoBrain — narzędzie do diagnozy logopedycznej",
    target: "Dla logopedów, pedagogów, terapeutów i rodziców",
    features: [
      "Interaktywna karta badania mowy",
      "Gry logopedyczne online",
      "Materiały do druku (PDF)",
      "Diagnoza + analiza wyników w tabelach",
      "Działa offline — dane lokalne",
      "PC (Windows) i Android",
    ],
    cta: "Kup kod aktywacyjny",
    ctaHref: "https://automater.pl/rest/order-viewer/buy/1073862",
    highlight: false,
    internal: false,
  },
  {
    id: "programy-edukacyjne",
    badge: "Programy online",
    badgeColor: "bg-purple-600 text-white",
    title: "Programy edukacyjne",
    subtitle: "Interaktywne gry PeGoBrain",
    price: null,
    priceNote: "Dostępne online",
    img: childrenClassroomImg,
    imgAlt: "Programy edukacyjne PeGoBrain — gry logopedyczne i literki",
    target: "Dla dzieci, rodziców, logopedów i nauczycieli",
    features: [
      "Zabawy logopedyczne (10 gier z głoskami)",
      "Zabawy z literkami (8 zestawów)",
      "Kreatywny brzdąc — aktywności twórcze",
      "Dostępne w przeglądarce internetowej",
      "Opracowane przez Anetę Pakieła",
      "Kompatybilne z ITS GoBrain",
    ],
    cta: "Zobacz programy",
    ctaHref: "/programy-edukacyjne",
    highlight: false,
    internal: true,
  },
];


export default function SklepPage() {
  return (
    <div className="bg-background font-sans pt-16">

      {/* Hero */}
      <section className="py-16 md:py-24 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <ShoppingCart className="w-4 h-4" />
              Sklep GoBrain
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Wybierz program<br className="hidden md:block" /> dopasowany do potrzeb
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {'Interaktywny trening słuchowy dla dzieci od piątego roku życia. Bezpieczna płatność, natychmiastowy dostęp, faktura VAT.'}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {[
                { icon: Shield, label: "Bezpieczna płatność" },
                { icon: Truck, label: "Natychmiastowy dostęp" },
                { icon: CreditCard, label: "Faktura VAT" },
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

      {/* Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {products.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeInUp}
                className={`relative flex flex-col rounded-2xl border ${p.highlight ? "border-primary shadow-xl shadow-primary/10" : "border-border"} bg-card overflow-hidden`}
              >
                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden bg-muted h-48">
                  <img
                    src={p.img}
                    alt={p.imgAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h2 className="text-lg font-bold text-foreground">{p.title}</h2>
                  <p className="text-sm text-primary font-medium mb-2">{p.subtitle}</p>
                  <p className="text-xs text-muted-foreground mb-4">{p.target}</p>

                  {/* Price */}
                  <div className="mb-5">
                    {p.price ? (
                      <>
                        <span className="text-3xl font-extrabold text-foreground">{p.price}</span>
                        <span className="text-sm text-muted-foreground ml-1">{p.priceNote}</span>
                      </>
                    ) : (
                      <span className="text-lg font-semibold text-muted-foreground">{p.priceNote}</span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    className={`w-full font-semibold ${p.highlight ? "shadow-lg shadow-primary/20" : ""}`}
                    variant={p.highlight ? "default" : "outline"}
                  >
                    {p.internal ? (
                      <Link to={p.ctaHref}>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {p.cta}
                      </Link>
                    ) : (
                      <a href={p.ctaHref} target={p.ctaHref.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {p.cta}
                      </a>
                    )}
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demo */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-xl"
            >
              <img src={parentChildImg} alt="Rodzic i dziecko cwicza z GoBrain" className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 shadow-md">
                <span className="text-2xl">🎮</span>
                <span className="font-bold text-sm text-foreground">{'Wypróbuj DEMO za darmo!'}</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Play className="w-4 h-4" />
                <span>{'Bezpłatne demo'}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{'Sprawdź GoBrain zanim kupisz'}</h2>
              <p className="text-xl text-muted-foreground mb-6">{'Pobierz bezpłatną wersję demo i przetestuj program razem z dzieckiem. Bez rejestracji i opłat.'}</p>
              <div className="flex flex-wrap gap-3">
                {['Bezpłatne', 'Bez rejestracji', 'PC i Android', 'Kilka ćwiczeń w zestawie'].map((t, i) => (
                  <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-background rounded-3xl p-8 md:p-10 border border-border shadow-sm"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-6">
                <Play className="w-4 h-4" /> DEMO
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">ITS GoBrain Starter</h3>
              <p className="text-lg text-foreground font-medium mb-4">{'Sprawdź, jak działa przed zakupem'}</p>
              <p className="text-muted-foreground mb-8">
                {'Pobierz bezpłatną wersję ITS GoBrain Starter i poznaj program w praktyce. Demo zawiera kilka wybranych ćwiczeń z pierwszego etapu.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="w-full sm:w-auto justify-start" asChild data-testid="demo-sklep-pc">
                  <a href="http://gobraintech.pl/current/Sklep_PC/ITS_Starter.exe">
                    <Monitor className="w-4 h-4 mr-2" /> Pobierz na PC
                  </a>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto justify-start" asChild data-testid="demo-sklep-android">
                  <a href="http://gobraintech.pl/current/Sklep_Android/ITS_Gobrain_Starter.apk">
                    <Smartphone className="w-4 h-4 mr-2" /> Pobierz na Android
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-background rounded-3xl p-8 md:p-10 border border-border shadow-sm"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <School className="w-4 h-4" /> {'DLA TERAPEUTÓW I PLACÓWEK'}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">ITS GoBrain Pre & School DEMO</h3>
              <p className="text-lg text-foreground font-medium mb-4">{'Przetestuj przed wdrożeniem w gabinecie, szkole lub poradni'}</p>
              <p className="text-muted-foreground mb-8">
                {'Wersja demonstracyjna ITS GoBrain Pre & School — dla terapeutów, gabinetów, szkół, przedszkoli i poradni. Sprawdź program w realnych warunkach.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="w-full sm:w-auto justify-start" asChild data-testid="demo-school-sklep-pc">
                  <a href="http://gobraintech.pl/current/Sklep_PC/ITS_School_Starter.exe">
                    <Monitor className="w-4 h-4 mr-2" /> Pobierz na PC
                  </a>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto justify-start" asChild data-testid="demo-school-sklep-android">
                  <a href="http://gobraintech.pl/current/Sklep_Android/ITS_Szkola_starter.apk">
                    <Smartphone className="w-4 h-4 mr-2" /> Pobierz na Android
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsCarousel
        title="Co mówią nasi klienci?"
        subtitle="Dołącz do ponad 5 000 rodzin i setek terapeutów, którzy już zaufali GoBrain."
      />

      {/* How to buy */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-foreground mb-10">
              Jak kupić i zacząć?
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              {[
                { n: "1", title: "Wybierz produkt", desc: "Kliknij 'Kup teraz' przy wybranym programie. Zostaniesz przekierowany na bezpieczną platformę płatności." },
                { n: "2", title: "Opłać i odbierz kod", desc: "Po opłaceniu zamówienia otrzymasz mailem unikalny kod aktywacyjny — natychmiast po zaksięgowaniu płatności." },
                { n: "3", title: "Zainstaluj i trenuj", desc: "Pobierz aplikację na Android lub PC, albo korzystaj przez przeglądarkę. Wpisz kod i zacznij trening!" },
              ].map((step) => (
                <motion.div key={step.n} variants={fadeInUp} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">{step.n}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
              Masz pytania?{" "}
              <Link to="/faq" className="text-primary hover:underline font-medium">
                Sprawdź FAQ
              </Link>{" "}
              lub{" "}
              <Link to="/pomoc" className="text-primary hover:underline font-medium">
                skontaktuj się z nami
              </Link>
              .
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Provider Section */}
      <section className="py-16 md:py-24 border-t border-border bg-gradient-to-br from-slate-900 via-primary/90 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 max-w-5xl relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-semibold mb-6">
                <Building2 className="w-4 h-4" />
                Program partnerski
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Zostań Providerem GoBrain
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                Dołącz do sieci placówek i terapeutów korzystających z GoBrain na co dzień.
                Uzyskaj dostęp do specjalnych warunków, wsparcia i narzędzi dla profesjonalistów.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Licencje grupowe",
                  desc: "Pakietowy dostęp do programu dla całej placówki lub gabinetu — wygodnie, bez limitów stanowisk.",
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: "Preferencyjne ceny",
                  desc: "Specjalne warunki handlowe, rabaty i pierwszeństwo dostępu do nowych modułów programu.",
                },
                {
                  icon: <School className="w-6 h-6" />,
                  title: "Wsparcie merytoryczne",
                  desc: "Szkolenia, materiały dydaktyczne i bezpośredni kontakt z zespołem GoBrain dla Twoich pracowników.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/15 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="font-semibold text-lg mb-1">Zainteresowany programem Provider?</p>
                <p className="text-white/70 text-sm">
                  Skontaktuj się z nami — przygotujemy ofertę dopasowaną do potrzeb Twojej placówki lub gabinetu.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold h-12 px-6" asChild>
                  <a href="mailto:gobrainterapeuta@gmail.com?subject=Program%20Provider%20GoBrain">
                    <Mail className="w-4 h-4 mr-2" />
                    Napisz do nas
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 h-12 px-6 bg-transparent" asChild>
                  <a href="tel:+48608650435">
                    tel. 608 650 435
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Gotowy na zmianę?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Dołącz do tysięcy rodzin, które już poprawiły koncentrację i wyniki edukacyjne swoich dzieci.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-semibold shadow-lg shadow-primary/20 h-14 px-8 text-base" asChild>
                <a href="https://automater.pl/rest/order-viewer/buy/918448" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Kup kod aktywacyjny
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-background" asChild>
                <Link to="/its">
                  Dowiedz się więcej <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
