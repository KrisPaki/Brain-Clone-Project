import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/components/SEO";
import {
  ArrowLeft,
  Monitor,
  Smartphone,
  ShoppingCart,
  Clock,
  Volume2,
  BookOpen,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProgramBySlug, type Program } from "@/data/programyData";

const categoryConfig: Record<
  Program["category"],
  { color: string; bg: string; border: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  "Zabawy logopedyczne": {
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    Icon: Volume2,
  },
  "Zabawy z literkami": {
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
    Icon: BookOpen,
  },
  "Kreatywny brzdąc": {
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    Icon: Palette,
  },
};

export default function ProgramPage() {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? getProgramBySlug(slug) : undefined;

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background pt-16">
        <p className="text-2xl font-bold text-foreground">Nie znaleziono programu</p>
        <Link to="/programy-edukacyjne" className="text-primary underline underline-offset-4 text-sm">
          Wróc do listy programów
        </Link>
      </div>
    );
  }

  const cat = categoryConfig[program.category] ?? categoryConfig["Zabawy logopedyczne"];
  const CatIcon = cat.Icon;

  const programSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: program.title,
    description: program.subtitle,
    applicationCategory: program.category,
    operatingSystem: "Windows, Android, Web",
    url: `https://gobrain.pl/programy-edukacyjne/${program.slug}`,
    publisher: { "@id": "https://gobrain.pl/#organization" },
    offers: {
      "@type": "Offer",
      url: program.automaterUrl,
      priceCurrency: "PLN",
      availability: "https://schema.org/InStock",
    },
    inLanguage: "pl",
  };

  return (
    <div className="min-h-screen bg-background font-sans pt-16">
      <SEO
        title={`${program.title} — Program edukacyjny GoBrain`}
        description={program.subtitle}
        canonical={`/programy-edukacyjne/${program.slug}`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(programSchema)}</script>
      </Helmet>

      {/* Back navigation */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-16 z-10">
        <div className="container mx-auto px-4 max-w-4xl py-3">
          <Link
            to="/programy-edukacyjne"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do programów edukacyjnych
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${cat.bg} ${cat.color}`}>
                <CatIcon className="w-3.5 h-3.5" />
                {program.category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                Wiek: {program.age}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
              <span className="mr-3">{program.emoji}</span>
              {program.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {program.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Article content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              {program.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-xl font-bold text-foreground mb-3">{section.heading}</h2>
                  {section.content.split("\n\n").map((para, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Download */}
              <div className="bg-card border border-border rounded-2xl p-5">
                <h3 className="text-sm font-bold text-foreground mb-3">Pobierz aplikacje</h3>
                <div className="space-y-2.5">
                  <a
                    href={program.pcDownload}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                      <Monitor className="w-4 h-4 text-blue-600" />
                    </div>
                    <span>Windows (PC)</span>
                  </a>
                  <a
                    href={program.androidDownload}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                      <Smartphone className="w-4 h-4 text-green-600" />
                    </div>
                    <span>Android (Huawei)</span>
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* CTA — purchase */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-purple-200 text-sm font-semibold uppercase tracking-widest mb-3">
              Kod aktywacyjny
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Gotowy, by zacząć?
            </h2>
            <p className="text-purple-100 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Kup kod aktywacyjny do programu{" "}
              <strong className="text-white">{program.title}</strong> i zacznij terapię przez zabawę. Kod jest jednorazowy i przypisywany do konkretnego urządzenia.
            </p>
            <Button
              size="lg"
              className="h-14 px-10 text-base font-bold bg-white text-purple-700 hover:bg-purple-50 shadow-xl hover:shadow-2xl transition-all rounded-full"
              asChild
            >
              <a href={program.automaterUrl} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Kup kod aktywacyjny
              </a>
            </Button>
            <p className="text-purple-300 text-xs mt-5">
              Bezpieczna płatność przez Automater.pl
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
