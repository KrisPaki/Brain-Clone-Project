import { motion, type Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  Gamepad2,
  BookOpen,
  Palette,
  ChevronRight,
  Volume2,
  Type,
  Sparkles,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import childrenClassroomImg from "@/assets/children-classroom.webp";
import { programsByCategory, programs } from "@/data/programyData";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

function GameCard({ name, emoji, slug }: { name: string; emoji: string; slug: string }) {
  return (
    <motion.div variants={fadeInUp}>
      <Link
        to={`/programy-edukacyjne/${slug}`}
        className="group flex items-center gap-4 p-4 bg-background border border-border rounded-2xl hover:border-primary/40 hover:shadow-md transition-all duration-200"
      >
        <span className="text-3xl shrink-0">{emoji}</span>
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex-1 leading-tight">{name}</span>
        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 transition-colors" />
      </Link>
    </motion.div>
  );
}

function CategorySection({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  desc,
  games,
  badge,
}: {
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
  games: { name: string; emoji: string; slug: string }[];
  badge: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
      className="mb-16"
    >
      <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center shrink-0`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div>
          <span className={`text-xs font-bold uppercase tracking-wider ${iconColor}`}>{badge}</span>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </div>
      </motion.div>
      <motion.p variants={fadeInUp} className="text-muted-foreground mb-6 max-w-2xl">
        {desc}
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {games.map((g) => (
          <GameCard key={g.name} {...g} />
        ))}
      </div>
    </motion.div>
  );
}

export default function ProgramyEdukacyjnePage() {
  const programsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Programy edukacyjne GoBrain",
    description: "Interaktywne gry edukacyjne i logopedyczne dla dzieci od 5 lat.",
    url: "https://gobrain.pl/programy-edukacyjne",
    publisher: { "@id": "https://gobrain.pl/#organization" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: programs.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://gobrain.pl/programy-edukacyjne/${p.slug}`,
        name: p.title,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-background font-sans pt-16">
      <SEO
        title="Programy edukacyjne ITS GoBrain — gry logopedyczne i edukacyjne"
        description="Ponad 19 interaktywnych gier edukacyjnych i logopedycznych dla dzieci od 5 lat. Zabawy logopedyczne, zabawy z literkami i gry dla brzdaca."
        canonical="/programy-edukacyjne"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(programsSchema)}</script>
      </Helmet>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-purple-50 via-white to-blue-50 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              <Gamepad2 className="w-4 h-4" />
              Platforma GoBrain
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
              Programy{" "}
              <span className="text-purple-600">edukacyjne</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Interaktywne gry i zabawy edukacyjne dla dzieci — wspierające rozwój mowy, wymowy i umiejętności językowych. Dostępne online, w przeglądarce.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {[
                { icon: Volume2, label: "Zabawy logopedyczne" },
                { icon: Type, label: "Zabawy z literkami" },
                { icon: Palette, label: "Kreatywny brzdąc" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-purple-600" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Stats bar */}
      <section className="py-8 bg-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-10 text-white"
          >
            {[
              { value: "19+", label: "Gier i programów" },
              { value: "3", label: "Kategorie tematyczne" },
              { value: "100%", label: "Online — w przeglądarce" },
              { value: "∞", label: "Godziny zabawy i nauki" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <p className="text-2xl font-black">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Games catalog */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Zabawy logopedyczne */}
          <CategorySection
            icon={Volume2}
            iconBg="bg-blue-50"
            iconColor="text-blue-600"
            title="Zabawy logopedyczne"
            desc="Interaktywne gry ćwiczące wymowę trudnych głosek. Kolorowe ćwiczenia dla dzieci, które uczą się prawidłowej artykulacji — w angażującej formie zabawy."
            games={programsByCategory.logopedyczne.map((p) => ({ name: p.title.replace(/^Zabawy logopedyczne\.\s*/i, ""), emoji: p.emoji, slug: p.slug }))}
            badge={`${programsByCategory.logopedyczne.length} programów`}
          />

          <div className="border-t border-border mb-16" />

          {/* Zabawy z literkami */}
          <CategorySection
            icon={BookOpen}
            iconBg="bg-green-50"
            iconColor="text-green-600"
            title="Zabawy z literkami"
            desc="Nauka liter i głosek w formie interaktywnej zabawy. Każdy zestaw skupia się na konkretnych spółgłoskach lub grupach liter — idealne dla dzieci zaczynających przygodę z czytaniem."
            games={programsByCategory.literkami.map((p) => ({ name: p.title.replace(/^Zabawy z literkami\.\s*/i, ""), emoji: p.emoji, slug: p.slug }))}
            badge={`${programsByCategory.literkami.length} programów`}
          />

          <div className="border-t border-border mb-16" />

          {/* Kreatywny brzdąc */}
          <CategorySection
            icon={Palette}
            iconBg="bg-orange-50"
            iconColor="text-orange-600"
            title="Kreatywny brzdąc"
            desc="Gry logiczne, matematyczne i twórcze rozwijające pamiec, koncentrację i wyobraźnię. Idealne dla dzieci w wieku przedszkolnym i wczesnoszkolnym."
            games={programsByCategory.brzdac.map((p) => ({ name: p.title, emoji: p.emoji, slug: p.slug }))}
            badge={`${programsByCategory.brzdac.length} programy`}
          />
        </div>
      </section>
      {/* How to use */}
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
              Jak korzystać z programów?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-xl mx-auto">Programy Edukacyjne GoBrain są dostępne online — wystarczy przeglądarka internetowa.</motion.p>
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
                step: "01",
                icon: "🖥️",
                title: "Otwórz w przeglądarce",
                desc: "Wszystkie programy działają bezpośrednio w przeglądarce internetowej. Wystarczy kliknąć i zagrać.",
              },
              {
                step: "02",
                icon: "🎮",
                title: "Wybierz kategorię",
                desc: "Zabawy logopedyczne, ćwiczenia z literkami lub twórcze zabawy. Każdy program skupia się na konkretnym aspekcie rozwoju mowy.",
              },
              {
                step: "03",
                icon: "🌟",
                title: "Baw się i ucz",
                desc: "Atrakcyjna grafika i angażująca mechanika sprawią, że dziecko nie zauważy, kiedy się uczy. Nauka przez zabawę działa najlepiej!",
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className="bg-background border border-border rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <span className="text-xs font-black text-purple-600 tracking-widest">{item.step}</span>
                <h3 className="font-bold text-foreground my-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Image + description */}
      <section className="py-16 md:py-24 bg-background">
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
                alt="Dzieci korzystające z programów edukacyjnych i interaktywnego treningu słuchowego GoBrain"
                className="w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Dlaczego GoBrain?
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-4">
                Nauka przez zabawę — najskuteczniejsza metoda
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
                Programy GoBrain łączą skuteczność terapii logopedycznej z angażującą formą zabawy. Dziecko ćwiczy wymowę, rozpoznaje litery i rozwija kreatywność — nieświadomie, bo jest pochłonięte zabawą.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3">
                {[
                  "Zaprojektowane przez neurologopedę Anetę Pakieła",
                  "Kolorowa grafika angażuje dzieci w każdym wieku",
                  "Dostępne online w przeglądarce internetowej",
                  "Kompatybilne z programem ITS GoBrain",
                  "Idealne jako uzupełnienie terapii gabinetowej",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                      <ChevronRight className="w-3 h-3 text-purple-600" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 md:py-20 bg-purple-600">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Masz pytania o programy?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8">
              Skontaktuj się z nami — chętnie doradzamy w wyborze odpowiednich programów dla dziecka lub gabinetu.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="h-13 px-8 text-base font-semibold" asChild>
                <a href="mailto:gobrainterapeuta@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  gobrainterapeuta@gmail.com
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-white text-white hover:bg-white hover:text-purple-600" asChild>
                <a href="tel:+48608650435">
                  <Phone className="w-4 h-4 mr-2" />
                  608 650 435
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-white text-white hover:bg-white hover:text-purple-600" asChild>
                <a href="tel:+48572557326">
                  <Phone className="w-4 h-4 mr-2" />
                  572 557 326
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
