import { motion, type Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const faqs = [
  {
    q: "Dla kogo dedykowane są programy ITS GoBrain?",
    a: "ITS GoBrain jest dedykowany dla dzieci od 4 roku życia, które słyszą dobrze, ale nie słuchają, potrzebują powtarzania poleceń, mają problemy z uwagą i koncentracją. Program wskazany jest w przypadku gdy występuje nadwrażliwość słuchowa — zatykanie uszu, objawy przeciążenia układu nerwowego — nerwowość, jąkanie. Program polecany jest dla dyslektyków, dzieci z problemami z mową, komunikacją, nauką czy koncentracją.",
  },
  {
    q: "W jakim celu stosuje się programy ITS GoBrain?",
    a: "Celem ITS GoBrain jest poprawa przetwarzania informacji słuchowych, a dzięki temu poprawa mowy, pamięci, koncentracji i uwagi. Dziecko dzięki treningom lepiej rozumie, słucha, zapamiętuje i mniej się męczy.",
  },
  {
    q: "Jakie są efekty stosowania programów ITS GoBrain?",
    a: "Dziecko dzięki treningom lepiej rozumie, słucha, zapamiętuje, a przy tym mniej się męczy. ITS GoBrain to sukces w roli ucznia, zwiększenie efektywności terapii logopedycznej, pedagogicznej. Efekty obejmują: poprawę przetwarzania słuchowego, wyniki w nauce, wymowę i komunikację językową, uwagę, koncentrację i pamięć oraz normalizację wrażliwości słuchowej.",
  },
  {
    q: "Jak można kupić ITS GoBrain Zabawy z Dźwiękami?",
    a: "Zakupu można dokonać za pośrednictwem terapeuty, który jest Providerem GoBrain, lub bezpośrednio przez sklep na stronie gobrain.pl. Kod aktywacyjny jest specjalnym kluczem, który należy wpisać przy każdym uruchomieniu programu w celu uzyskania dostępu. Dzięki temu można korzystać z programu na dowolnym urządzeniu (PC lub Android) o ile posiada ono dostęp do internetu.",
  },
  {
    q: "Jak otrzymać fakturę po zakupie?",
    a: "Po dokonaniu zakupu i otrzymaniu mailem kodu aktywacyjnego należy kliknąć na przycisk 'kontakt ze sprzedawcą' i podać dane do faktury — faktura zostanie wysłana na wskazany adres e-mail.",
  },
  {
    q: "Co to jest i co zawiera ITS GoBrain Zabawy z Dźwiękami?",
    a: "ITS GoBrain Zabawy z Dźwiękami to Interaktywny Trening Słuchowy dostępny online w formie atrakcyjnych ćwiczeń zwiększających zdolność przetwarzania informacji słuchowych i kształtującym umiejętności będące podstawą osiągnięcia przez dziecko sukcesu w roli ucznia. Program składa się z 4 poziomów trudności, a każdy z nich zawiera 5 zadań głównych podzielonych na etap nauki, test i grę bonus. Z programu należy korzystać 2–3 razy w tygodniu. System automatycznie dostosowuje się do możliwości dziecka.",
  },
  {
    q: "Co to jest ITS Pre&SCHOOL?",
    a: "Wersja ITS Pre&School jest przeznaczona do stosowania w placówkach edukacyjnych. Nie ma ograniczenia ilości użytkowników. Terapeuta sam decyduje o czasie trwania sesji, ich ilości i zadaniach. Wersja szkolna nie jest podzielona na sesje i nie ma dobowych ograniczeń czasowych. Pozwala na dostęp do wszystkich zadań, gier i bonusów. Dostępna w dwóch wariantach licencyjnych: licencja 365 dni lub licencja bezterminowa.",
  },
  {
    q: "Na jakich urządzeniach można korzystać z programów GoBrain?",
    a: "Produkty ITS GoBrain można zainstalować na wybranym urządzeniu — Android (telefon, tablet) lub PC Windows (komputer, laptop, notebook). Z programu ITS GoBrain Zabawy z Dźwiękami oraz Platformy TERAPEUTA można korzystać również online przez przeglądarkę internetową.",
  },
  {
    q: "Ile jest wszystkich sesji treningowych w ITS GoBrain Zabawy z Dźwiękami?",
    a: "Program składa się z 4 poziomów trudności, a każdy z nich zawiera 5 zadań głównych podzielonych na etap nauki, test i grę bonus. Ilość sesji treningowych zależna jest od potrzeb i umiejętności słuchowych dziecka. Gdy w I etapie ITS GoBrain Zabawy z Dźwiękami dziecko miało problemy lub nie zakończyło wszystkich zadań przewidzianych w programie, należy zastosować II etap.",
  },
  {
    q: "Czy między etapami w treningu ITS GoBrain Zabawy z Dźwiękami konieczna jest przerwa?",
    a: "Przerwa między pierwszym a kolejnym etapem nie jest wymagana. Z każdym treningiem pamięć i koncentracja będą się poprawiać. Problemy występujące w trakcie zadań treningowych wskazują na konieczność kontynuowania tego typu treningu.",
  },
  {
    q: "Co to jest Platforma Terapeuta i jak można uzyskać do niej dostęp?",
    a: "Platforma Terapeuta zawiera zestaw diagnostyczny składający się z PreTestu i PostTestu do badania umiejętności słuchowych, czasu reakcji, poziomu odporności na rozpraszanie, pamięci słuchowej. Umożliwia dostęp do ankiet i kwestionariuszy, jak również daje możliwość śledzenia postępów podopiecznych w treningu ITS GoBrain. Platformę TERAPEUTA można zakupić w zakładce sklep — po zakupie otrzymują Państwo również dostęp do szkolenia, dzięki któremu otrzymacie tytuł Providera GoBrain.",
  },
  {
    q: "Czy ITS GoBrain zastępuje tradycyjną terapię logopedyczną?",
    a: "ITS GoBrain jest doskonałym uzupełnieniem tradycyjnej terapii logopedycznej, pedagogicznej i psychologicznej — nie zastępuje jej. Program jest skuteczny jako narzędzie wspierające, stosowane między sesjami terapeutycznymi. Potwierdza to opinia terapeutów — dziecko w domu ćwiczy w atrakcyjnej formie, a terapeuta może w dowolnym momencie śledzić jego postępy.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="FAQ – najczęstsze pytania o ITS GoBrain"
        description="Odpowiedzi na najczęstsze pytania dotyczące treningu słuchowego ITS GoBrain. Jak działa, dla kogo jest, ile trwa i jakie daje efekty."
        canonical="/faq"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="pt-16">

        {/* Hero */}
        <section className="py-16 md:py-24 bg-card/40 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                <span>Pytania i odpowiedzi</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                Najczęściej zadawane pytania
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
                Znajdź odpowiedzi na najczęstsze pytania dotyczące programów ITS GoBrain, zakupu i stosowania.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    <AccordionItem
                      value={`item-${i}`}
                      className="border border-border rounded-2xl px-6 data-[state=open]:border-primary/40 data-[state=open]:bg-card transition-colors"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground py-5 hover:no-underline hover:text-primary transition-colors">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-16 bg-card border-t border-border">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Nie znalazłeś odpowiedzi?</h2>
              <p className="text-muted-foreground mb-8">Skontaktuj się z nami — odpowiemy na wszystkie Twoje pytania.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/pomoc">Przejdź do centrum pomocy</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:gobrainterapeuta@gmail.com">Napisz do nas</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>


    </div>
  );
}
