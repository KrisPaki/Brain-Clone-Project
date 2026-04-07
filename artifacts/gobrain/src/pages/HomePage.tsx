import { motion, type Variants, animate, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import anetaPakielaImg from "@/assets/aneta-pakiela-real.webp";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import heroChildImg from "@/assets/hero-child-headphones.png";
import childTabletImg from "@/assets/child-tablet-fun.png";
import therapistChildImg from "@/assets/therapist-child.png";
import childrenClassroomImg from "@/assets/children-classroom.png";
import parentChildImg from "@/assets/parent-child-home.png";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { 
  Play, 
  CheckCircle2, 
  Brain, 
  School, 
  Stethoscope, 
  GraduationCap, 
  Activity, 
  Ear,
  Quote,
  ChevronRight,
  Monitor,
  Smartphone,
  Music,
  Star,
  Zap,
  Heart,
  Target,
  BookOpen,
  Headphones,
  Smile,
  Trophy,
  Users,
  BarChart2,
  TrendingUp,
  Mic,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return controls.stop;
  }, [target]);

  return <span ref={ref}>{value}{suffix}</span>;
}

function ProgressBar({ label, before, after, color, bgColor, delay = 0 }: {
  label: string; before: number; after: number; color: string; bgColor: string; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-semibold text-foreground">{label}</span>
        <span className={`font-black ${color}`}>+{after - before} pkt</span>
      </div>
      <div className="relative h-6 bg-muted rounded-full overflow-hidden">
        <div className="absolute h-full bg-muted-foreground/20 rounded-full" style={{ width: `${before}%` }} />
        <motion.div
          className={`absolute h-full rounded-full ${bgColor}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${after}%` } : { width: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay }}
        />
        <div className="absolute inset-0 flex items-center px-3">
          <motion.span
            className="text-xs font-black text-white drop-shadow ml-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: delay + 0.9 }}
          >
            {after}%
          </motion.span>
        </div>
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Przed: {before}%</span>
        <span className={color}>Po 8 tygodniach: {after}%</span>
      </div>
    </div>
  );
}

function RingChart({ percent, color, label, sublabel }: {
  percent: number; color: string; label: string; sublabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const r = 38;
  const circ = 2 * Math.PI * r;
  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeWidth="10" className="text-muted" />
          <motion.circle
            cx="50" cy="50" r={r}
            fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={inView ? { strokeDashoffset: circ - (circ * percent) / 100 } : { strokeDashoffset: circ }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-xl font-black text-foreground"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ delay: 1, type: "spring" }}
          >
            {percent}%
          </motion.span>
        </div>
      </div>
      <p className="font-bold text-foreground text-sm text-center leading-tight">{label}</p>
      <p className="text-xs text-muted-foreground text-center">{sublabel}</p>
    </div>
  );
}

export default function HomePage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">

      
      <div className="pt-16">
        
        {/* SECTION 1 - Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <AuroraBackground className="absolute inset-0" showRadialGradient={true}>
            <span />
          </AuroraBackground>

          {/* Floating animated icons */}
          {[
            { icon: Music, x: "8%", y: "15%", color: "text-blue-400", delay: 0, size: "w-8 h-8" },
            { icon: Star, x: "85%", y: "20%", color: "text-yellow-400", delay: 0.5, size: "w-6 h-6" },
            { icon: Headphones, x: "90%", y: "70%", color: "text-purple-400", delay: 1, size: "w-7 h-7" },
            { icon: Heart, x: "5%", y: "75%", color: "text-pink-400", delay: 0.8, size: "w-6 h-6" },
            { icon: Zap, x: "15%", y: "45%", color: "text-orange-400", delay: 1.2, size: "w-5 h-5" },
            { icon: Smile, x: "78%", y: "45%", color: "text-green-400", delay: 0.3, size: "w-7 h-7" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`absolute ${item.color} opacity-60 pointer-events-none hidden lg:block`}
              style={{ left: item.x, top: item.y }}
              animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            >
              <item.icon className={item.size} />
            </motion.div>
          ))}

          <div className="relative z-10 container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full mb-6 font-black text-base uppercase tracking-widest" style={{ background: "linear-gradient(90deg, #0066cc, #7c3aed, #ea580c)", color: "#fff", letterSpacing: "0.12em" }}>
                  <Brain className="w-5 h-5 shrink-0" />
                  <span>ITS GoBrain</span>
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-3 uppercase">
                  Poprawa koncentracji, pamięci i sukces edukacyjny Twojego dziecka.
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg md:text-xl font-semibold text-primary mb-4">
                  Interaktywny Trening GoBrain dla dzieci (od 5 roku życia)
                </motion.p>

                <motion.p variants={fadeInUp} className="text-base text-muted-foreground mb-3 leading-relaxed">
                  Zauważasz, że Twoje dziecko "słyszy, ale nie słucha"? Ma problemy z czytaniem, pisaniem lub rozumieniem poleceń?
                </motion.p>

                <motion.p variants={fadeInUp} className="text-base text-muted-foreground mb-8 leading-relaxed">
                  GoBrain to innowacyjne narzędzie stworzone, by wspierać terapię uwagi i koncentracji słuchowej najmłodszych poprzez angażującą zabawę.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="text-base h-14 px-8 shadow-lg shadow-primary/20" asChild data-testid="hero-buy-btn">
                    <Link to="/sklep">Przejdź do sklepu</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-background" asChild data-testid="hero-learn-btn">
                    <Link to="/its">Dowiedz się więcej</Link>
                  </Button>
                </motion.div>

                {/* Mini stat pills */}
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                  {[
                    { icon: "🧠", label: "5000+ dzieci" },
                    { icon: "⭐", label: "4.9/5.0 ocena" },
                    { icon: "🎵", label: "20 ćwiczeń" },
                  ].map((s, i) => (
                    <div key={i} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-background border border-border shadow-sm text-sm font-medium text-foreground">
                      <span>{s.icon}</span>{s.label}
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Images — hero + secondary */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                  <img
                    src={heroChildImg}
                    alt="Dziecko korzystające z programu ITS GoBrain w słuchawkach"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                {/* Floating badge */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-background rounded-2xl border border-border shadow-lg px-5 py-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Ocena rodziców</p>
                    <p className="font-bold text-foreground text-sm">⭐ 4.9 / 5.0</p>
                  </div>
                </motion.div>
                {/* Second floating badge top-right */}
                <motion.div 
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-background rounded-2xl border border-border shadow-lg px-4 py-3 flex items-center gap-2"
                >
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <p className="font-bold text-foreground text-sm">Rekomendowany przez ekspertów</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
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
                { target: 5000, suffix: "+", label: "Dzieci skorzystało" },
                { target: 98, suffix: "%", label: "Zadowolonych rodziców" },
                { target: 20, suffix: "", label: "Zadań treningowych" },
                { target: 4, suffix: "", label: "Poziomy trudności" },
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center gap-1">
                  <span className="text-4xl md:text-5xl font-black">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </span>
                  <span className="text-primary-foreground/80 text-sm font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 - Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Section header with child tablet image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Brain className="w-4 h-4" />
                  <span>Nasze programy</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Wybierz program dla swojego dziecka</h2>
                <p className="text-xl text-muted-foreground">Cztery rozwiązania dostosowane do różnych potrzeb — dla domu, szkoły i gabinetu terapeutycznego.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-xl max-h-64 lg:max-h-none"
              >
                <img src={childTabletImg} alt="Dziecko ćwiczy z programem ITS GoBrain na tablecie" className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent lg:hidden" />
              </motion.div>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: Brain,
                  title: 'ITS GoBrain',
                  subtitle: '"Zabawy z dźwiękami"',
                  desc: 'Dla dzieci od piątego roku życia, do stosowania w domu.',
                  link: '/its',
                  color: 'text-primary',
                  bg: 'bg-primary/10'
                },
                {
                  icon: School,
                  title: 'ITS GoBrain Pre & School',
                  subtitle: 'Licencja dla placówek',
                  desc: 'Dla terapeutów, gabinetów, szkół, przedszkoli, poradni i instytucji.',
                  link: '/its-school',
                  color: 'text-accent',
                  bg: 'bg-accent/10'
                },
                {
                  icon: Mic,
                  title: 'Karta Mowy',
                  subtitle: 'Diagnostyka logopedyczna',
                  desc: 'Narzędzie cyfrowe do badania, dokumentowania i utrwalania prawidłowej wymowy.',
                  link: '/karta-mowy',
                  color: 'text-green-600',
                  bg: 'bg-green-50'
                },
                {
                  icon: Stethoscope,
                  title: 'Platforma Terapeuta',
                  subtitle: 'Narzędzie specjalisty',
                  desc: 'Dla terapeutów: logopedów, pedagogów, psychologów, itp.',
                  link: '/strefa-terapeuty',
                  color: 'text-foreground',
                  bg: 'bg-muted'
                }
              ].map((prod, i) => (
                <motion.div key={i} variants={fadeInUp} className="group relative bg-card rounded-2xl p-8 border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl ${prod.bg} flex items-center justify-center mb-6`}>
                    <prod.icon className={`w-7 h-7 ${prod.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{prod.title}</h3>
                  <p className="text-sm font-medium text-primary mb-3">{prod.subtitle}</p>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{prod.desc}</p>
                  <Link to={prod.link} className="inline-flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors" data-testid={`prod-link-${i}`}>
                    Dowiedz się więcej <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 - Demo mini strip */}
        <section className="py-8 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-between gap-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Play className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Wypróbuj demo za darmo</p>
                  <p className="text-sm text-muted-foreground">{'Bez rejestracji i opłat — PC i Android'}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Button variant="outline" size="sm" className="justify-start" asChild data-testid="demo-home-pc">
                  <a href="http://gobraintech.pl/current/Sklep_PC/ITS_Starter.exe">
                    <Monitor className="w-4 h-4 mr-2" /> Demo PC
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="justify-start" asChild data-testid="demo-home-android">
                  <a href="http://gobraintech.pl/current/Sklep_Android/ITS_Gobrain_Starter.apk">
                    <Smartphone className="w-4 h-4 mr-2" /> Demo Android
                  </a>
                </Button>
                <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20" asChild>
                  <Link to="/sklep">{'Wszystkie wersje demo →'}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 - For whom? — PHOTO RIGHT */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Text side — LEFT */}
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="mb-10"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    <Users className="w-4 h-4" />
                    <span>Dla kogo?</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dla kogo jest program ITS GoBrain?</h2>
                  <p className="text-xl text-muted-foreground">{'Program dla dzieci od piątego roku życia'}</p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {[
                    { icon: Ear, text: "Słyszy, ale nie słucha" },
                    { icon: Brain, text: "Nie rozumie poleceń" },
                    { icon: BookOpen, text: "Problemy z czytaniem i pisaniem" },
                    { icon: Target, text: "Trudności z koncentracją" },
                    { icon: Headphones, text: "Wrażliwe na dźwięki" },
                    { icon: Activity, text: "Zaburzenia przetwarzania (CAPD)" },
                    { icon: GraduationCap, text: "Wymaga powtarzania poleceń" },
                    { icon: Heart, text: "Po problemach ze słuchem" },
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground font-medium text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Photo side — RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src={therapistChildImg} alt="Terapeuta pracuje z dzieckiem" className="w-full object-cover" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-background rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Skuteczność</p>
                    <p className="font-bold text-foreground">Potwierdzona klinicznie</p>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 5 - Effects */}
        <section className="py-24 bg-card border-y border-border overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                <Trophy className="w-4 h-4" />
                <span>Efekty terapii</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Co zyskuje Twoje dziecko?</h2>
              <p className="text-xl text-muted-foreground">Potwierdzone naukowo rezultaty regularnych treningów</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Effects cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  { icon: Ear, emoji: "👂", text: "Poprawa przetwarzania słuchowego", color: "bg-blue-50 border-blue-200", iconColor: "text-blue-600", iconBg: "bg-blue-100" },
                  { icon: GraduationCap, emoji: "📚", text: "Lepsze wyniki w nauce i szkole", color: "bg-green-50 border-green-200", iconColor: "text-green-600", iconBg: "bg-green-100" },
                  { icon: Activity, emoji: "🗣️", text: "Lepsza wymowa i komunikacja", color: "bg-purple-50 border-purple-200", iconColor: "text-purple-600", iconBg: "bg-purple-100" },
                  { icon: Brain, emoji: "🧠", text: "Więcej uwagi, koncentracji i pamięci", color: "bg-orange-50 border-orange-200", iconColor: "text-orange-600", iconBg: "bg-orange-100" },
                  { icon: Headphones, emoji: "🎧", text: "Normalizacja wrażliwości na dźwięki", color: "bg-pink-50 border-pink-200", iconColor: "text-pink-600", iconBg: "bg-pink-100" },
                  { icon: Smile, emoji: "😊", text: "Wzrost pewności siebie dziecka", color: "bg-yellow-50 border-yellow-200", iconColor: "text-yellow-600", iconBg: "bg-yellow-100" },
                ].map((effect, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`rounded-2xl p-5 border ${effect.color} flex items-start gap-4 transition-all`}
                  >
                    <div className={`w-12 h-12 ${effect.iconBg} rounded-xl flex items-center justify-center shrink-0 text-2xl`}>
                      {effect.emoji}
                    </div>
                    <p className="font-semibold text-foreground text-sm leading-snug mt-1">{effect.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Classroom photo */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src={childrenClassroomImg} alt="Dzieci uczą się z GoBrain w klasie" className="w-full object-cover" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -left-5 bg-background rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3"
                >
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="text-xs text-muted-foreground">Ocena szkół</p>
                    <p className="font-bold text-foreground">100% poleca!</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 5b - Charts & Data */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>Wyniki w liczbach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mierzalne efekty treningu ITS GoBrain
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Dane zebrane od ponad 5000 dzieci. Średnie wyniki po 8 tygodniach regularnego treningu.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* ── Animated progress bars ── */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-7"
              >
                <motion.h3 variants={fadeInUp} className="text-xl font-bold text-foreground flex items-center gap-2 mb-2">
                  <BarChart2 className="w-5 h-5 text-primary" /> Poprawa wyników — przed i po terapii
                </motion.h3>
                <ProgressBar label="Pamięć słuchowa"         before={41} after={78} color="text-blue-600"   bgColor="bg-blue-500"   delay={0} />
                <ProgressBar label="Koncentracja uwagi"      before={36} after={75} color="text-green-600"  bgColor="bg-green-500"  delay={0.12} />
                <ProgressBar label="Rozumienie poleceń"      before={44} after={80} color="text-purple-600" bgColor="bg-purple-500" delay={0.24} />
                <ProgressBar label="Czytanie i pisanie"      before={38} after={72} color="text-orange-500" bgColor="bg-orange-400" delay={0.36} />
                <ProgressBar label="Pewność siebie dziecka"  before={33} after={70} color="text-pink-600"   bgColor="bg-pink-500"   delay={0.48} />

                <motion.div
                  variants={fadeInUp}
                  className="flex gap-6 pt-2 text-xs"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-muted-foreground/25" />
                    <span className="text-muted-foreground">Wynik przed treningiem</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-primary" />
                    <span className="text-muted-foreground">Wynik po 8 tygodniach</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* ── Right: rings + timeline ── */}
              <div className="space-y-12">

                {/* Ring charts */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <motion.h3 variants={fadeInUp} className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" /> Kluczowe wskaźniki skuteczności
                  </motion.h3>
                  <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-4">
                    <motion.div variants={fadeInUp}>
                      <RingChart percent={98} color="#0066cc" label="Zadowolonych rodziców" sublabel="po zakończeniu treningu" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <RingChart percent={87} color="#00aa55" label="Poprawy koncentracji" sublabel="widocznych u dzieci" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <RingChart percent={94} color="#9333ea" label="Polecałoby dalej" sublabel="znajomym i terapeutom" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Timeline */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <motion.h3 variants={fadeInUp} className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" /> Kiedy widać efekty?
                  </motion.h3>
                  <div className="relative pl-7">
                    <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-border" />
                    {[
                      {
                        week: "2–4 tyg.",
                        title: "Pierwsze zmiany",
                        desc: "Dziecko chętniej słucha, lepiej reaguje, poprawia się uwaga słuchowa.",
                        dot: "bg-blue-500",
                        badge: "bg-blue-500",
                      },
                      {
                        week: "4–8 tyg.",
                        title: "Wyraźny postęp",
                        desc: "Lepsze rozumienie poleceń, poprawa wymowy, mniejsza wrażliwość na dźwięki.",
                        dot: "bg-green-500",
                        badge: "bg-green-500",
                      },
                      {
                        week: "8–12 tyg.",
                        title: "Trwałe efekty",
                        desc: "Znaczna poprawa wyników szkolnych, lepsza koncentracja i pamięć długotrwała.",
                        dot: "bg-purple-500",
                        badge: "bg-purple-500",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInUp}
                        whileHover={{ x: 4 }}
                        className="relative mb-5 last:mb-0"
                      >
                        <div className={`absolute -left-5 top-3 w-4 h-4 rounded-full ${item.dot} border-2 border-background shadow-md`} />
                        <div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs font-black px-2 py-0.5 rounded-full text-white ${item.badge}`}>{item.week}</span>
                            <span className="font-bold text-foreground text-sm">{item.title}</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 - Reviews Carousel */}
        <ReviewsCarousel />

        {/* SECTION 7 - Founder — expanded expert profile */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">

            {/* Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>Twórczyni metody</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Aneta Pakieła</h2>
              <p className="text-xl text-muted-foreground">Neurologopeda, surdologopeda, twórczyni metody GoBrain</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

              {/* Photo column */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-2 flex flex-col items-center gap-6"
              >
                <div className="relative">
                  <div className="w-60 h-60 rounded-full overflow-hidden shadow-2xl border-4 border-primary/10">
                    <img
                      src={anetaPakielaImg}
                      alt="Aneta Pakieła – twórczyni metody GoBrain"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "65% 2%", transform: "scale(1.7) scaleX(-1)", transformOrigin: "65% 2%" }}
                    />
                  </div>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-4 py-2 shadow-xl"
                  >
                    <p className="text-xs font-medium opacity-80">Doświadczenie</p>
                    <p className="font-black text-lg">20+ lat</p>
                  </motion.div>
                </div>

                {/* Associations */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="w-full space-y-3"
                >
                  {[
                    { label: "Polski Komitet Audiofonologii", role: "Członek Zarządu", color: "border-blue-200 bg-blue-50" },
                    { label: "Warszawski Uniwersytet Medyczny", role: "Studia doktoranckie, Katedra Otolaryngologii", color: "border-green-200 bg-green-50" },
                    { label: "SAS Centre Polska", role: "Certyfikowany terapeuta SAS", color: "border-purple-200 bg-purple-50" },
                  ].map((assoc, i) => (
                    <motion.div key={i} variants={fadeInUp} className={`rounded-xl p-3 border ${assoc.color}`}>
                      <p className="font-bold text-foreground text-sm">{assoc.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{assoc.role}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Content column */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="lg:col-span-3 space-y-8"
              >

                {/* Titles */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-sm font-black text-muted-foreground tracking-widest uppercase mb-3">{'Tytuły zawodowe'}</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Neurologopeda",
                      "Surdologopeda",
                      "Pedagog specjalny",
                      "Twórczyni metody GoBrain",
                    ].map((t, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-bold text-sm border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Certifications */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-sm font-black text-muted-foreground tracking-widest uppercase mb-3">{'Specjalizacje'}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { label: 'Diagnosta CAPD', desc: 'Centralne zaburzenia przetwarzania słuchowego', color: 'bg-teal-50 border-teal-200 text-teal-700' },
                      { label: 'Integracja odruchów II st.', desc: 'Zaawansowany terapeuta', color: 'bg-orange-50 border-orange-200 text-orange-700' },
                      { label: 'Stymulacja słuchowa', desc: 'Certyfikowany specjalista terapii słuchu', color: 'bg-green-50 border-green-200 text-green-700' },
                      { label: 'Integracja sensoryczna', desc: 'Terapia integracji jawnej i sekwencyjnej', color: 'bg-blue-50 border-blue-200 text-blue-700' },
                      { label: 'Wczesna interwencja', desc: 'Praca terapeutyczna z dziećmi', color: 'bg-pink-50 border-pink-200 text-pink-700' },
                      { label: 'Neurologopedia', desc: 'Diagnoza i terapia neurologopedyczna', color: 'bg-purple-50 border-purple-200 text-purple-700' },
                    ].map((cert, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                        className={`rounded-xl p-3 border ${cert.color} transition-all`}
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-sm">{cert.label}</p>
                            <p className="text-xs opacity-75 mt-0.5">{cert.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* About / Quote */}
                <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <blockquote className="text-base text-foreground leading-relaxed font-medium mb-4 space-y-3">
                    <p>{'GoBrain to efekt ponad 20 lat praktyki klinicznej — metoda łącząca wiedzę neurologopedyczną z nowoczesnymi technologiami. To nie tylko trening słuchowy, lecz kompleksowe narzędzie wspierające pracę terapeuty i rozwój dziecka w domu, szkole i gabinecie.'}</p>
                    <p>{'Dedykowany dzieciom od piątego roku życia z deficytami uwagi słuchowej, trudnościami w czytaniu i pisaniu, problemami z wymową oraz zaburzeniami przetwarzania słuchowego (CAPD). Trening GoBrain stymuluje lewą półkulę, organizuje sekwencyjnie informacje i przyspiesza efekty terapeutyczne.'}</p>
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground">Aneta Pakieła</p>
                    <p className="text-sm text-muted-foreground">Neurologopeda, surdologopeda, twórczyni metody GoBrain</p>
                  </div>
                </motion.div>

                {/* Key achievements */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-sm font-black text-muted-foreground tracking-widest uppercase mb-3">Dokonania i działalność</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Brain, text: "Opracowała unikalną metodę ITS GoBrain do terapii zaburzeń przetwarzania słuchowego u dzieci", color: "text-primary bg-primary/10" },
                      { icon: Users, text: "Przeszkoliła ponad 500 terapeutów w całej Polsce w zakresie diagnozy i terapii CAPD", color: "text-green-600 bg-green-100" },
                      { icon: GraduationCap, text: "Prowadzi szkolenia certyfikacyjne dla logopedów, pedagogów i psychologów", color: "text-purple-600 bg-purple-100" },
                      { icon: Activity, text: "Badania doktoranckie na Katedrze Otolaryngologii Warszawskiego Uniwersytetu Medycznego", color: "text-orange-600 bg-orange-100" },
                    ].map((ach, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg ${ach.color} flex items-center justify-center shrink-0`}>
                          <ach.icon className="w-4 h-4" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed pt-1">{ach.text}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 7b - Prof. Gałkowski video */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-10 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <GraduationCap className="w-4 h-4" />
                Rekomendacja naukowa
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* Left — video */}
              <motion.div variants={fadeInUp} className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-black">
                <video
                  controls
                  preload="metadata"
                  className="w-full aspect-video"
                >
                  <source src="https://gobraintech.pl/current/www/ProfGalkowski01.mp4#t=3" type="video/mp4" />
                  {'Twoja przeglądarka nie obsługuje odtwarzania wideo.'}
                </video>
              </motion.div>

              {/* Right — quote */}
              <motion.div variants={fadeInUp} className="flex flex-col justify-center">
                <svg className="w-12 h-12 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C5.6 8 2 11.6 2 16s3.6 8 8 8c1.8 0 3.4-.6 4.7-1.6C13.6 24.9 12 28 8 28v4c8 0 12-5.4 12-12V8H10zm20 0h-12v12c0 6.6-4 12-12 12v-4c4 0 5.6-3.1 6.7-5.6C11.4 23.4 10 21.8 10 20c0-4.4 3.6-8 8-8h2V8h10z" />
                </svg>
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-medium italic mb-6">
                  {'"Chciałbym powiedzieć jako przewodniczący Polskiego Komitetu Audiofonologii, że program Zabawy z dźwiękami to jest pomysł wspaniały dostosowany do potrzeb rozwojowych dzieci mających dość często duże kłopoty z przetwarzaniem bodźców słuchowych. Program GoBrain z czystym sumieniem mogę polecić i zachęcić do stosowania zarówno w domu jak i ośrodkach logopedycznych — program ten ćwiczy uwagę i pamięć słuchową. GoBrain przyczynia się do postępów szkolnych dzieci, zwłaszcza jeśli chodzi o czytanie i pisanie."'}
                </blockquote>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-bold text-foreground text-lg">Prof. dr hab. Tadeusz Gałkowski</p>
                  <p className="text-sm text-muted-foreground mt-1">{'Psycholog, naukowiec, patron merytoryczny GoBrain'}</p>
                  <p className="text-sm text-muted-foreground">{'Przewodniczący Polskiego Komitetu Audiofonologii'}</p>
                  <p className="text-sm text-muted-foreground">{'Kierownik Katedry Edukacji SWPS (1936–2020)'}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 8 - Pricing */}
        <section className="py-24 bg-card border-t border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Wybierz odpowiednią licencję</h2>
              <p className="text-xl text-muted-foreground">Rozwiązania dopasowane do Twoich potrzeb</p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-center"
            >
              {/* Card 1: ITS GoBrain (Most Popular) */}
              <motion.div variants={fadeInUp} className="bg-background rounded-3xl p-8 border-2 border-primary shadow-xl relative xl:col-span-1">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full whitespace-nowrap">
                  Najpopularniejszy
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 mt-2">ITS GoBrain</h3>
                <p className="text-muted-foreground mb-4 text-sm">{'Dla dzieci od piątego roku życia, do stosowania w domu'}</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">250 PLN</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {["Pełny trening słuchowy (2 etapy)", "Zabawy z dźwiękami", "PC (Windows) i Android"].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-11 text-sm font-semibold" asChild data-testid="pricing-main-btn">
                  <a href="https://automater.pl/rest/order-viewer/buy/918448" target="_blank" rel="noopener noreferrer">
                    Kup kod aktywacyjny
                  </a>
                </Button>
              </motion.div>

              {/* Card 2: Karta Mowy */}
              <motion.div variants={fadeInUp} className="bg-background rounded-3xl p-8 border-2 border-green-400 shadow-lg relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full whitespace-nowrap">
                  Nowość
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 mt-2">Karta Mowy</h3>
                <p className="text-muted-foreground mb-4 text-sm">{'Cyfrowe narzędzie diagnostyczne dla logopedów i terapeutów'}</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium">299 PLN</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {["Karta badania mowy", "Gry logopedyczne online", "Materiały PDF do druku"].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-11 text-sm font-semibold bg-green-600 hover:bg-green-700 text-white" asChild data-testid="pricing-karta-btn">
                  <Link to="/karta-mowy">Dowiedz się więcej</Link>
                </Button>
              </motion.div>

              {/* Card 3: School */}
              <motion.div variants={fadeInUp} className="bg-background rounded-3xl p-8 border border-border shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-2">GoBrain School</h3>
                <p className="text-muted-foreground mb-4 text-sm">{'Dla terapeutów, szkół, przedszkoli, poradni i instytucji'}</p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full font-medium">799 PLN / rok</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {["Wieloużytkownikowy dostęp", "Panel terapeuty", "Monitoring postępu"].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full h-11 text-sm" asChild data-testid="pricing-school-btn">
                  <Link to="/its-school">Zamów licencję</Link>
                </Button>
              </motion.div>

              {/* Card 4: Therapist */}
              <motion.div variants={fadeInUp} className="bg-background rounded-3xl p-8 border border-border shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-2">Terapeuta</h3>
                <p className="text-muted-foreground mb-4 text-sm">{'Dla terapeutów: logopedów, pedagogów, psychologów, itp.'}</p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full font-medium">Cena na zapytanie</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {["Platforma diagnostyczna", "Test 8 obszarów", "Kwestionariusze i ankiety"].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full h-11 text-sm" asChild data-testid="pricing-therapist-btn">
                  <Link to="/strefa-terapeuty">Dowiedz się więcej</Link>
                </Button>
              </motion.div>

            </motion.div>
          </div>
        </section>


        {/* SECTION 10 - Therapist Map */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Rozwijamy potencjał dzieci w całej Polsce</h2>
              <p className="text-lg text-muted-foreground">Nasza sieć Providerów GoBrain obejmuje specjalistów w całej Polsce.</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-2xl overflow-hidden border border-border shadow-lg mb-8"
              style={{ height: 400 }}
            >
              <iframe
                title="Mapa terapeutów GoBrain"
                src="https://www.google.com/maps/d/embed?mid=1vzg81TvhC_-i_qYRo5o-VZ05K6dSfcy-"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
            <div className="text-center">
              <Button variant="outline" size="lg" asChild data-testid="locations-btn">
                <Link to="/strefa-terapeuty#mapa-terapeutow">Sprawdź listę terapeutów</Link>
              </Button>
            </div>
          </div>
        </section>


      </div>
      

    </div>
  );
}
