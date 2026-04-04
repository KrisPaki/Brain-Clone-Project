import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function StrefaTerapeutyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="py-20 md:py-28 bg-card/40 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <ClipboardList className="w-4 h-4" />
                <span>Dla logopedów i terapeutów</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
                Platforma<br /><span className="text-primary">TERAPEUTA</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Twoje nowe narzędzie do diagnozy i śledzenia postępów! Wykorzystaj je w treningu słuchowym ITS GoBrain i zwiększ efektywność swojej pracy terapeutycznej.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-base font-semibold" asChild>
                  <a href="https://automater.com/rest/order-viewer/buy/1073862" target="_blank" rel="noopener noreferrer">
                    Kup dostęp do Platformy
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base" asChild>
                  <Link href="/szkolenia-i-webinary">Szkolenia dla terapeutów</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
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
                  icon: BarChart2,
                  title: "Test 8 obszarów",
                  desc: "PreTest i PostTest do badania umiejętności słuchowych, czasu reakcji, poziomu odporności na rozpraszanie i pamięci słuchowej.",
                },
                {
                  icon: ClipboardList,
                  title: "Kwestionariusze i ankiety",
                  desc: "Dostęp do kwestionariuszy, ankiet, wywiadu, karty oceny rozwoju dziecka, karty lateralizacji i pomocy do ćwiczeń.",
                },
                {
                  icon: Activity,
                  title: "Porównanie przed/po terapii",
                  desc: "Automatyczne porównanie wyników PreTest i PostTest — precyzyjnie pokaż rodzicom postęp ich dziecka.",
                },
                {
                  icon: Users,
                  title: "Śledzenie postępów",
                  desc: "Data i godzina aktywności w treningu, rodzaj zadań i uzyskane wyniki każdego podopiecznego w czasie rzeczywistym.",
                },
                {
                  icon: GraduationCap,
                  title: "Scenariusze i pomoce",
                  desc: "Bogata biblioteka scenariuszy terapeutycznych, planowania działań i materiałów dydaktycznych do pracy z dziećmi.",
                },
                {
                  icon: CheckCircle2,
                  title: "Certyfikat Providera",
                  desc: "Po zakupie Platformy TERAPEUTA otrzymujesz dostęp do szkolenia i tytuł certyfikowanego Providera GoBrain.",
                },
              ].map((feat, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <feat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Downloads */}
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
              <motion.div variants={fadeInUp}>
                <a href="https://gobraintech.pl/current/Sklep_PC/TERAPEUTA.exe"
                   className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-background hover:border-primary hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Platforma TERAPEUTA (PC)</p>
                    <p className="text-sm text-muted-foreground">Windows — plik instalacyjny .exe</p>
                  </div>
                  <Download className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                </a>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <a href="https://gobraintech.pl/current/Sklep_Android/terapeuta.apk"
                   className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-background hover:border-primary hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Platforma TERAPEUTA (Android)</p>
                    <p className="text-sm text-muted-foreground">Android — plik instalacyjny .apk</p>
                  </div>
                  <Download className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                </a>
              </motion.div>
            </motion.div>

            {/* System requirements */}
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
                  "Rozdzielczość: 1280 × 720",
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

        {/* Join as Provider */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-3xl bg-primary/5 border border-primary/20 p-8 md:p-12 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dołącz do sieci Providerów GoBrain</h2>
              <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
                Po zakupie Platformy TERAPEUTA i ukończeniu szkolenia certyfikacyjnego zyskujesz tytuł <strong>Providera GoBrain</strong> i trafiasz na mapę terapeutów w całej Polsce. Przeszkolony terapeuta uzyskuje indywidualny kod do zakupu kodów aktywacyjnych ITS GoBrain dla swoich podopiecznych.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Twoje dane pojawią się na mapie terapeutów GoBrain — dostępnej dla rodziców szukających specjalistów w ich okolicy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/szkolenia-i-webinary">Zapisz się na szkolenie</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <a href="mailto:gobrainterapeuta@gmail.com">Skontaktuj się z nami</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Map */}
        <section className="py-20 bg-card border-t border-border">
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

      </main>

      <Footer />
    </div>
  );
}
