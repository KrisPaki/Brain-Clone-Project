import { motion, type Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { blogArticles } from "@/data/blogData";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog GoBrain",
    description: "Artykuly eksperckie o treningu sluchowym, koncentracji i rozwoju dzieci.",
    url: "https://gobrain.pl/blog",
    publisher: { "@id": "https://gobrain.pl/#organization" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogArticles.map((article, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://gobrain.pl/blog/${article.slug}`,
        name: article.title,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="Blog – artykuły o treningu słuchowym i rozwoju dzieci"
        description="Artykuły eksperckie o treningu słuchowym, koncentracji i rozwoju dzieci. Wiedza oparta na badaniach naukowych od twórców ITS GoBrain."
        canonical="/blog"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>
      <div className="pt-16">

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
              {blogArticles.map((article, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Link
                    to={`/blog/${article.slug}`}
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
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </div>

    </div>
  );
}
