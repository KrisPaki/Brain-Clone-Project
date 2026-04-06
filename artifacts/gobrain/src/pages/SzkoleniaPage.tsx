import { motion, type Variants } from "framer-motion";
import {
  CheckCircle2,
  GraduationCap,
  Video,
  Award,
  Clock,
  BookOpen,
  Users,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function SzkoleniaPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">


      <div className="pt-16">

        {/* Hero */}
        <section className="py-20 md:py-28 bg-card/40 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                <span>Certyfikowany kurs online</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
                Zostań certyfikowanym<br />
                <span className="text-primary">Providerem GoBrain</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                Kurs certyfikacyjny „Koncentracja i uwaga słuchowa ITS GoBrain Interaktywny Trening Słuchowy. Provider GoBrain" — specjalnie przygotowany dla logopedów, pedagogów i psychologów.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-muted-foreground">
                <span className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-primary" /> 60 dni dostępu
                </span>
                <span className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full">
                  <Video className="w-4 h-4 text-primary" /> 4 moduły video
                </span>
                <span className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 text-primary" /> Certyfikat imienny
                </span>
                <span className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full">
                  <Users className="w-4 h-4 text-primary" /> Dołączenie do sieci Providerów
                </span>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-base font-semibold" asChild>
                  <a href="https://gobrain.pl/gobrain_szkolenie_inst" target="_blank" rel="noopener noreferrer">
                    Kup kurs certyfikacyjny
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base" asChild>
                  <a
                    href="https://docs.google.com/document/d/1vEsYI-Gi6Wuj9dqq-qIDSq-BZiPv1D1I/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Formularz zgłoszeniowy
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Course Program */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Program szkolenia</h2>
              <p className="text-lg text-muted-foreground">Cztery moduły video omawiające kompleksowo metodę ITS GoBrain</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {[
                {
                  module: "Moduł 1",
                  title: "Wprowadzenie do ITS GoBrain",
                  desc: "Historia metody, filozofia treningu słuchowego, prezentacja autorki — Anety Pakieły, i jej doświadczeń klinicznych. Omówienie zasad systematyczności, intensywności i indywidualności programu.",
                },
                {
                  module: "Moduł 2",
                  title: "Podstawy teoretyczne treningu słuchowego",
                  desc: "Neurobiologia słyszenia i przetwarzania słuchowego. Jak mózg przetwarza dźwięki i dlaczego trening słuchowy działa? Omówienie teorii Tomatis, Johansen i różnic z ITS GoBrain.",
                },
                {
                  module: "Moduł 3",
                  title: "Centralne zaburzenia przetwarzania słuchowego (CAPD)",
                  desc: "Definicja CAPD, diagnozowanie, różnicowanie z ADHD i dysleksją. Jak stosować platformę TERAPEUTA do diagnozy i monitorowania postępów? Obsługa PreTestu i PostTestu.",
                },
                {
                  module: "Moduł 4",
                  title: "Typy kliniczne i wytyczne terapeutyczne",
                  desc: "Praktyczne zastosowanie ITS GoBrain w terapii logopedycznej, pedagogicznej i psychologicznej. Wskazania i przeciwwskazania. Scenariusze pracy z dziećmi o różnych profilach trudności.",
                },
              ].map((mod, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-6 p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex flex-col items-center justify-center">
                      <span className="text-xs text-primary font-medium leading-none">{mod.module.split(" ")[0]}</span>
                      <span className="text-xl font-extrabold text-primary leading-none">{mod.module.split(" ")[1]}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{mod.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{mod.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Co zyskujesz po kursie?</h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {[
                "Certyfikat imienny: Provider GoBrain",
                "Dostęp do Platformy TERAPEUTA na preferencyjnych warunkach",
                "Wpis na mapę terapeutów GoBrain w całej Polsce",
                "Indywidualny kod do zakupu kodów aktywacyjnych dla podopiecznych",
                "Dostęp do Akademii GoBrain i materiałów szkoleniowych",
                "Przynależność do profesjonalnej sieci specjalistów GoBrain",
                "Dostęp do darmowych webinarów i materiałów dydaktycznych",
                "Wsparcie merytoryczne Zespołu GoBrain",
              ].map((benefit, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Akademia GoBrain */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  <BookOpen className="w-4 h-4" />
                  <span>Akademia GoBrain</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Centrum wiedzy dla specjalistów</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Akademia GoBrain to wyjątkowe miejsce dostępu do specjalistycznej wiedzy pozwalającej poszerzyć Twoją wiedzę i umiejętności do wykorzystania w codziennej praktyce terapeutycznej. Zespół GoBrain ma na celu przekazanie specjalistycznej wiedzy w przystępny sposób przez najlepszych specjalistów.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Zapraszamy do naszego Zespołu — zostań <strong>PROVIDEREM GOBRAIN</strong>. To wyjątkowa okazja, aby poszerzyć umiejętności i możliwości. Skorzystaj ze sprawdzonej w praktyce wiedzy popartej praktycznymi wskazówkami.
                </p>
                <Button asChild>
                  <a href="https://gobrain.pl/darmowe-webinary" target="_blank" rel="noopener noreferrer">
                    Darmowe webinary
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  { icon: Video, title: "Darmowe webinary", desc: "Regularne webinary prowadzone przez specjalistów GoBrain — dostępne dla wszystkich." },
                  { icon: BookOpen, title: "Scenariusze i pomoce", desc: "Bogata biblioteka gotowych scenariuszy terapeutycznych i materiałów dydaktycznych." },
                  { icon: Users, title: "Społeczność specjalistów", desc: "Dołącz do sieci Providerów GoBrain, dziel się doświadczeniami i poszerzaj sieć kontaktów." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card border border-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white text-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{'Chcesz zostać terapeutą GoBrain?'}</h2>
              <p className="text-white/80 mb-10 text-lg">{'Zapisz się na kurs certyfikacyjny i dołącz do rosnącej sieci Providerów GoBrain w całej Polsce.'}</p>
              <Button size="lg" className="h-14 px-8 text-base bg-white text-primary hover:bg-white/90 font-semibold" asChild>
                <a href="https://gobrain.pl/gobrain_szkolenie_inst" target="_blank" rel="noopener noreferrer">
                  {'Zapisz się na szkolenie'}
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

      </div>


    </div>
  );
}
