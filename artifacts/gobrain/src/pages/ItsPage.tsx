import { motion, type Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/components/SEO";
import ProblemCycler from "@/components/ProblemCycler";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Ear,
  GraduationCap,
  Activity,
  Brain,
  Volume2,
  ChevronRight,
  Star,
  Zap,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Target,
  Headphones,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AUTOMATER_PRODUCTS } from "@/config/automater";
import childTabletImg from "@/assets/child-tablet-fun.webp";
import parentChildImg from "@/assets/parent-child-home.webp";
import therapistChildImg from "@/assets/therapist-child.webp";
import childrenClassroomImg from "@/assets/children-classroom.webp";
import heroChildImg from "@/assets/hero-child-new.webp";
import heroHeadphonesImg from "@/assets/hero-child-headphones.webp";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ItsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="Metoda ITS GoBrain – jak działa trening słuchowy"
        description="Poznaj metodę ITS GoBrain – innowacyjny trening słuchowy oparty na badaniach naukowych. Dowiedz się, jak poprawia koncentrację, pamięć i mowę dzieci."
        canonical="/its"
      />
      <Helmet>
        <link
          rel="preload"
          as="image"
          href="/img/hero-child-headphones-1280w.webp"
          imageSrcSet="/img/hero-child-headphones-640w.webp 640w, /img/hero-child-headphones-1280w.webp 1280w"
          imageSizes="100vw"
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ITS GoBrain — Interaktywny Trening Sluchowy",
          "alternateName": "ITS GoBrain",
          "url": "https://gobrain.pl/its",
          "description": "Innowacyjny trening sluchowy dla dzieci od 5 lat oparty na badaniach naukowych. Poprawia koncentracje, pamiec sluchowa i mowe. Program sklada sie z dwoch etapow: Etap 1 i Etap 2.",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "Windows, macOS, ChromeOS, Android, iOS",
          "inLanguage": "pl",
          "availableOnDevice": "Desktop, Mobile, Tablet",
          "offers": [
            {
              "@type": "Offer",
              "name": "ITS GoBrain Etap 1",
              "url": "https://gobrain.pl/its",
              "priceCurrency": "PLN",
              "availability": "https://schema.org/InStock",
              "seller": { "@id": "https://gobrain.pl/#organization" }
            },
            {
              "@type": "Offer",
              "name": "ITS GoBrain Etap 2",
              "url": "https://gobrain.pl/its",
              "priceCurrency": "PLN",
              "availability": "https://schema.org/InStock",
              "seller": { "@id": "https://gobrain.pl/#organization" }
            }
          ],
          "publisher": { "@id": "https://gobrain.pl/#organization" },
          "brand": { "@id": "https://gobrain.pl/#organization" },
          "audience": {
            "@type": "Audience",
            "audienceType": "Dzieci od 5 lat, rodzice, logopedzi, pedagogowie"
          }
        })}</script>
      </Helmet>
      <div className="pt-16">

        {/* ─── HERO: DLACZEGO ITS GOBRAIN ─── */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-primary text-white">
          <div className="absolute inset-0">
            <img
              src={heroHeadphonesImg}
              srcSet="/img/hero-child-headphones-640w.webp 640w, /img/hero-child-headphones-1280w.webp 1280w"
              sizes="100vw"
              alt="Dziecko podczas interaktywnego treningu słuchowego ITS GoBrain"
              className="w-full h-full object-cover opacity-50"
              style={{ objectPosition: "center 20%" }}
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/55 to-primary/10" />
          </div>

          <div className="relative z-10 container mx-auto px-4 max-w-5xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20">
                <Zap className="w-4 h-4" />
                <span>Zalety programu</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white">
                Dlaczego<br />
                <span className="text-orange-300">ITS GoBrain?</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/85 mb-6 leading-relaxed">
                Program zaprojektowany tak, aby dziecko chciało pracować — i robiło realne postępy.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-base text-white/70 leading-relaxed">
                Poniżej znajdziesz szczegółowe informacje o tym, co wyróżnia ITS GoBrain spośród innych metod pracy z dzieckiem.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ─── EFFECTS STRIP ─── */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center"
            >
              {[
                { icon: Ear, text: "Przetwarzanie słuchowe" },
                { icon: GraduationCap, text: "Wyniki w nauce" },
                { icon: Activity, text: "Wymowa i komunikacja" },
                { icon: Brain, text: "Uwaga i pamięć" },
                { icon: Volume2, text: "Wrażliwość słuchowa" },
              ].map((effect, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <effect.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-white/90">{effect.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── KARTY ZALET ─── */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-10"
            >
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                Co nas wyróżnia:
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
            >
              {[
                {
                  icon: Zap,
                  color: "bg-blue-50 text-blue-600",
                  border: "border-blue-100",
                  title: "Adaptacja w czasie rzeczywistym",
                  bullets: [
                    "Automatycznie dopasowuje poziom trudności do możliwości dziecka",
                    "Stopniowo zwiększa liczbę rozpraszaczy (dystraktorów)",
                    'Uczy koncentracji w trudnym, \u201Eg\u0142o\u015bnym\u201C \u015brodowisku',
                    "Rozwija kierunkową uwagę i przetwarzanie słuchowe",
                    "Wzmacnia uwagę słuchową (z naciskiem na prawą stronę)",
                  ],
                },
                {
                  icon: TrendingUp,
                  color: "bg-green-50 text-green-600",
                  border: "border-green-100",
                  title: "Maksymalne dopasowanie — bez frustracji",
                  bullets: [
                    "System sam analizuje postępy dziecka",
                    "Dobiera zadania w czasie rzeczywistym",
                    'Eliminuje efekt \u201Eza trudne / za \u0142atwe\u201C',
                    "Dorosły wspiera — system prowadzi",
                  ],
                },
                {
                  icon: Star,
                  color: "bg-yellow-50 text-yellow-600",
                  border: "border-yellow-100",
                  title: "Trening, który dziecko chce wykonywać",
                  bullets: [
                    "Forma angażującej gry",
                    "Atrakcyjna grafika zwiększająca motywację",
                    "Naturalne wciągnięcie dziecka w działanie",
                    "Budowanie wytrwałości i chęci podejmowania wyzwań",
                  ],
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`rounded-2xl border ${card.border} bg-background p-7 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${card.color} flex items-center justify-center`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-snug">{card.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {card.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
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
                  icon: Award,
                  color: "bg-red-50 text-red-600",
                  border: "border-red-100",
                  title: "Skuteczny tam, gdzie inne metody zawodzą",
                  bullets: [
                    "Idealny dla dzieci unikających treningów",
                    "Obniża opór przed wysiłkiem",
                    "Wprowadza dziecko w rozwój bez presji",
                    "Działa nawet przy niskiej motywacji",
                  ],
                },
                {
                  icon: Ear,
                  color: "bg-purple-50 text-purple-600",
                  border: "border-purple-100",
                  title: "Unikalne podejście",
                  bullets: [
                    "Dzieci naturalnie unikają tego, co jest dla nich trudne — a trening słuchu bywa trudny.",
                    "Zaczynamy od tego, co łatwiejsze — patrzenia — i łączymy to ze słuchaniem.",
                    "Z każdym etapem podpowiedzi wzrokowe znikają, aż dziecko trenuje słuch samodzielnie.",
                  ],
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`rounded-2xl border ${card.border} bg-background p-7 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${card.color} flex items-center justify-center`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-snug">{card.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {card.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── SEKCJA SPRZEDAŻOWA ─── */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* LEFT — tekst sprzedażowy */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                  <Ear className="w-4 h-4" />
                  <span>Interaktywny Trening Słuchowy</span>
                </motion.div>

                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  ITS GoBrain<br />
                  <span className="text-blue-200">„Zabawy z dźwiękami"</span>
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-lg text-blue-100 mb-4 leading-relaxed">
                  Interaktywny trening słuchowy GoBrain to klucz do sukcesu Twojego dziecka!
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg text-blue-100 mb-10 leading-relaxed">
                  Zindywidualizowany program skupia się na poprawie koncentracji, pamięci i uwagi słuchowej.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button size="lg" className="h-14 px-8 text-base font-semibold bg-white text-blue-700 hover:bg-blue-50" asChild>
                    <a href={AUTOMATER_PRODUCTS.itsEtap1} target="_blank" rel="noopener noreferrer">
                      Kup ITS GoBrain Etap 1
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/40 text-white hover:bg-white/10" asChild>
                    <a href={AUTOMATER_PRODUCTS.itsEtap2} target="_blank" rel="noopener noreferrer">
                      Kup ITS GoBrain Etap 2
                    </a>
                  </Button>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-8">
                  {[
                    { value: "5+", label: "lat — wiek dziecka" },
                    { value: "2–3×", label: "w tygodniu" },
                    { value: "do 25", label: "sesji treningowych" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-3xl font-black text-white">{stat.value}</p>
                      <p className="text-xs text-blue-200 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* RIGHT — zdjęcie */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative hidden lg:block"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                  <img
                    src={heroChildImg}
                    alt="Dziecko korzystające z interaktywnego treningu słuchowego ITS GoBrain"
                    className="w-full object-cover"
                    style={{ transform: "scale(1.1)", transformOrigin: "60% 30%" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(37,99,235,0.3) 0%, transparent 50%)" }} />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ─── FOR WHOM ─── */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Users className="w-4 h-4" />
                  <span>Dla kogo?</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dla kogo jest program ITS GoBrain?</h2>
                <p className="text-lg text-muted-foreground mb-8">Program dla dzieci od piątego roku życia, u których zaobserwowano:</p>

                <ProblemCycler />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src={therapistChildImg} alt="Terapeutka logopedka pracuje z dzieckiem z interaktywnym treningiem słuchowym ITS GoBrain" className="w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -right-5 bg-background rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Skuteczna pomoc dla dzieci</p>
                    <p className="font-bold text-foreground text-sm">od 5. roku życia</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── PRINCIPLES ─── */}
        <section className="py-24 bg-card border-y border-border overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative lg:order-2"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src={childrenClassroomImg} alt="Dzieci ćwiczące interaktywny trening słuchowy GoBrain" className="w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -left-5 bg-background rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Automatyczne</p>
                    <p className="font-bold text-foreground text-sm">dostosowanie poziomu</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
                  <Activity className="w-4 h-4" />
                  <span>Zasady treningu</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trzy filary skuteczności</h2>
                <p className="text-lg text-muted-foreground mb-10">Na czym opiera się skuteczność programu ITS GoBrain?</p>

                <div className="space-y-6">
                  {[
                    {
                      num: "01",
                      title: "Systematyczność",
                      desc: "Program należy stosować 2–3 razy w tygodniu. Systematyczne ćwiczenia budują trwałe zmiany w przetwarzaniu dźwięków przez mózg.",
                      color: "bg-blue-100 text-blue-600",
                    },
                    {
                      num: "02",
                      title: "Intensywność",
                      desc: "Każda sesja angażuje dziecko w aktywne słuchanie. System automatycznie dostosowuje poziom trudności do możliwości dziecka.",
                      color: "bg-orange-100 text-orange-600",
                    },
                    {
                      num: "03",
                      title: "Indywidualność",
                      desc: "Program dostosowuje się do każdego dziecka i udziela informacji zwrotnych na bieżąco. Rolą rodzica jest wyłącznie asystowanie.",
                      color: "bg-green-100 text-green-600",
                    },
                  ].map((p, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      className="flex gap-5"
                    >
                      <div className={`w-12 h-12 rounded-2xl ${p.color} flex items-center justify-center shrink-0 font-black text-sm`}>
                        {p.num}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{p.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── SCREENSHOTS ─── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                <span>Wygląd sesji treningowej</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-4">Jak wygląda interaktywny trening słuchowy?</motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Atrakcyjna grafika i angażujące ćwiczenia — dziecko ćwiczy, nie zdając sobie sprawy, że pracuje.
              </motion.p>
            </motion.div>

            <div className="overflow-hidden -mx-4">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="flex gap-4 w-max"
              >
                {[
                  { src: "/screenshots/game-screenshot-1.webp", alt: "GoBrain interaktywny trening słuchowy — ćwiczenie z ptakami na półkach" },
                  { src: "/screenshots/game-screenshot-2.webp", alt: "GoBrain interaktywny trening słuchowy — zadanie z domkami i chłopcem" },
                  { src: "/screenshots/game-screenshot-3.png", alt: "GoBrain interaktywny trening słuchowy — ćwiczenie z krową i owcą" },
                  { src: "/screenshots/game-screenshot-4.webp", alt: "GoBrain interaktywny trening słuchowy — zadanie z kulami na półkach w cyrku" },
                  { src: "/screenshots/game-screenshot-5.webp", alt: "GoBrain interaktywny trening słuchowy — ćwiczenie z ptaszkiem przy zamkach" },
                  { src: "/screenshots/game-screenshot-6.png", alt: "GoBrain interaktywny trening słuchowy — wyniki Hall of Fame po treningu" },
                  { src: "/screenshots/game-screenshot-1.webp", alt: "GoBrain interaktywny trening słuchowy — ćwiczenie z ptakami na półkach" },
                  { src: "/screenshots/game-screenshot-2.webp", alt: "GoBrain interaktywny trening słuchowy — zadanie z domkami i chłopcem" },
                  { src: "/screenshots/game-screenshot-3.png", alt: "GoBrain interaktywny trening słuchowy — ćwiczenie z krową i owcą" },
                  { src: "/screenshots/game-screenshot-4.webp", alt: "GoBrain interaktywny trening słuchowy — zadanie z kulami na półkach w cyrku" },
                  { src: "/screenshots/game-screenshot-5.webp", alt: "GoBrain interaktywny trening słuchowy — ćwiczenie z ptaszkiem przy zamkach" },
                  { src: "/screenshots/game-screenshot-6.png", alt: "GoBrain interaktywny trening słuchowy — wyniki Hall of Fame po treningu" },
                ].map((img, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-72 rounded-2xl overflow-hidden border border-border shadow-md"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-44 object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── TWO STAGES ─── */}
        <section className="py-24 bg-card border-t border-border overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Brain className="w-4 h-4" />
                <span>Program treningowy</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trening mózgu czyni mistrza</h2>
              <p className="text-xl text-muted-foreground">Program składa się z dwóch etapów dostosowanych do postępów dziecka.</p>
            </motion.div>

            {/* Etap 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                  <img src={childTabletImg} alt="Dziecko ćwiczące interaktywny trening słuchowy ITS GoBrain" className="w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -right-5 bg-background rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Sesji treningowych</p>
                    <p className="font-bold text-foreground text-sm">10–25 ćwiczeń</p>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-5 -left-5 bg-background rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Rekomendowana częstotliwość</p>
                    <p className="font-bold text-foreground text-sm">2–3 razy w tygodniu</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                  <span>ETAP 1</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Podstawy treningu słuchowego</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Pierwszy etap ITS GoBrain „Zabawy z dźwiękami" to wprowadzenie do treningu słuchowego. Program składa się z 10–25 sesji interaktywnych ćwiczeń słuchowych ćwiczących mózg dziecka. Korzystaj 2–3 razy w tygodniu.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  Dziecko ćwiczy samodzielnie i otrzymuje natychmiastową informację zwrotną, dzięki czemu szybko robi postępy. Rodzic angażuje się minimalnie, a terapeuta może na bieżąco monitorować postępy.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Interaktywne ćwiczenia słuchowe",
                    "Ze wsparciem wzrokowym",
                    "Dostosowany poziom trudności",
                    "Trening pamięci i koncentracji",
                    "Dostępny na PC i Android",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="h-12 px-8 text-base font-semibold" asChild>
                  <a href={AUTOMATER_PRODUCTS.itsEtap1} target="_blank" rel="noopener noreferrer">
                    Kup Etap 1
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Etap 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:order-2 relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                  <img src={parentChildImg} alt="Rodzic i dziecko przy interaktywnym treningu słuchowym GoBrain w domu" className="w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -left-5 bg-background rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Widoczna poprawa</p>
                    <p className="font-bold text-foreground text-sm">Koncentracja i pamięć</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-6">
                  <span>ETAP 2 — Zaawansowany</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Intensywny trening słuchowy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Gdy w Etapie 1 dziecko miało trudności lub nie ukończyło wszystkich zadań — czas na Etap 2. Z każdym treningiem pamięć i koncentracja będą się systematycznie poprawiać. Przerwa między etapami nie jest wymagana.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Wyższy poziom trudności ćwiczeń",
                    "Intensywniejszy trening mózgu",
                    "Ciągłość bez przerwy między etapami",
                    "Mierzalne efekty po każdej sesji",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold border-2" asChild>
                  <a href="https://automater.pl/rest/order-viewer/buy/918222" target="_blank" rel="noopener noreferrer">
                    Kup Etap 2
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white text-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Gotowy, by wspierać swoje dziecko?</h2>
              <p className="text-white/80 mb-10 text-lg">Zacznij trening słuchowy już dziś. Program dla dzieci od piątego roku życia.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-base bg-white text-primary hover:bg-white/90 font-semibold" asChild>
                  <a href={AUTOMATER_PRODUCTS.itsEtap1} target="_blank" rel="noopener noreferrer">
                    Kup kod aktywacyjny
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base text-white border-white/30 hover:bg-white/10" asChild>
                  <Link to="/faq">Pytania i odpowiedzi</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
