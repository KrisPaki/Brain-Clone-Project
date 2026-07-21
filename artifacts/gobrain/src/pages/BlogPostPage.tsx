import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Calendar, ArrowLeft, ExternalLink, User } from "lucide-react";
import { blogArticles } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import { AUTOMATER_PRODUCTS } from "@/config/automater";

function renderContent(markdown: string) {
  const lines = markdown.split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-foreground mt-10 mb-4">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('# ')) {
      elements.push(
        <h1 key={key++} className="text-3xl font-bold text-foreground mt-8 mb-4">
          {line.replace('# ', '')}
        </h1>
      );
    } else if (line.startsWith('> ')) {
      const quoteLines: string[] = [];
      let j = i;
      while (j < lines.length && lines[j].startsWith('> ')) {
        quoteLines.push(lines[j].replace(/^> /, ''));
        j++;
      }
      i = j - 1;
      elements.push(
        <blockquote key={key++} className="border-l-4 border-primary/40 pl-5 py-1 my-6 italic text-foreground/90 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatInline(quoteLines.join(' ')) }} />
      );
    } else if (line.startsWith('- ')) {
      const items: string[] = [];
      let j = i;
      while (j < lines.length && lines[j].startsWith('- ')) {
        items.push(lines[j].replace(/^- /, ''));
        j++;
      }
      i = j - 1;
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-2 my-4 text-muted-foreground leading-relaxed pl-2">
          {items.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      );
    } else if (line.trim() === '') {
      elements.push(<div key={key++} className="h-2" />);
    } else {
      elements.push(
        <p key={key++} className="text-muted-foreground leading-relaxed my-2"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      );
    }
  }
  return elements;
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/_(.+?)_/g, '<em>$1</em>');
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find(a => a.slug === slug);

  if (!article) return <Navigate to="/blog" replace />;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Person", name: article.author },
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt ?? article.publishedAt,
    url: `https://gobrain.pl/blog/${article.slug}`,
    publisher: { "@id": "https://gobrain.pl/#organization" },
    inLanguage: "pl",
  };

  return (
    <div className="min-h-screen bg-background font-sans pt-16">
      <SEO
        title={`${article.title} — Blog GoBrain`}
        description={article.excerpt}
        canonical={`/blog/${article.slug}`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-12 md:py-16 bg-card/40 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót do bloga
            </Link>

            <div className="flex flex-wrap gap-3 items-center mb-4">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${article.categoryColor}`}>
                {article.category}
              </span>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <User className="w-3.5 h-3.5" />
                {article.author}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="prose-like"
          >
            {renderContent(article.content)}

            {/* PDF / External link */}
            {(article.pdfUrl || article.externalUrl) && (
              <div className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/15 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-foreground mb-1">
                    {article.pdfUrl ? 'Pobierz pełny artykuł (PDF)' : 'Przeczytaj pełny artykuł naukowy'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {article.pdfUrl
                      ? 'Artykuł opublikowany w czasopiśmie Why Story nr 1/2021.'
                      : 'Artykuł naukowy — Centralne zaburzenia przetwarzania słuchowego, str. 243.'}
                  </p>
                </div>
                <Button asChild variant="outline" className="shrink-0">
                  <a
                    href={article.pdfUrl ?? article.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {article.pdfUrl ? 'Otwórz PDF' : 'Otwórz artykuł'}
                  </a>
                </Button>
              </div>
            )}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-14 p-8 rounded-2xl bg-primary text-white text-center"
          >
            <h3 className="text-xl font-bold mb-2">Wypróbuj ITS GoBrain</h3>
            <p className="text-white/80 text-sm mb-6">
              Interaktywny trening słuchowy dla dzieci — poprawa koncentracji, pamięci i uwagi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-white text-primary hover:bg-white/90 font-semibold">
                <a href={AUTOMATER_PRODUCTS.itsEtap1} target="_blank" rel="noopener noreferrer">
                  Kup kod aktywacyjny
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10 bg-transparent">
                <Link to="/sklep">
                  Sprawdź ofertę
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Back nav */}
          <div className="mt-10 pt-8 border-t border-border flex justify-between items-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Wszystkie artykuły
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
