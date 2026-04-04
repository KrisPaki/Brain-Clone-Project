import { motion, type Variants } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
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

const articles = [
  {
    title: "Przeczytajcie o nas w prasie #2",
    excerpt: "Nasza metoda oraz historia rozwoju GoBrain została opisana w czasopiśmie Why Story nr 1/2021. Zapraszamy do zapoznania się z artykułem.",
    date: "10 lipca 2023",
    category: "Prasa",
    url: "https://gobrain.pl/archiwa/16443",
    categoryColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "Przeczytajcie o nas w prasie #1",
    excerpt: "Metoda ITS GoBrain obok innych treningów słuchowych takich jak Tomatis, Johansen jest opisana w artykule naukowym 'Centralne zaburzenia przetwarzania słuchowego - aktualne możliwości terapii dostępne...'.",
    date: "10 lipca 2023",
    category: "Nauka",
    url: "https://gobrain.pl/archiwa/16441",
    categoryColor: "bg-purple-100 text-purple-700",
  },
  {
    title: "Czym są zaburzenia przetwarzania słuchowego na poziomie centralnym (CAPD)?",
    excerpt: "Czy dziecko, które słyszy najdrobniejszy szmer może mieć zaburzenia przetwarzania słuchowego? Z różnych przyczyn proces nauki słuchania nie przebiega prawidłowo — mózg skupia się na nieistotnych bodźcach...",
    date: "10 lipca 2023",
    category: "CAPD",
    url: "https://gobrain.pl/archiwa/16439",
    categoryColor: "bg-green-100 text-green-700",
  },
  {
    title: "Centralne zaburzenia przetwarzania słuchowego (CAPD) — dobrze słyszy, ale źle przetwarza dźwięki",
    excerpt: "Ale jak to? — zapyta większość z nas. Zazwyczaj, gdy mamy podejrzenia problemów ze słuchem, od razu myślimy, że coś niedobrego dzieje się z uchem. Tymczasem CAPD to problem zupełnie innej natury...",
    date: "26 listopada 2020",
    category: "CAPD",
    url: "https://gobrain.pl/archiwa/1933",
    categoryColor: "bg-green-100 text-green-700",
  },
  {
    title: "Przez szkołę podstawową z GoBrain!",
    excerpt: "Wiek, kiedy twoje dziecko idzie do szkoły jest bardzo wyjątkowym momentem w jego życiu. Wtedy właśnie zaczyna się uczyć wielu nowych rzeczy, nie tylko tych szkolnych...",
    date: "26 listopada 2020",
    category: "Rodzice",
    url: "https://gobrain.pl/archiwa/1927",
    categoryColor: "bg-orange-100 text-orange-700",
  },
  {
    title: "4 pomysły na rozwijające zabawy z dzieckiem",
    excerpt: "W życiu dziecka zabawa odgrywa bardzo ważną rolę. Dzięki niej uczymy się relacji z rówieśnikami, nowych pojęć czy mechanizmów. Warto zadbać, aby zabawy dzieci niosły ze sobą wartości edukacyjne...",
    date: "26 listopada 2020",
    category: "Rozwój",
    url: "https://gobrain.pl/archiwa/1921",
    categoryColor: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Twoje dziecko ma dysleksję? Trening GoBrain to świetne rozwiązanie!",
    excerpt: "Czy wiesz, że aż 15% dzieci w Polsce ma dysleksję? Czym jest dysleksja i jak można sobie z nią poradzić? Trening słuchowy ITS GoBrain może być skutecznym wsparciem w terapii dysleksji...",
    date: "26 listopada 2020",
    category: "Dysleksja",
    url: "https://gobrain.pl/archiwa/1915",
    categoryColor: "bg-red-100 text-red-700",
  },
  {
    title: "Do przedszkola z GoBrain",
    excerpt: "Gdy dziecko wchodzi w wiek przedszkolny, każdy z rodziców zastanawia się, w jaki sposób przygotować je na nowe wyzwania związane z tym okresem. Rozwój maluchów w wieku 4–6 lat to kluczowy etap...",
    date: "26 listopada 2020",
    category: "Przedszkole",
    url: "https://gobrain.pl/archiwa/1908",
    categoryColor: "bg-pink-100 text-pink-700",
  },
  {
    title: "Czym jest ADHD?",
    excerpt: "ADHD to nadpobudliwość psychoruchowa z deficytem uwagi i impulsywnością. Jeśli wszystkie trzy objawy występują u dziecka przez co najmniej kilka miesięcy niezależnie od środowiska, może to wskazywać na ADHD...",
    date: "26 listopada 2020",
    category: "ADHD",
    url: "https://gobrain.pl/archiwa/1903",
    categoryColor: "bg-indigo-100 text-indigo-700",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="py-16 md:py-24 bg-card/40 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                Blog GoBrain
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Artykuły o centralnych zaburzeniach przetwarzania słuchowego, terapii i badaniach naukowych dotyczących metody ITS GoBrain.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {articles.map((article, i) => (
                <motion.a
                  key={i}
                  variants={fadeInUp}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:shadow-md hover:border-primary/30 transition-all">
                    <div className="flex flex-wrap gap-3 items-center mb-4">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${article.categoryColor}`}>
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </div>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                      Czytaj więcej
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
