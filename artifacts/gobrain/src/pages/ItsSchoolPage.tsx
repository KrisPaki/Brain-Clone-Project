import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  School,
  Users,
  ShieldCheck,
  BarChart3,
  Clock,
  ChevronRight,
  Mail,
  Phone,
  GraduationCap,
  Stethoscope,
  Building2,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import childrenClassroomImg from "@/assets/children-classroom.png";
import therapistDashboardImg from "@/assets/therapist-dashboard.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ItsSchoolPage() {
  return (
    <div className="min-h-screen bg-background font-sans pt-16">

      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-orange-50 via-white to-blue-50 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
              <School className="w-4 h-4" />
              Bez limitu użytkowników
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
              ITS GoBrain{" "}
              <span className="text-orange-500">Pre & School</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Profesjonalna platforma treningu słuchowego dla gabinetów, szkół, przedszkoli i poradni. Nieograniczona liczba podopiecznych, pełna kontrola terapeuty, licencja roczna.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 text-base font-semibold bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <a href="https://automater.pl/rest/order-viewer/buy/979412" target="_blank" rel="noopener noreferrer">
                  Zamów licencję
                  <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base" asChild>
                <Link to="/strefa-terapeuty">
                  Strefa terapeuty
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-2xl px-6 py-3">
              <span className="text-2xl font-black text-orange-500">799</span>
              <span className="text-sm text-muted-foreground">PLN / rok (brutto)</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key features */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Co zawiera licencja Pre & School?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-xl mx-auto">
              Wszystkie narzędzia potrzebne do prowadzenia skutecznego treningu słuchowego w placówce.
            </motion.p>
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
                icon: Users,
                color: "bg-blue-50 text-blue-600",
                title: "Nieograniczona liczba podopiecznych",
                desc: "Jedna licencja obejmuje dowolną liczbę dzieci — bez dodatkowych opłat za każdego kolejnego użytkownika.",
              },
              {
                icon: ShieldCheck,
                color: "bg-green-50 text-green-600",
                title: "Terapeuta kontroluje sesje",
                desc: "Terapeuta decyduje o czasie trwania, zakresie i harmonogramie każdej sesji treningowej. Pełna elastyczność pracy.",
              },
              {
                icon: BarChart3,
                color: "bg-purple-50 text-purple-600",
                title: "Monitoring postępów",
                desc: "Bieżące śledzenie wyników i postępów każdego podopiecznego.",
              },
              {
                icon: Clock,
                color: "bg-orange-50 text-orange-600",
                title: "Brak ograniczeń dobowych",
                desc: "W odróżnieniu od licencji domowej — brak dziennych limitów czasu treningu. Sesje dopasowane do grafiku placówki.",
              },
              {
                icon: GraduationCap,
                color: "bg-indigo-50 text-indigo-600",
                title: "Dostęp do wszystkich zadań",
                desc: "Pełny dostęp do wszystkich poziomów trudności, zadań treningowych i gier bonusowych bez ograniczeń.",
              },
              {
                icon: Building2,
                color: "bg-rose-50 text-rose-600",
                title: "Faktura VAT w cenie",
                desc: "Licencja objęta dokumentacją księgową. Faktura VAT wystawiana automatycznie po zamówieniu.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* For whom */}
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
              Dla kogo jest licencja ITS Pre & School?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-xl mx-auto">
              Rozwiązanie stworzone z myślą o specjalistach pracujących z grupami dzieci.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {[
              {
                icon: "🏥",
                title: "Poradnie i gabinety",
                desc: "Logopedyczne, psychologiczne, terapeutyczne — praca z wieloma podopiecznymi jednocześnie.",
              },
              {
                icon: "🏫",
                title: "Szkoły podstawowe",
                desc: "Zajęcia wyrównawcze, świetlice, klasy integracyjne. Wspieranie uczniów ze specjalnymi potrzebami.",
              },
              {
                icon: "👩‍🏫",
                title: "Szkolni logopedzi, psycholodzy, pedagodzy",
                desc: "Specjaliści szkolni pracujący z dziećmi ze specjalnymi potrzebami edukacyjnymi.",
              },
              {
                icon: "🌸",
                title: "Przedszkola",
                desc: "Wczesna stymulacja słuchowa dla dzieci w wieku przedszkolnym. Praca z grupami i indywidualnie. Szkolni logopedzi, psycholodzy, pedagodzy.",
              },
              {
                icon: "🎓",
                title: "Ośrodki terapeutyczne",
                desc: "Specjalistyczne centra rehabilitacyjne, ośrodki wczesnej interwencji i terapii pedagogicznej. Rehabilitacja dzieci z wadą słuchu oraz ze spektrum autyzmu.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-background border border-border rounded-2xl p-5 text-center hover:border-orange-300 transition-colors"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image + benefits */}
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
                alt="Dzieci korzystające z ITS GoBrain Pre & School w placówce"
                className="w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
                <Stethoscope className="w-4 h-4" />
                Dla profesjonalistów
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-4">
                Profesjonalne narzędzie dla terapeutów
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
                ITS GoBrain Pre & School to wersja programu zaprojektowana z myślą o specjalistach. Daje terapeucie pełną kontrolę nad procesem treningowym — od planowania sesji po analizę wyników każdego dziecka.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3">
                {[
                  "Panel zarządzania podopiecznymi w jednym miejscu",
                  "Dostęp do PreTestów i PostTestów diagnostycznych",
                  "Gotowe scenariusze PDF do wydruku — obrazki i karty do tradycyjnej pracy terapeutycznej",
                  "Możliwość pracy stacjonarnej i zdalnej",
                  "Szkolenie i certyfikat Providera GoBrain w pakiecie",
                  "Wsparcie techniczne i merytoryczne od twórców",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="py-16 bg-card/40 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-2 lg:order-1"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <BarChart3 className="w-4 h-4" />
                Panel terapeuty
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-4">
                Pełny wgląd w postępy każdego dziecka
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
                Intuicyjny panel terapeuty pozwala na bieżące śledzenie wyników wszystkich podopiecznych. Raporty, statystyki sesji i historia treningów — wszystko w jednym miejscu.
              </motion.p>
              <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
                {[
                  { value: "100%", label: "Kontroli nad sesjami" },
                  { value: "24/7", label: "Dostęp do platformy" },
                  { value: "∞", label: "Liczba podopiecznych" },
                  { value: "365", label: "Dni licencji / rok" },
                ].map((stat) => (
                  <motion.div key={stat.label} variants={fadeInUp} className="bg-background rounded-2xl border border-border p-4 text-center">
                    <p className="text-2xl font-black text-orange-500">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2"
            >
              <img
                src={therapistDashboardImg}
                alt="Panel terapeuty ITS GoBrain Pre & School"
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-3">
              ITS Pre & School vs. licencja domowa
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg">
              Porównaj, które rozwiązanie pasuje do Twoich potrzeb.
            </motion.p>
          </motion.div>

          <div className="overflow-x-auto rounded-2xl border border-border">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="overflow-hidden"
            >
              <table className="w-full text-sm min-w-[480px]">
                <thead>
                  <tr className="bg-card border-b border-border">
                    <th className="text-left p-3 md:p-4 font-semibold text-foreground">Funkcja</th>
                    <th className="text-center p-3 md:p-4 font-semibold text-foreground whitespace-nowrap">GoBrain Indywidualny</th>
                    <th className="text-center p-3 md:p-4 font-bold text-orange-500 bg-orange-50 whitespace-nowrap">Pre & School</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Liczba podopiecznych", "1 dziecko", "Nieograniczona"],
                    ["Ograniczenia dobowe", "Tak", "Brak"],
                    ["Kontrola terapeuty", "Brak", "Pełna"],
                    ["Panel monitoringu", "Rodzic", "Terapeuta + rodzic"],
                    ["PreTest / PostTest", "Nie", "Tak"],
                    ["Faktura VAT", "Tak", "Tak"],
                    ["Wsparcie techniczne", "Podstawowe", "Priorytetowe"],
                    ["Szkolenie Providera", "Nie", "Tak"],
                  ].map(([feature, home, school], i) => (
                    <motion.tr
                      key={feature}
                      variants={fadeInUp}
                      className={`border-b border-border ${i % 2 === 0 ? "bg-background" : "bg-card/30"}`}
                    >
                      <td className="p-3 md:p-4 text-foreground font-medium">{feature}</td>
                      <td className="p-3 md:p-4 text-center text-muted-foreground">{home}</td>
                      <td className="p-3 md:p-4 text-center font-semibold text-orange-600 bg-orange-50/50">{school}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-orange-500">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Wsparcie dla terapeutów
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Zainteresowany licencją ITS Pre & School?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8">
              Skontaktuj się z nami — dobierzemy odpowiedni plan dla Twojej placówki i odpowiemy na wszystkie pytania.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-13 px-8 text-base font-semibold bg-white text-orange-600 hover:bg-white/90" asChild>
                <a href="https://automater.pl/rest/order-viewer/buy/979412" target="_blank" rel="noopener noreferrer">
                  Kup licencję ITS Pre & School
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-white text-white hover:bg-white hover:text-orange-600" asChild>
                <a href="tel:+48608650435">
                  <Phone className="w-4 h-4 mr-2" />
                  608 650 435
                </a>
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/sklep" className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors">
                ← Wróć do sklepu
              </Link>
              <Link to="/strefa-terapeuty" className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors">
                Strefa terapeuty →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
