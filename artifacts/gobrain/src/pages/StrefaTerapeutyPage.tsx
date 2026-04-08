import { motion, type Variants, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  CheckCircle2,
  BarChart2,
  ClipboardList,
  Users,
  Monitor,
  Smartphone,
  Download,
  ChevronRight,
  GraduationCap,
  Activity,
  TrendingUp,
  Star,
  Award,
  Target,
  Brain,
  ArrowRight,
  Zap,
  FileText,
  Eye,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import therapistDashboardImg from "@/assets/therapist-dashboard.png";
import testResultsImg from "@/assets/test-results-screen.png";
import childSuccessImg from "@/assets/child-success.png";
import therapistOfficeImg from "@/assets/therapist-office.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function AnimatedBar({ label, before, after, color, barColor, delay = 0 }: {
  label: string; before: number; after: number; color: string; barColor: string; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        <div className="flex gap-4 text-xs font-bold">
          <span className="text-muted-foreground">Przed: {before}%</span>
          <span className={color}>Po: {after}%</span>
        </div>
      </div>
      <div className="relative h-5 bg-muted rounded-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-muted-foreground/30 rounded-full"
          style={{ width: `${before}%` }}
        />
        <motion.div
          className={`absolute left-0 top-0 h-full rounded-full ${barColor}`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${after}%` : 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: inView ? delay + 0.1 : 0 }}
        />
        <div className="absolute inset-0 flex items-center justify-end pr-2">
          <motion.span
            className="text-[10px] font-black text-white drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            +{after - before}%
          </motion.span>
        </div>
      </div>
    </div>
  );
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setVal(to); clearInterval(timer); }
      else setVal(Math.round(start));
    }, 25);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function StrefaTerapeutyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <div className="pt-16">

        {/* ─── HERO ─── */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-primary text-white">
          <div className="absolute inset-0">
            <img
              src={therapistDashboardImg}
              alt="Terapeuta pracuje z platformą GoBrain"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
          </div>

          {/* Floating icons */}
          {[
            { icon: TrendingUp, x: "80%", y: "15%", delay: 0 },
            { icon: BarChart2, x: "88%", y: "60%", delay: 0.6 },
            { icon: Award,     x: "75%", y: "80%", delay: 1.1 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-white/20 pointer-events-none hidden lg:block"
              style={{ left: item.x, top: item.y }}
              animate={{ y: [0, -14, 0], rotate: [0, 6, -6, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            >
              <item.icon className="w-16 h-16" />
            </motion.div>
          ))}

          <div className="relative z-10 container mx-auto px-4 max-w-5xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20">
                <ClipboardList className="w-4 h-4" />
                <span>{'Dla terapeutów: logopedów, pedagogów, psychologów'}</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white">
                Platforma<br /><span className="text-orange-300">TERAPEUTA</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed">
                {'Profesjonalne narzędzie do diagnozy, monitorowania postępów i porównywania wyników '}
                <strong className="text-white">przed i po terapii</strong>
                {'. Zwiększ efektywność swojej pracy — dane mówią same za siebie.'}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base font-semibold bg-white text-primary hover:bg-white/90" asChild>
                  <a href="https://automater.pl/rest/order-viewer/buy/979413" target="_blank" rel="noopener noreferrer">
                    Kup dostęp do Platformy — 799 zł
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" className="h-14 px-8 text-base font-semibold bg-orange-500 hover:bg-orange-600 text-white border-0" asChild>
                  <Link to="/szkolenia-i-webinary">{'Szkolenia dla terapeutów'}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground"
            >
              {[
                { to: 100, suffix: "+", label: "Certyfikowanych Providerów" },
                { to: 8, suffix: "", label: "Obszarów diagnostycznych" },
                { to: 98, suffix: "%", label: "Terapeutów poleca platformę" },
                { to: 100, suffix: "%", label: "Skuteczność terapii" },
              ].map((s, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center gap-1">
                  <span className="text-4xl md:text-5xl font-black">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </span>
                  <span className="text-primary-foreground/80 text-sm font-medium">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── BEFORE / AFTER ─── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>Wyniki treningu</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Porównanie wyników: przed i po terapii
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Platforma TERAPEUTA automatycznie generuje porównanie PreTest i PostTest. Pokaż rodzicom mierzalny postęp dziecka.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Animated bars */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6"
              >
                <motion.h3 variants={fadeInUp} className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-primary" /> Średnie wyniki po 8 tygodniach treningu
                </motion.h3>
                {[
                  { label: "Pamięć słuchowa",         before: 41, after: 78, color: "text-blue-600",   barColor: "bg-blue-500",   delay: 0 },
                  { label: "Koncentracja uwagi",       before: 35, after: 74, color: "text-green-600",  barColor: "bg-green-500",  delay: 0.15 },
                  { label: "Rozróżnianie dźwięków",    before: 48, after: 82, color: "text-purple-600", barColor: "bg-purple-500", delay: 0.3 },
                  { label: "Czas reakcji słuchowej",   before: 39, after: 71, color: "text-orange-500", barColor: "bg-orange-500", delay: 0.45 },
                  { label: "Odporność na rozpraszanie",before: 30, after: 68, color: "text-pink-600",   barColor: "bg-pink-500",   delay: 0.6 },
                  { label: "Rozumienie poleceń",       before: 44, after: 80, color: "text-teal-600",   barColor: "bg-teal-500",   delay: 0.75 },
                ].map((bar, i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    <AnimatedBar {...bar} />
                  </motion.div>
                ))}

                <motion.div variants={fadeInUp} className="flex gap-4 pt-2 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-muted-foreground/30" />
                    <span className="text-muted-foreground">Wynik przed terapią (PreTest)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-green-500" />
                    <span className="text-muted-foreground">Wynik po terapii (PostTest)</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Screen photo + success card */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img src={testResultsImg} alt="Ekran wyników testu słuchowego w platformie GoBrain" className="w-full object-cover" />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2"
                  >
                    <span className="text-2xl">📈</span>
                    <div>
                      <p className="text-xs text-gray-500">Średni przyrost</p>
                      <p className="font-black text-green-600 text-lg">+35%</p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src={childSuccessImg} alt="Dziecko świętuje sukces z terapeutą" className="w-full object-cover max-h-52" />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end p-5">
                    <div>
                      <p className="text-white font-bold text-lg">Widoczny postęp już po 4 tygodniach!</p>
                      <p className="text-white/80 text-sm">Potwierdzone badaniami na 5000+ dzieci</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WORKFLOW ─── */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Jak działa platforma?</h2>
              <p className="text-xl text-muted-foreground">Cztery etapy do mierzalnych wyników</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Steps */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="lg:col-span-3 space-y-4"
              >
                {/* ETAP 01 */}
                <motion.div variants={fadeInUp} whileHover={{ x: 4 }} className="rounded-2xl bg-background border border-blue-200 hover:shadow-md transition-all overflow-hidden">
                  <div className="flex gap-5 p-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <ClipboardList className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-black text-muted-foreground tracking-widest">ETAP 01</span>
                        <ArrowRight className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <h3 className="font-bold text-foreground mb-1">Diagnoza — PreTest</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">PreTest składa się z ośmiu zadań testujących podstawowe funkcje słuchowe dziecka. Dodatkowo terapeuta może przeprowadzać szereg specjalistycznych ankiet i testów, m.in. ocenę lateralizacji, ocenę gotowości szkolnej oraz ankietę wstępną. Wszystkie te narzędzia pozwalają zidentyfikować mocne i słabe obszary funkcjonowania dziecka.</p>
                      <ul className="space-y-2">
                        {[
                          { icon: Brain, label: "Ocena lateralizacji", sub: "preferencje stronne słuchu, wzroku i ruchu" },
                          { icon: GraduationCap, label: "Ocena gotowości szkolnej", sub: "kluczowe obszary rozwojowe" },
                          { icon: Target, label: "Identyfikacja mocnych i słabych stron", sub: "podstawa do planowania terapii" },
                        ].map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <item.icon className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                            <span><span className="font-semibold text-foreground">{item.label}</span> <span className="text-muted-foreground">— {item.sub}</span></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* ETAP 02 */}
                <motion.div variants={fadeInUp} whileHover={{ x: 4 }} className="flex gap-5 p-5 rounded-2xl bg-background border border-green-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black text-muted-foreground tracking-widest">ETAP 02</span>
                      <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">Przygotowanie planu terapii</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Na podstawie wyników diagnozy terapeuta, wraz z platformą, przygotowuje indywidualny plan działań terapeutycznych. Dzięki precyzyjnej ocenie mocnych i słabych stron dziecka może zaplanować skuteczne, celowe działania terapeutyczne — a program GoBrain sam dostosuje poziom trudności do potrzeb dziecka.</p>
                  </div>
                </motion.div>

                {/* ETAP 03 */}
                <motion.div variants={fadeInUp} whileHover={{ x: 4 }} className="flex gap-5 p-5 rounded-2xl bg-background border border-purple-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black text-muted-foreground tracking-widest">ETAP 03</span>
                      <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">Monitoring postępów</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Terapeuta ma dostęp do wyników każdego dziecka w czasie rzeczywistym — śledzi postępy na bieżąco, bez względu na miejsce pracy. Platforma automatycznie porównuje poszczególne zadania, wskazując obszary wymagające większej uwagi. Na podstawie wyników terapeuta może też dostosować terapię poza systemem GoBrain.</p>
                  </div>
                </motion.div>

                {/* ETAP 04 */}
                <motion.div variants={fadeInUp} whileHover={{ x: 4 }} className="flex gap-5 p-5 rounded-2xl bg-background border border-indigo-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black text-muted-foreground tracking-widest">ETAP 04</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-1">PostTest — mierzalny postęp</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Po zakończeniu treningu terapeuta może wykonać PostTest, który automatycznie porówna wyniki przed i po treningu. Pozwala to na precyzyjne pokazanie tego, co i jak się zmieniło w funkcjonowaniu dziecka. Rodzic otrzymuje wykresy w formie PDF prezentujące mierzalny postęp — pełny obraz efektów terapii.</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Images column */}
              <div className="lg:col-span-2 space-y-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img src={therapistOfficeImg} alt="Terapeuta przy biurku z platformą GoBrain" className="w-full object-cover" />
                  </div>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-4 bg-background rounded-2xl border border-border shadow-xl p-3 flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Monitoring w czasie rzeczywistym</p>
                      <p className="font-bold text-foreground text-sm">Każda sesja pod kontrolą</p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative mt-6"
                >
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img src={testResultsImg} alt="Wyniki testu słuchowego GoBrain" className="w-full object-cover" />
                  </div>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-4 -right-4 bg-background rounded-2xl border border-border shadow-xl p-3 flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Raport wyników</p>
                      <p className="font-bold text-foreground text-sm">PDF dla rodziców</p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="relative mt-6"
                >
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img src={childSuccessImg} alt="Dziecko po udanej terapii GoBrain" className="w-full object-cover" />
                  </div>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-4 bg-background rounded-2xl border border-border shadow-xl p-3 flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center">
                      <Star className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Efekty terapii</p>
                      <p className="font-bold text-foreground text-sm">Mierzalny postęp dziecka</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FEATURES ─── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Co zawiera Platforma TERAPEUTA?</h2>
              <p className="text-lg text-muted-foreground">Kompletny zestaw diagnostyczny i monitorujący dla profesjonalistów</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: BarChart2, emoji: "📊",
                  title: "Test 8 obszarów",
                  desc: "PreTest i PostTest do badania pamięci słuchowej, czasu reakcji, odporności na rozpraszanie i rozumienia poleceń.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: ClipboardList, emoji: "📋",
                  title: "Kwestionariusze i ankiety",
                  desc: "Kwestionariusze, wywiad, próby diagnostyczne dziecka — ocena przygotowania do nauki, karta lateralizacji i pomoce do ćwiczeń.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: Activity, emoji: "📈",
                  title: "Porównanie przed/po",
                  desc: "Automatyczne porównanie PreTest i PostTest — precyzyjnie pokaż rodzicom postęp ich dziecka.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: Users, emoji: "👥",
                  title: "Śledzenie postępów",
                  desc: "Data i godzina aktywności, rodzaj zadań i wyniki każdego podopiecznego w czasie rzeczywistym. Monitorowanie aktywności terapeutycznej poza gabinetem oraz wsparcie rodziców w prowadzeniu terapii w domu.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: FileText, emoji: "📄",
                  title: "Scenariusze i pomoce",
                  desc: "Biblioteka scenariuszy terapeutycznych, planów działań i materiałów dydaktycznych do pracy z dziećmi.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: Award, emoji: "🏆",
                  title: "Certyfikat Providera",
                  desc: "Po zakupie i szkoleniu certyfikacyjnym zyskujesz tytuł Providera GoBrain i trafiasz na mapę terapeutów.",
                  color: "bg-yellow-50 border-yellow-200",
                },
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`rounded-2xl p-6 border ${feat.color} transition-all`}
                >
                  <div className="text-3xl mb-4">{feat.emoji}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── TESTIMONIAL strip ─── */}
        <section className="py-16 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  quote: "Porównanie PreTest/PostTest robi ogromne wrażenie na rodzicach. Widzą czarno na białym, że terapia działa.",
                  name: "mgr Katarzyna W.", role: "Logopeda, Warszawa",
                },
                {
                  quote: "Platforma oszczędza mi godziny pracy administracyjnej. Wszystkie raporty i postępy dzieci w jednym miejscu.",
                  name: "mgr Joanna K.", role: "Terapeuta SI, Kraków",
                },
                {
                  quote: "Jako Provider GoBrain mam stały dopływ nowych pacjentów — rodzice znajdują mnie na mapie terapeutów.",
                  name: "mgr Anna P.", role: "Pedagog specjalny, Gdańsk",
                },
              ].map((t, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border shadow-sm">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                    &quot;{t.quote}&quot;
                  </blockquote>
                  <div>
                    <p className="font-bold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── DOWNLOADS ─── */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Pobierz aplikację</h2>
              <p className="text-lg text-muted-foreground">Platforma dostępna na Windows (PC) i Android</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {[
                {
                  href: "https://gobraintech.pl/current/Sklep_PC/TERAPEUTA.exe",
                  icon: Monitor,
                  title: "Platforma TERAPEUTA (PC)",
                  sub: "Windows — plik instalacyjny .exe",
                },
                {
                  href: "https://gobraintech.pl/current/Sklep_Android/terapeuta.apk",
                  icon: Smartphone,
                  title: "Platforma TERAPEUTA (Android)",
                  sub: "Android — plik instalacyjny .apk",
                },
              ].map((dl, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <a href={dl.href}
                     className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-background hover:border-primary hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <dl.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{dl.title}</p>
                      <p className="text-sm text-muted-foreground">{dl.sub}</p>
                    </div>
                    <Download className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-background rounded-2xl border border-border p-6"
            >
              <h3 className="font-bold text-foreground mb-4">Wymagania systemowe (Windows PC)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "System: Windows 8 / 10 / 11",
                  "Procesor: 2-rdzeniowy 1.8 GHz",
                  "Pamięć RAM: min. 4 GB",
                  "Karta graficzna: DirectX 11",
                  "Wolne miejsce: min. 1 GB",
                  "Rozdzielczość: 1280 \u00d7 720",
                ].map((req, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {req}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── PROVIDER CTA ─── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dołącz do sieci<br />Providerów GoBrain</h2>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Kup Platformę, ukończ szkolenie certyfikacyjne i zyskaj tytuł <strong className="text-foreground">Providera GoBrain</strong>. Trafiasz na mapę terapeutów w całej Polsce.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="h-12 px-8" asChild>
                      <Link to="/szkolenia-i-webinary">Zapisz się na szkolenie</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                      <a href="mailto:gobrainterapeuta@gmail.com">Skontaktuj się</a>
                    </Button>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Target, text: "Certyfikat Providera GoBrain" },
                    { icon: Users, text: "Widoczność na mapie terapeutów w Polsce" },
                    { icon: Zap, text: "Indywidualny kod do zakupu kodów aktywacyjnych" },
                    { icon: Brain, text: "Pełny dostęp do platformy diagnostycznej" },
                    { icon: Star, text: "Wsparcie merytoryczne i szkoleniowe" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border"
                    >
                      <item.icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── MAP ─── */}
        <section id="mapa-terapeutow" className="py-20 bg-card border-t border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Mapa terapeutów GoBrain</h2>
              <p className="text-lg text-muted-foreground">Znajdź Providera GoBrain w Twoim mieście</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-2xl overflow-hidden border border-border shadow-lg"
            >
              <iframe
                title="Mapa terapeutów GoBrain"
                src="https://www.google.com/maps/d/embed?mid=1vzg81TvhC_-i_qYRo5o-VZ05K6dSfcy-"
                width="100%"
                height="450"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
