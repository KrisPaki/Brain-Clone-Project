import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import profGalkowskiImg from "@/assets/prof-galkowski.png";
import anetaPakielaImg from "@/assets/aneta-pakiela.png";
import { 
  Play, 
  Download, 
  CheckCircle2, 
  Brain, 
  School, 
  Stethoscope, 
  GraduationCap, 
  Activity, 
  Ear,
  Quote,
  ChevronRight,
  Monitor,
  Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 pt-16">
        
        {/* SECTION 1 - Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>Nowoczesna terapia słuchowa</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
                Interaktywny Trening Słuchowy <br className="hidden md:block"/> dla dzieci
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Poprawa koncentracji, pamięci i sukces edukacyjny Twojego dziecka. Zindywidualizowany program online ITS GoBrain.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 shadow-lg shadow-primary/20" asChild data-testid="hero-buy-btn">
                  <a href="https://automater.com/rest/order-viewer/buy/1073862" target="_blank" rel="noopener noreferrer">
                    Kup kod aktywacyjny
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 bg-background" asChild data-testid="hero-learn-btn">
                  <Link href="/its">Dowiedz się więcej</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Subtle background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        </section>

        {/* SECTION 2 - Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Brain,
                  title: 'ITS GoBrain',
                  subtitle: '"Zabawy z dźwiękami"',
                  desc: 'Dla dzieci 5-12 lat do stosowania w domu.',
                  link: '/its',
                  color: 'text-primary',
                  bg: 'bg-primary/10'
                },
                {
                  icon: School,
                  title: 'ITS GoBrain School',
                  subtitle: 'Dla placówek',
                  desc: 'Dla szkół i przedszkoli, licencja wielostanowiskowa.',
                  link: '/its-school',
                  color: 'text-accent',
                  bg: 'bg-accent/10'
                },
                {
                  icon: Stethoscope,
                  title: 'Platforma Terapeuta',
                  subtitle: 'Narzędzie specjalisty',
                  desc: 'Dla logopedów, pedagogów i psychologów.',
                  link: '/strefa-terapeuty',
                  color: 'text-foreground',
                  bg: 'bg-muted'
                }
              ].map((prod, i) => (
                <motion.div key={i} variants={fadeInUp} className="group relative bg-card rounded-2xl p-8 border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl ${prod.bg} flex items-center justify-center mb-6`}>
                    <prod.icon className={`w-7 h-7 ${prod.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{prod.title}</h3>
                  <p className="text-sm font-medium text-primary mb-3">{prod.subtitle}</p>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{prod.desc}</p>
                  <Link href={prod.link} className="inline-flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors" data-testid={`prod-link-${i}`}>
                    Dowiedz się więcej <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 - Demo */}
        <section className="py-20 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-background rounded-3xl p-8 md:p-10 border border-border shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-6">
                  <Play className="w-4 h-4" /> DEMO
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">ITS GoBrain Starter</h3>
                <p className="text-lg text-foreground font-medium mb-4">Sprawdź, jak działa przed zakupem</p>
                <p className="text-muted-foreground mb-8">
                  Pobierz bezpłatną wersję ITS GoBrain Starter i poznaj program w praktyce. Demo zawiera kilka wybranych ćwiczeń z pierwszego etapu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="w-full sm:w-auto justify-start" asChild data-testid="demo-home-pc">
                    <a href="http://gobraintech.pl/current/Sklep_PC/ITS_Starter.exe">
                      <Monitor className="w-4 h-4 mr-2" /> Pobierz na PC
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto justify-start" asChild data-testid="demo-home-android">
                    <a href="http://gobraintech.pl/current/Sklep_Android/ITS_Gobrain_Starter.apk">
                      <Smartphone className="w-4 h-4 mr-2" /> Pobierz na Android
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-background rounded-3xl p-8 md:p-10 border border-border shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  <School className="w-4 h-4" /> DLA PLACÓWEK
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">ITS GoBrain School DEMO</h3>
                <p className="text-lg text-foreground font-medium mb-4">Przetestuj w placówce przed wdrożeniem</p>
                <p className="text-muted-foreground mb-8">
                  Wersja demonstracyjna ITS GoBrain School pozwala sprawdzić program w realnych warunkach: w szkole, przedszkolu lub gabinecie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="w-full sm:w-auto justify-start" asChild data-testid="demo-school-pc">
                    <a href="http://gobraintech.pl/current/Sklep_PC/ITS_School_Starter.exe">
                      <Monitor className="w-4 h-4 mr-2" /> Pobierz na PC
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto justify-start" asChild data-testid="demo-school-android">
                    <a href="http://gobraintech.pl/current/Sklep_Android/ITS_Szkola_starter.apk">
                      <Smartphone className="w-4 h-4 mr-2" /> Pobierz na Android
                    </a>
                  </Button>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 4 - For whom? */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dla kogo jest program ITS GoBrain?</h2>
              <p className="text-xl text-muted-foreground">Program dla dzieci w wieku 5-12 lat</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              {[
                "Dziecko słyszy, ale nie słucha",
                "Nie rozumie poleceń",
                "Ma problemy z nauką czytania i pisania",
                "Nie potrafi się skoncentrować",
                "Jest wrażliwe na dźwięki",
                "Wymagające powtarzania poleceń",
                "Ma zaburzenia przetwarzania słuchowego (CAPD)",
                "Miało problemy ze słuchem (przerost migdałków)"
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-colors">
                  <div className="mt-1 bg-accent/10 rounded-full p-1 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 - Effects */}
        <section className="py-24 bg-card border-y border-border overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Efekty stosowania ITS GoBrain</h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            >
              {[
                { icon: Ear, text: "Poprawa przetwarzania słuchowego" },
                { icon: GraduationCap, text: "Poprawa wyników w nauce" },
                { icon: Activity, text: "Poprawa wymowy oraz komunikacji językowej" },
                { icon: Brain, text: "Poprawa uwagi i koncentracji, pamięci" },
                { icon: Stethoscope, text: "Normalizacja wrażliwości słuchowej" }
              ].map((effect, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-background rounded-2xl p-6 text-center border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center min-h-[200px]">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                    <effect.icon className="w-6 h-6" />
                  </div>
                  <p className="font-medium text-foreground">{effect.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 6 - Prof Recommendation */}
        <section className="py-24 bg-foreground text-background">
          <div className="container mx-auto px-4 max-w-5xl relative">
            <Quote className="absolute top-0 left-4 w-24 h-24 text-background/10 -translate-y-8 -translate-x-8" />
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative z-10 flex flex-col md:flex-row gap-10 items-start"
            >
              <div className="shrink-0 flex flex-col items-center gap-4">
                <img 
                  src={profGalkowskiImg} 
                  alt="Prof. dr hab. Tadeusz Stanisław Gałkowski" 
                  className="w-36 h-36 rounded-full object-cover object-top border-4 border-background/20 shadow-xl"
                />
                <div className="text-center hidden md:block">
                  <p className="font-bold text-sm leading-tight max-w-[140px]">Prof. dr hab. T.S. Gałkowski</p>
                </div>
              </div>
              <div className="flex-1">
                <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-8">
                  „Chciałbym powiedzieć jako przewodniczący Polskiego Komitetu Audiofonologii, że program Zabawy z dźwiękami to jest pomysł wspaniały dostosowany do potrzeb rozwojowych dzieci mających dość często duże kłopoty z przetwarzaniem bodźców słuchowych. Program GoBrain z czystym sumieniem mogę polecić i zachęcić do stosowania zarówno w domu jak i ośrodkach logopedycznych program ten ćwiczy i uwagę i pamięć słuchową. GoBrain przyczynia się do postępu szkolnych dzieci, zwłaszcza jeśli chodzi o czytanie i pisanie. Także GoBrain to dobry pomysł warty wykorzystania tam wszędzie gdzie to możliwe zarówno w placówkach szkolnych, w poradniach jak i na terenie rodzinnego domu."
                </blockquote>
                <div className="border-t border-background/20 pt-6">
                  <p className="font-bold text-lg">Prof. dr hab. Tadeusz Stanisław Gałkowski</p>
                  <p className="text-background/70 text-sm mt-1">Wybitny polski psycholog, profesor nauk humanistycznych, pracownik naukowy Wydziału Psychologii Uniwersytetu Warszawskiego. Przewodniczący Polskiego Komitetu Audiofonologii.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 7 - Founder */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col md:flex-row items-center md:items-start gap-12"
            >
              <img
                src={anetaPakielaImg}
                alt="Aneta Pakieła – twórczyni metody GoBrain"
                className="w-48 h-48 rounded-full object-cover object-top shrink-0 shadow-xl border-4 border-primary/10"
              />
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Aneta Pakieła – twórczyni metody GoBrain</h2>
                <p className="text-sm font-medium text-primary mb-6 leading-relaxed">
                  Neurologopeda, surdologopeda, pedagog, terapeuta IJAS, Tomatis, SAS, terapeuta II stopnia integracji odruchów, terapeuta modelu wczesnej interwencji INSITE, studia doktoranckie na Warszawskim Uniwersytecie Medycznym, Katedra Otolaryngologii. Członek Zarządu Polskiego Komitetu Audiofonologii.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "GoBrain to efekt wieloletniej praktyki klinicznej i pracy z dziećmi z zaburzeniami przetwarzania słuchowego. Metoda łączy wiedzę neurologopedyczną z nowoczesnymi technologiami, dając dzieciom dostępne i skuteczne narzędzie do treningu słuchowego."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 8 - Pricing */}
        <section className="py-24 bg-card border-t border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Wybierz odpowiednią licencję</h2>
              <p className="text-xl text-muted-foreground">Rozwiązania dopasowane do Twoich potrzeb</p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
            >
              {/* Card 1: School */}
              <motion.div variants={fadeInUp} className="bg-background rounded-3xl p-8 border border-border shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-2">GoBrain School</h3>
                <p className="text-muted-foreground mb-6 h-10">Dla szkół, przedszkoli, poradni</p>
                <ul className="space-y-4 mb-8 min-h-[200px]">
                  {["Wieloużytkownikowy dostęp", "Panel nauczyciela/terapeuty", "Monitoring postępu", "Licencja instytucjonalna"].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full h-12" asChild data-testid="pricing-school-btn">
                  <Link href="/strefa-terapeuty">Zamów licencję</Link>
                </Button>
              </motion.div>

              {/* Card 2: Main (Most Popular) */}
              <motion.div variants={fadeInUp} className="bg-background rounded-3xl p-8 border-2 border-primary shadow-xl relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  Najpopularniejszy
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 mt-2">ITS GoBrain</h3>
                <p className="text-muted-foreground mb-4">Dla dzieci 5-12 lat, do stosowania w domu</p>
                <div className="flex gap-2 mb-6 flex-wrap">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">Licencja 365 dni</span>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">Licencja bezterminowa</span>
                </div>
                <ul className="space-y-4 mb-8 min-h-[200px]">
                  {["Pełny trening słuchowy (2 etapy)", "Program Zabawy z dźwiękami", "Postęp zapisywany automatycznie", "PC (Windows) i Android"].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-12 text-base font-semibold" asChild data-testid="pricing-main-btn">
                  <a href="https://automater.com/rest/order-viewer/buy/1073862" target="_blank" rel="noopener noreferrer">
                    Kup kod aktywacyjny
                  </a>
                </Button>
              </motion.div>

              {/* Card 3: Therapist */}
              <motion.div variants={fadeInUp} className="bg-background rounded-3xl p-8 border border-border shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-2">Terapeuta</h3>
                <p className="text-muted-foreground mb-6 h-10">Dla logopedów, pedagogów, psychologów</p>
                <ul className="space-y-4 mb-8 min-h-[200px]">
                  {["Platforma diagnostyczna", "Test 8 obszarów", "Kwestionariusze i ankiety", "Porównanie wyników przed/po", "Dostęp do materiałów szkoleniowych"].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full h-12" asChild data-testid="pricing-therapist-btn">
                  <Link href="/strefa-terapeuty">Dowiedz się więcej</Link>
                </Button>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* SECTION 9 - Testimonial */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Quote className="w-12 h-12 text-primary mx-auto mb-8 opacity-50" />
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8"
            >
              "Zainteresowałam się ITS GoBrain po tym, jak zobaczyłam efekty jego zastosowania u mojego podopiecznego. To było niesamowite, dziecko nareszcie w codziennej mowie zaczęło stosować to, czego go nauczyłam w gabinecie. Dużym atutem dla mnie jest to że dziecko w domu ćwiczy w atrakcyjnej formie a ja mogę w dowolnym momencie śledzić jego postępy."
            </motion.p>
            <motion.div variants={fadeInUp} className="font-semibold text-primary">
              Wiola, Logopeda pedagog
            </motion.div>
          </div>
        </section>

        {/* SECTION 10 - Therapist Map */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Rozwijamy potencjał dzieci w całej Polsce</h2>
              <p className="text-lg text-muted-foreground">Nasza sieć Providerów GoBrain obejmuje specjalistów w całej Polsce.</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-2xl overflow-hidden border border-border shadow-lg mb-8"
              style={{ height: 400 }}
            >
              <iframe
                title="Mapa terapeutów GoBrain"
                src="https://www.google.com/maps/d/embed?mid=1vzg81TvhC_-i_qYRo5o-VZ05K6dSfcy-"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
            <div className="text-center">
              <Button variant="outline" size="lg" asChild data-testid="locations-btn">
                <Link href="/strefa-terapeuty">Sprawdź listę terapeutów</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 11 - Partners */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-foreground mb-12">Nasi partnerzy</h2>
              <div className="flex flex-wrap justify-center items-center gap-16">
                {/* SAS Centre */}
                <a href="https://www.sascentre.pl" target="_blank" rel="noopener noreferrer" 
                   className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-20 h-20 rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                    <span className="text-2xl font-bold text-primary tracking-tight">SAS</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">SAS Centre</span>
                </a>
                {/* Jakanie.pl */}
                <a href="https://jakanie.pl" target="_blank" rel="noopener noreferrer"
                   className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-20 h-20 rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                    <span className="text-2xl font-bold text-foreground tracking-tight" style={{ fontFamily: "Georgia, serif" }}>J.</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">Jakanie.pl</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 12 - Final CTA */}
        <section className="py-24 bg-foreground text-background text-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Chcesz zostać terapeutą GoBrain? Zapisz się na szkolenie!</h2>
              <Button size="lg" className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90" asChild data-testid="final-cta-btn">
                <Link href="/szkolenia-i-webinary">Szkolenia i webinary</Link>
              </Button>
            </motion.div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
