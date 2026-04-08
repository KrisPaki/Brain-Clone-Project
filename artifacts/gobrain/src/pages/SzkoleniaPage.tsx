import { useState } from "react";
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
  X,
  Send,
  CheckCircle,
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

function RegistrationModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    zawod: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Zgłoszenie na szkolenie GoBrain — Provider");
    const body = encodeURIComponent(
      `Imię i nazwisko: ${form.name}\nEmail: ${form.email}\nTelefon: ${form.phone}\nZawód / specjalizacja: ${form.zawod}\n\nWiadomość:\n${form.message}`
    );
    window.location.href = `mailto:gobrainterapeuta@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Formularz zgłoszeniowy na szkolenie"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden max-h-[90vh] flex flex-col">
        <div className="bg-gradient-to-br from-primary to-blue-700 px-8 pt-8 pb-8 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label="Zamknij"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 mb-4">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-extrabold mb-1 leading-tight">
            Formularz zgłoszeniowy
          </h2>
          <p className="text-white/80 text-sm">
            Szkolenie certyfikacyjne Provider GoBrain — ITS GoBrain Interaktywny Trening Słuchowy
          </p>
        </div>

        <div className="overflow-y-auto flex-1">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center px-8 py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Zgłoszenie wysłane!</h3>
              <p className="text-muted-foreground mb-6">
                Dziękujemy za zainteresowanie szkoleniem. Skontaktujemy się z Tobą w ciągu 1–2 dni roboczych.
              </p>
              <Button onClick={onClose}>Zamknij</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="reg-name">
                  Imię i nazwisko <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jan Kowalski"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="reg-email">
                  Adres e-mail <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jan@przyklad.pl"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="reg-phone">
                  Telefon (opcjonalnie)
                </label>
                <input
                  id="reg-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+48 123 456 789"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="reg-zawod">
                  Zawód / specjalizacja <span className="text-red-500">*</span>
                </label>
                <select
                  id="reg-zawod"
                  name="zawod"
                  required
                  value={form.zawod}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                >
                  <option value="" disabled>Wybierz zawód</option>
                  <option value="Logopeda">Logopeda</option>
                  <option value="Pedagog">Pedagog</option>
                  <option value="Psycholog">Psycholog</option>
                  <option value="Neurologopeda">Neurologopeda</option>
                  <option value="Surdologopeda">Surdologopeda</option>
                  <option value="Terapeuta integracji sensorycznej">Terapeuta integracji sensorycznej</option>
                  <option value="Inny specjalista">Inny specjalista</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="reg-message">
                  Dodatkowe pytania / uwagi
                </label>
                <textarea
                  id="reg-message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Np. Pytanie dotyczące terminu szkolenia..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                />
              </div>

              <Button type="submit" className="w-full h-12 text-base font-semibold">
                <Send className="w-4 h-4 mr-2" />
                Wyślij zgłoszenie
              </Button>
              <p className="text-xs text-muted-foreground text-center pb-2">
                Skontaktujemy się z Tobą w ciągu 1–2 dni roboczych.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SzkoleniaPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">

      {showModal && <RegistrationModal onClose={() => setShowModal(false)} />}

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
                  <Video className="w-4 h-4 text-primary" /> 5 modułów video
                </span>
                <span className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 text-primary" /> Certyfikat imienny
                </span>
                <span className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full">
                  <Users className="w-4 h-4 text-primary" /> Dołączenie do sieci Providerów
                </span>
                <span className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 text-green-500" /> Możliwość zarobku
                </span>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-base font-semibold" asChild>
                  <a href="https://automater.pl/rest/order-viewer/buy/787759" target="_blank" rel="noopener noreferrer">
                    Kup kurs certyfikacyjny
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base"
                  onClick={() => setShowModal(true)}
                  data-testid="btn-formularz"
                >
                  Formularz zgłoszeniowy
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
              <p className="text-lg text-muted-foreground">Pięć modułów video omawiających kompleksowo metodę ITS GoBrain</p>
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
                  desc: "Definicja CAPD, diagnozowanie, różnicowanie z ADHD i dysleksją. Jak stosować platformę TERAPEUTA do diagnozy i monitorowania postępów.",
                },
                {
                  module: "Moduł 4",
                  title: "Typy kliniczne i wytyczne terapeutyczne",
                  desc: "Praktyczne zastosowanie ITS GoBrain w terapii logopedycznej, pedagogicznej i psychologicznej. Wskazania i przeciwwskazania. Scenariusze pracy z dziećmi o różnych profilach trudności. Obsługa PreTestu i PostTestu — jak przeprowadzać badania diagnostyczne i interpretować wyniki.",
                },
                {
                  module: "Moduł 5",
                  title: "Model biznesowy GoBrain",
                  desc: "Jak zbudować dodatkowe źródło dochodu jako Provider GoBrain? Omawiamy możliwości sprzedaży kodów aktywacyjnych podopiecznym, odpłatne przeprowadzanie PreTestów i PostTestów słuchowych, rozszerzenie oferty gabinetu o profesjonalny trening słuchowy oraz budowanie długofalowych relacji z klientami w oparciu o system GoBrain.",
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
                "Możliwość zarabiania na sprzedaży programów GoBrain swoim podopiecznym",
                "Uprawnienia do samodzielnego przeprowadzania PreTestów i PostTestów słuchowych",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Chcesz zostać terapeutą GoBrain?</h2>
              <p className="text-white/80 mb-10 text-lg">Zapisz się na kurs certyfikacyjny i dołącz do rosnącej sieci Providerów GoBrain w całej Polsce.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-base bg-white text-primary hover:bg-white/90 font-semibold" asChild>
                  <a href="https://automater.pl/rest/order-viewer/buy/787759" target="_blank" rel="noopener noreferrer">
                    Zapisz się na szkolenie
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base border-white text-white hover:bg-white/10"
                  onClick={() => setShowModal(true)}
                >
                  Formularz zgłoszeniowy
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>


    </div>
  );
}
