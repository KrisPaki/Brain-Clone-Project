import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Ear,
  GraduationCap,
  Activity,
  Brain,
  Volume2,
  Download,
  Monitor,
  Smartphone,
  ChevronRight,
  Star,
  Zap,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import childTabletImg from "@/assets/child-tablet-fun.png";
import parentChildImg from "@/assets/parent-child-home.png";
import therapistChildImg from "@/assets/therapist-child.png";
import childrenClassroomImg from "@/assets/children-classroom.png";
import heroChildImg from "@/assets/hero-child-new.webp";

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
      <div className="pt-16">

        {/* ─── HERO ─── */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-background to-background border-b border-border overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Ear className="w-4 h-4" />
                  <span>Interaktywny Trening Słuchowy</span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
                  ITS GoBrain<br />
                  <span className="text-primary">„Zabawy z dźwiękami"</span>
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Interaktywny trening słuchowy GoBrain to klucz do sukcesu Twojego dziecka!
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Zindywidualizowany program skupia się na poprawie koncentracji, pamięci i uwagi słuchowej — dostępny w przeglądarce internetowej.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button size="lg" className="h-14 px-8 text-base font-semibold" asChild>
                    <a href="https://automater.pl/rest/order-viewer/buy/918448" target="_blank" rel="noopener noreferrer">
                      Kup ITS GoBrain Etap 1
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base" asChild>
                    <a href="https://automater.pl/rest/order-viewer/buy/918222" target="_blank" rel="noopener noreferrer">
                      Kup ITS GoBrain Etap 2
                    </a>
                  </Button>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-6">
                  {[
                    { value: "5+", label: "lat — wiek dziecka" },
                    { value: "2–3×", label: "w tygodniu" },
                    { value: "25", label: "sesji treningowych" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                  <img
                    src={heroChildImg}
                    alt="Dziecko korzystające z ITS GoBrain"
                    className="w-full object-cover"
                    style={{ transform: "scale(1.1)", transformOrigin: "60% 30%" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.3) 0%, transparent 50%)" }} />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -left-5 bg-background rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Rekomendowany przez</p>
                    <p className="font-bold text-foreground text-sm">Specjalistów i terapeutów</p>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-background rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Ocena rodziców</p>
                    <p className="font-bold text-foreground text-sm">4.9 / 5.0</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
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

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-3"
                >
                  {[
                    "Dziecko słyszy, ale nie słucha i wymaga powtarzania poleceń",
                    "Brak efektów terapii logopedycznej w codziennej mowie",
                    "Ma trudności z doprowadzeniem zadań do końca",
                    "Ma problemy z nauką czytania i pisania",
                    "Wykazuje nieadekwatną samoocenę",
                    "Jest nadwrażliwe na dźwięki (zatyka uszy)",
                    "Ma zaburzenia przetwarzania słuchowego (CAPD)",
                    "Miało problemy ze słuchem (np. przerost migdałków)",
                    "Wykazuje objawy dysleksji",
                    "Ma trudności z koncentracją i uwagą słuchową",
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium text-sm">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src={therapistChildImg} alt="Terapeuta z dzieckiem podczas terapii GoBrain" className="w-full object-cover" />
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
                  <img src={childrenClassroomImg} alt="Dzieci ćwiczące z programem GoBrain" className="w-full object-cover" />
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

        {/* ─── DOWNLOADS ─── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Download className="w-4 h-4" />
                <span>Wersja demo</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Pobierz i wypróbuj za darmo</h2>
              <p className="text-lg text-muted-foreground">Sprawdź program przed zakupem — bezpłatne wersje demo dla PC i Android</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {[
                {
                  href: "http://gobraintech.pl/current/Sklep_PC/ITS_Starter.exe",
                  icon: Monitor,
                  title: "ITS Starter PC",
                  sub: "Windows .exe — wersja demo",
                  color: "bg-blue-50 border-blue-200 hover:border-blue-400",
                  iconColor: "bg-blue-100 text-blue-600",
                },
                {
                  href: "http://gobraintech.pl/current/Sklep_Android/ITS_Gobrain_Starter.apk",
                  icon: Smartphone,
                  title: "ITS Starter Android",
                  sub: "Android .apk — wersja demo",
                  color: "bg-green-50 border-green-200 hover:border-green-400",
                  iconColor: "bg-green-100 text-green-600",
                },
              ].map((dl, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <a
                    href={dl.href}
                    className={`flex items-center gap-4 p-6 rounded-2xl border-2 ${dl.color} transition-all group`}
                  >
                    <div className={`w-14 h-14 ${dl.iconColor} rounded-2xl flex items-center justify-center`}>
                      <dl.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-foreground text-lg">{dl.title}</p>
                      <p className="text-sm text-muted-foreground">{dl.sub}</p>
                    </div>
                    <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
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
                  <img src={childTabletImg} alt="Dziecko ćwiczące z programem ITS GoBrain" className="w-full object-cover" />
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
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Pierwszy etap ITS GoBrain „Zabawy z dźwiękami" to wprowadzenie do treningu słuchowego. Program składa się z 10–25 sesji interaktywnych ćwiczeń słuchowych ćwiczących mózg dziecka. Korzystaj 2–3 razy w tygodniu.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Interaktywne ćwiczenia słuchowe",
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
                  <a href="https://automater.pl/rest/order-viewer/buy/918448" target="_blank" rel="noopener noreferrer">
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
                  <img src={parentChildImg} alt="Rodzic i dziecko przy treningu GoBrain w domu" className="w-full object-cover" />
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
                  <a href="https://automater.pl/rest/order-viewer/buy/918448" target="_blank" rel="noopener noreferrer">
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
