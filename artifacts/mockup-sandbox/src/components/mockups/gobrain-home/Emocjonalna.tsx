import { Heart, CheckCircle2, Star, ArrowRight, ChevronRight } from "lucide-react";

const problems = [
  "Musi powtarzać kilka razy to samo polecenie, zanim dziecko je wykona",
  "Dziecko dobrze słyszy, ale nie zapamiętuje co miało zadane",
  "Łatwo się rozprasza na najmniejszy dźwięk w tle",
  "Nauczyciel mówi, że dziecko »nie słucha«, choć wy widzicie inne dziecko w domu",
  "Terapia logopedyczna trwa, ale efekty nie przychodzą",
];

const testimonials = [
  {
    text: "Po 6 tygodniach syn zaczął zapamiętywać zadania domowe bez przypomnienia. Nie wierzyłam, że to możliwe.",
    name: "Katarzyna W.",
    city: "Warszawa",
    initials: "KW",
    bg: "bg-amber-100",
    stars: 5,
  },
  {
    text: "Córka przestała zamykać uszy dłońmi w głośnych miejscach. Widzimy spokój, którego wcześniej nie było.",
    name: "Monika R.",
    city: "Kraków",
    initials: "MR",
    bg: "bg-rose-100",
    stars: 5,
  },
  {
    text: "Logopeda sam zapytał, co zmieniło się u Maćka. Trening GoBrain zrobił to, czego nie osiągnęliśmy przez rok.",
    name: "Tomasz B.",
    city: "Gdańsk",
    initials: "TB",
    bg: "bg-emerald-100",
    stars: 5,
  },
];

export function Emocjonalna() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">

      {/* Nav */}
      <nav className="bg-white border-b border-amber-100 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" />
          </div>
          <span className="font-black text-gray-900 text-lg tracking-tight">GoBrain</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <span className="hover:text-gray-900 cursor-pointer">Jak działa</span>
          <span className="hover:text-gray-900 cursor-pointer">Dla kogo</span>
          <span className="hover:text-gray-900 cursor-pointer">Opinie</span>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold transition-colors">
            Zacznij teraz
          </button>
        </div>
      </nav>

      {/* Hero — Problem first */}
      <section className="px-8 pt-16 pb-12 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">💛</span>
          <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">Dla rodziców, którzy szukają odpowiedzi</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
          Twoje dziecko może więcej,<br />
          <span className="text-amber-500">niż teraz pokazuje.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-10">
          Jeśli szkoła i terapia nie przynoszą efektów, problem może leżeć głębiej —
          w tym, jak mózg przetwarza dźwięki. Możemy to zmienić.
        </p>

        {/* Problem checklist */}
        <div className="bg-white rounded-3xl p-8 border border-amber-100 shadow-sm mb-10 max-w-2xl">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-5">Czy to brzmi znajomo?</p>
          <ul className="space-y-4">
            {problems.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-5 border-t border-amber-50">
            <p className="text-sm text-amber-700 font-semibold">
              Jeśli zaznaczyłeś/aś choć 2 — warto przeczytać dalej.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-colors flex items-center gap-2">
            Dowiedz się więcej <ArrowRight className="w-5 h-5" />
          </button>
          <span className="text-sm text-gray-500">Bezpłatna konsultacja dostępna</span>
        </div>
      </section>

      {/* Social proof strip */}
      <div className="bg-white border-y border-amber-100 py-5 px-8">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
          <span className="font-semibold">⭐ 4.9/5 ze <strong>5000+</strong> ocen rodziców</span>
          <span>✅ Rekomendowany przez neurologopedów</span>
          <span>🏆 Potwierdzona klinicznie skuteczność</span>
          <span>📦 Dostęp w 24h od zakupu</span>
        </div>
      </div>

      {/* Testimonials — Social proof before product */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <p className="text-sm font-bold text-amber-700 uppercase tracking-widest mb-2 text-center">Historie rodziców</p>
        <h2 className="text-3xl font-black text-gray-900 text-center mb-10 tracking-tight">
          To nie magia — to nauka.<br />
          <span className="text-amber-500">Ale efekty czuć jak cud.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-amber-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${t.bg} rounded-full flex items-center justify-center text-sm font-black text-gray-600`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solution reveal */}
      <section className="px-8 pb-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-20 -translate-y-20" />
          <div className="relative">
            <p className="text-amber-100 text-sm font-semibold uppercase tracking-widest mb-3">Rozwiązanie</p>
            <h2 className="text-3xl font-black mb-4 leading-tight">
              ITS GoBrain — Interaktywny<br />Trening Słuchowy
            </h2>
            <p className="text-amber-100 leading-relaxed max-w-xl mb-8">
              7 tygodni po 30 minut dziennie. Program dostosowuje się do możliwości twojego dziecka
              i trenuje pamięć słuchową, koncentrację i przetwarzanie dźwięków — w formie gry.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-amber-600 font-bold px-7 py-3.5 rounded-2xl hover:bg-amber-50 transition-colors flex items-center gap-2">
                Kup dostęp <ChevronRight className="w-4 h-4" />
              </button>
              <button className="border border-white/40 text-white px-7 py-3.5 rounded-2xl hover:bg-white/10 transition-colors">
                Więcej informacji
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
