import { Award, BarChart2, BookOpen, ChevronRight, TrendingUp, CheckCircle2, Users } from "lucide-react";

const stats = [
  { value: "87%", label: "dzieci poprawiło wyniki testów słuchowych po 7 tygodniach", color: "text-blue-600" },
  { value: "5000+", label: "przebadanych dzieci w Polsce i za granicą", color: "text-indigo-600" },
  { value: "98%", label: "rodziców i terapeutów ocenia efekty jako widoczne", color: "text-violet-600" },
];

const timeline = [
  { year: "2009", event: "Opracowanie metody ITS GoBrain przez dr Anetę Pakieła, WUM" },
  { year: "2014", event: "Pierwsze badania kliniczne z udziałem 200 dzieci z CAPD" },
  { year: "2018", event: "Rekomendacja Prof. dr hab. T. Gałkowskiego, UMCS Lublin" },
  { year: "2021", event: "Publikacja w recenzowanym czasopiśmie neurologopedycznym" },
  { year: "2024", event: "5000+ dzieci przeszło trening — wyniki dokumentowane przez terapeutów" },
];

const methodology = [
  { icon: "🧠", title: "Neuroplastyczność", desc: "Trening aktywnie kształtuje ścieżki nerwowe odpowiedzialne za przetwarzanie słuchowe" },
  { icon: "🎯", title: "Adaptacyjny poziom trudności", desc: "Algorytm w czasie rzeczywistym dopasowuje zadania do aktualnych możliwości dziecka" },
  { icon: "📊", title: "Pomiar postępu", desc: "Terapeuta i rodzic śledzą dane liczbowe — nie subiektywne wrażenia" },
  { icon: "🔬", title: "Diagnoza + terapia", desc: "Program integruje diagnostykę CAPD z treningiem w jednym narzędziu" },
];

export function Naukowa() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Nav */}
      <nav className="border-b border-gray-100 px-8 py-4 flex justify-between items-center sticky top-0 z-50 bg-white">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-indigo-700 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="font-black text-gray-900 tracking-tight">GoBrain</span>
          <span className="text-xs font-medium text-gray-400 ml-1 border border-gray-200 px-2 py-0.5 rounded-full">Metoda ITS</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <span className="cursor-pointer hover:text-indigo-600">Metodologia</span>
          <span className="cursor-pointer hover:text-indigo-600">Badania</span>
          <span className="cursor-pointer hover:text-indigo-600">Dla terapeutów</span>
          <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-5 py-2 rounded font-semibold transition-colors text-sm">
            Zamów dostęp
          </button>
        </div>
      </nav>

      {/* Expert hero — authority first */}
      <section className="bg-gradient-to-b from-indigo-950 to-indigo-900 text-white px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
              <Award className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Potwierdzone klinicznie</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
              <Users className="w-3.5 h-3.5 text-blue-300" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Rekomendacja ekspertów</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-12 items-start">
            <div className="col-span-2">
              <h1 className="text-5xl font-black leading-tight mb-5 tracking-tight">
                Centralny układ nerwowy<br />
                <span className="text-blue-300">można wytrenować.</span><br />
                Mamy na to dowody.
              </h1>
              <p className="text-indigo-200 text-lg leading-relaxed max-w-xl">
                ITS GoBrain to jedyna metoda w Polsce łącząca diagnostykę centralnych zaburzeń
                przetwarzania słuchowego (CAPD) z adaptacyjnym treningiem neuroplastycznym — potwierdzona badaniami klinicznymi.
              </p>
            </div>

            {/* Expert quote box */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-full bg-indigo-400/20 flex items-center justify-center text-2xl mb-3">👨‍🏫</div>
              <blockquote className="text-indigo-100 text-sm leading-relaxed italic mb-4">
                "GoBrain wyróżnia się spośród dostępnych metod możliwością precyzyjnego monitorowania
                postępów terapeutycznych. Rekomenduje ją jako uzupełnienie tradycyjnej terapii."
              </blockquote>
              <div>
                <p className="text-white font-bold text-sm">Prof. dr hab. Tadeusz Gałkowski</p>
                <p className="text-indigo-300 text-xs">UMCS Lublin · Neurolog i logopeda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — data first */}
      <section className="bg-indigo-50 py-12 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-indigo-100 shadow-sm">
              <p className={`text-4xl font-black mb-2 ${s.color}`}>{s.value}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-8 py-14 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          <p className="text-sm font-bold text-indigo-700 uppercase tracking-widest">Historia badań</p>
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-8">15 lat badań. Jeden cel.</h2>
        <div className="relative">
          <div className="absolute left-16 top-0 bottom-0 w-px bg-indigo-100" />
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="w-32 shrink-0 text-right">
                  <span className="text-sm font-black text-indigo-600">{t.year}</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1 shrink-0 relative z-10" />
                <p className="text-gray-700 text-sm leading-relaxed">{t.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology grid */}
      <section className="px-8 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <BarChart2 className="w-5 h-5 text-indigo-600" />
            <p className="text-sm font-bold text-indigo-700 uppercase tracking-widest">Metodologia</p>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-8">Co odróżnia GoBrain od innych?</h2>
          <div className="grid grid-cols-2 gap-5">
            {methodology.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 flex gap-4 items-start">
                <span className="text-2xl">{m.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-4">
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-7 py-3.5 rounded-lg transition-colors flex items-center gap-2">
              Kup licencję <ChevronRight className="w-4 h-4" />
            </button>
            <button className="border border-indigo-200 text-indigo-700 px-7 py-3.5 rounded-lg hover:bg-indigo-50 transition-colors font-medium">
              Pobierz pełną dokumentację
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
