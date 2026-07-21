import { motion, type Variants } from "framer-motion";
import { SEO } from "@/components/SEO";
import {
  Video,
  Users,
  CheckCircle2,
  Headphones,
  BookOpen,
  Star,
  Phone,
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

export default function DarmoveWebinaryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Darmowe webinary – ITS GoBrain"
        description="Bezpłatne webinary o treningu słuchowym, CAPD i terapii mowy. Dołącz do ekspertów GoBrain i dowiedz się, jak pomóc swojemu dziecku."
        canonical="/darmowe-webinary"
      />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              Bezpłatne webinary GoBrain
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Darmowe webinary<br />
              <span className="text-primary">o treningu słuchowym</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Bezpłatne spotkania online dla logopedów, terapeutów, pedagogów i rodziców. Dowiedz się, jak metoda ITS GoBrain wspiera rozwój mowy i przetwarzanie słuchowe u dzieci.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold" asChild>
                <a href="tel:+48608650435">
                  <Phone className="w-4 h-4 mr-2" />
                  608 650 435
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold" asChild>
                <a href="tel:+48572557326">
                  <Phone className="w-4 h-4 mr-2" />
                  572 557 326
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "100%", label: "Bezpłatne" },
              { value: "90 min", label: "Czas trwania" },
              { value: "Online", label: "Forma spotkania" },
              { value: "Q&A", label: "Sesja pytań" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-primary">{value}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nagrane webinary */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-3">
              Nagrane webinary
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg">
              Obejrzyj nasze poprzednie spotkania w dowolnym czasie.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-10"
          >
            {[
              {
                id: "yJFP_x9ue4s",
                title: "Efektywno\u015b\u0107 terapii logopedycznej przy wykorzystaniu wibrator\u00f3w logopedycznych",
                speaker: "Wioletta Obidziska \u2014 logopeda, pedagog specjalny",
              },
              {
                id: "wTFjWacsHJw",
                title: "Prosta droga do wywo\u0142ania g\u0142osek szeregu szumi\u0105cego sz, \u017c, cz, d\u017c. Utrwalanie g\u0142oski L.",
                speaker: "Lidia Wasik \u2014 surdopedagog, nauczyciel edukacji wczesnoszkolnej, oligofonepedag, logopeda, terapeuta r\u0119ki",
              },
              {
                id: "KHe2StnPHHU",
                title: "Jak wspiera\u0107 rozw\u00f3j ma\u0142ego dziecka?",
                speaker: "Karolina Krahel \u2014 logopeda, pedagog specjalny",
              },
              {
                id: "sZyO8Lv1-eg",
                title: "Czy moje dziecko oddycha prawid\u0142owo?",
                speaker: "Lucyna Wilczy\u0144ska \u2014 logopeda, terapeuta r\u0119ki",
              },
              {
                id: "MescvrFWZDk",
                title: "Masa\u017c logopedyczny w codziennej praktyce zawodowej",
                speaker: "Edyta Walaszek \u2014 logopeda, oligofrenopedagog, pedagog specjalny, terapeuta r\u0119ki",
              },
            ].map((video) => (
              <motion.div key={video.id} variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                {/* Video — lewa strona */}
                <div className="w-full sm:w-[55%] shrink-0">
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-md" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
                {/* Opis — prawa strona */}
                <div className="sm:text-right flex flex-col justify-center sm:pt-4">
                  <p className="font-bold text-lg text-foreground mb-2 leading-snug">{video.title}</p>
                  <p className="text-sm text-muted-foreground">{video.speaker}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why attend */}
      <section className="py-16 md:py-20 bg-card/40 border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-3">Co zyskujesz, uczestnicząc w webinarze?</h2>
              <p className="text-muted-foreground">Każde spotkanie to praktyczna wiedza z pierwszej ręki — od twórców metody.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Headphones className="w-6 h-6" />, title: "Wiedza o treningu słuchowym", desc: "Zrozumiesz mechanizm działania ITS GoBrain i naukowo potwierdzone podstawy metody." },
                { icon: <BookOpen className="w-6 h-6" />, title: "Praktyczne case studies", desc: "Poznasz realne przykłady pracy z dziećmi z opóźnieniem mowy, dysleksją, ASD." },
                { icon: <Users className="w-6 h-6" />, title: "Sesja Q&A z ekspertem", desc: "Zadaj pytania bezpośrednio twórcy metody — Anecie Pakieła, certyfikowanemu Providerowi." },
                { icon: <Star className="w-6 h-6" />, title: "Certyfikat uczestnictwa", desc: "Każdy uczestnik otrzymuje potwierdzenie udziału w webinarze — do portfolio zawodowego." },
                { icon: <Video className="w-6 h-6" />, title: "Nagranie po webinarze", desc: "Zarejestrowanym uczestnikom wysyłamy nagranie spotkania — wracaj do materiału kiedy chcesz." },
                { icon: <CheckCircle2 className="w-6 h-6" />, title: "Zniżka na szkolenie Providera", desc: "Uczestnicy webinarów otrzymują specjalną ofertę na pełne szkolenie i certyfikat Providera GoBrain." },
              ].map(({ icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeInUp}
                  className="bg-background rounded-2xl border border-border p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              Bezpłatny udział
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Chcesz wiedzieć więcej o GoBrain?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8">
              Zapisz się na webinar lub skontaktuj się bezpośrednio — opowiemy o metodzie i dobierzemy najlepsze rozwiązanie.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-13 px-8 text-base font-semibold bg-white text-primary hover:bg-white/90" asChild>
                <a href="tel:+48608650435">
                  <Phone className="w-4 h-4 mr-2" />
                  608 650 435
                </a>
              </Button>
              <Button size="lg" className="h-13 px-8 text-base font-semibold bg-white text-primary hover:bg-white/90" asChild>
                <a href="tel:+48572557326">
                  <Phone className="w-4 h-4 mr-2" />
                  572 557 326
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
