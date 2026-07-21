import { ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Dla kogo jest GoBrain?",
    a: "Dla dzieci od 5 roku życia — szczególnie tych, które mają trudności z koncentracją, pamięcią słuchową, lub u których rozpoznano CAPD, dysleksję, ADHD lub opóźnienie mowy.",
  },
  {
    q: "Jak wygląda trening?",
    a: "30 minut dziennie, minimum 3 razy w tygodniu przez 7 tygodni. Program dostosowuje poziom trudności do możliwości dziecka. Działa w przeglądarce — bez instalacji.",
  },
  {
    q: "Kiedy zobaczę efekty?",
    a: "Pierwsze zauważalne zmiany (lepsza uwaga, spokój podczas słuchania) rodzice zgłaszają już po 2–3 tygodniach. Pełne wyniki testów poprawiają się po ukończeniu kursu.",
  },
  {
    q: "Czy zastępuje terapię logopedyczną?",
    a: "Nie. GoBrain jest narzędziem wspierającym — stosowanym między sesjami u specjalisty lub samodzielnie jako prewencja. Wielu terapeutów zaleca go jako uzupełnienie.",
  },
  {
    q: "Ile kosztuje?",
    a: "Licencja domowa: 390 zł. Obejmuje 1 konto, dostęp na 8 tygodni i pełny trening. Licencja gabinetowa od 799 zł.",
  },
];

const results = [
  { label: "Pamięć słuchowa", before: 40, after: 78 },
  { label: "Koncentracja uwagi", before: 35, after: 72 },
  { label: "Przetwarzanie mowy", before: 45, after: 81 },
];

export function Minimalna() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Nav — minimal */}
      <nav className="px-8 py-5 flex justify-between items-center border-b border-gray-100">
        <span className="font-black text-gray-900 text-xl tracking-tight">GoBrain</span>
        <div className="flex items-center gap-8 text-sm text-gray-400">
          <span className="hover:text-gray-700 cursor-pointer transition-colors">Jak działa</span>
          <span className="hover:text-gray-700 cursor-pointer transition-colors">Cennik</span>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Kup dostęp →
          </button>
        </div>
      </nav>

      {/* Hero — single screen, maximum whitespace */}
      <section className="flex flex-col items-center justify-center text-center px-8 pt-20 pb-16 min-h-[calc(100vh-73px)]">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.25em] mb-8">
            Interaktywny Trening Słuchowy ITS GoBrain
          </p>

          <h1 className="text-7xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6">
            7 tygodni.<br />
            <span className="text-blue-600">Lepsza koncentracja.</span>
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-md mx-auto">
            Trening słuchowy dla dzieci od 5 lat — w formie gry,
            potwierdzony klinicznie, dostępny w domu.
          </p>

          {/* Single primary CTA */}
          <div className="flex flex-col items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-2xl text-lg flex items-center gap-3 transition-colors shadow-xl shadow-blue-600/20">
              Kup dostęp — 390 zł
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-gray-400 text-sm">
              Dostęp od razu · Gwarancja zwrotu 14 dni
            </p>
          </div>

          {/* Minimal social proof */}
          <div className="flex items-center justify-center gap-8 mt-12 pt-12 border-t border-gray-100">
            <div className="text-center">
              <p className="text-2xl font-black text-gray-900">5 000+</p>
              <p className="text-sm text-gray-400">dzieci</p>
            </div>
            <div className="w-px h-10 bg-gray-100" />
            <div className="text-center">
              <p className="text-2xl font-black text-gray-900">4.9 / 5</p>
              <p className="text-sm text-gray-400">ocena</p>
            </div>
            <div className="w-px h-10 bg-gray-100" />
            <div className="text-center">
              <p className="text-2xl font-black text-gray-900">98%</p>
              <p className="text-sm text-gray-400">zadowolonych rodziców</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results — minimal bar chart */}
      <section className="px-8 py-20 max-w-2xl mx-auto">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] text-center mb-2">Wyniki badań klinicznych</p>
        <h2 className="text-3xl font-black text-gray-900 text-center mb-12">Co się zmienia po 7 tygodniach?</h2>
        <div className="space-y-8">
          {results.map((r, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-gray-700">{r.label}</span>
                <span className="font-black text-blue-600">+{r.after - r.before} pkt</span>
              </div>
              <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="absolute h-full rounded-full bg-gray-200"
                  style={{ width: `${r.before}%` }}
                />
                <div
                  className="absolute h-full rounded-full bg-blue-600"
                  style={{ width: `${r.after}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Przed</span>
                <span>Po</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ — progressive disclosure (CSS-only) */}
      <section className="px-8 py-16 border-t border-gray-100 max-w-2xl mx-auto">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] text-center mb-2">Pytania i odpowiedzi</p>
        <h2 className="text-3xl font-black text-gray-900 text-center mb-10">Wszystko, co chcesz wiedzieć.</h2>
        <div className="divide-y divide-gray-100">
          {faqs.map((f, i) => (
            <details key={i} className="group">
              <summary className="flex items-center justify-between py-5 cursor-pointer list-none">
                <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-6">{f.q}</span>
                <span className="text-gray-400 shrink-0 text-xl group-open:rotate-45 transition-transform inline-block">+</span>
              </summary>
              <div className="pb-5">
                <p className="text-gray-500 leading-relaxed">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA — minimal */}
      <section className="px-8 py-20 text-center bg-gray-50 border-t border-gray-100">
        <h2 className="text-4xl font-black text-gray-900 mb-4">Gotowi zacząć?</h2>
        <p className="text-gray-400 mb-8">Dostęp od razu po zakupie. Bez umów.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-colors inline-flex items-center gap-2">
          Kup dostęp — 390 zł <ArrowRight className="w-5 h-5" />
        </button>
      </section>

    </div>
  );
}
