import { Gamepad2, Trophy, Zap, Star, ArrowRight, Volume2, Brain, Music } from "lucide-react";

const games = [
  { emoji: "🎵", name: "Gra dźwięków", desc: "Rozróżniaj tony i kierunki", level: "starter", color: "bg-blue-500", players: "4200+" },
  { emoji: "🧠", name: "Mapa pamięci", desc: "Zapamiętuj sekwencje dźwięków", level: "medium", color: "bg-purple-500", players: "3100+" },
  { emoji: "🎯", name: "Cel słuchowy", desc: "Wyłap sygnał w hałasie", level: "zaawansowany", color: "bg-green-500", players: "1800+" },
  { emoji: "🔤", name: "Zabawy z literkami", desc: "Mowa i słuch w jednym", level: "starter", color: "bg-orange-500", players: "2900+" },
  { emoji: "🎭", name: "Mistrz rytmu", desc: "Powtarzaj wzorce rytmiczne", level: "medium", color: "bg-pink-500", players: "2100+" },
  { emoji: "🌈", name: "Kolorowy świat", desc: "Skojarz dźwięk z kolorem", level: "starter", color: "bg-indigo-500", players: "3600+" },
];

const achievements = [
  { icon: "🥇", label: "Mistrz tygodnia" },
  { icon: "⚡", label: "Seria 7 dni" },
  { icon: "🎧", label: "Ucho Sokolika" },
  { icon: "🏆", label: "100 sesji" },
  { icon: "🌟", label: "Perfekcjonista" },
];

const levelColors: Record<string, string> = {
  starter: "bg-green-100 text-green-700",
  medium: "bg-yellow-100 text-yellow-700",
  zaawansowany: "bg-red-100 text-red-700",
};

export function Gamifikacja() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans text-white">

      {/* Nav */}
      <nav className="px-8 py-4 flex justify-between items-center border-b border-white/10 sticky top-0 bg-gray-950/90 backdrop-blur-sm z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Gamepad2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-black text-white text-lg tracking-tight">GoBrain</span>
          <span className="text-xs text-blue-400 font-medium ml-1">Trening słuchowy</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span className="hover:text-white cursor-pointer transition-colors">Programy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Wyniki</span>
          <span className="hover:text-white cursor-pointer transition-colors">Cennik</span>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-2 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-500/25">
            Zagraj za darmo →
          </button>
        </div>
      </nav>

      {/* Hero — product first */}
      <section className="px-8 pt-14 pb-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">19 gier • Dostępne od razu • Działa w przeglądarce</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-5">
            Trening słuchowy,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              który dziecko<br />samo chce robić.
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-xl mx-auto leading-relaxed mb-8">
            19 interaktywnych gier. Każda sesja 30 minut.
            Poziom trudności rośnie automatycznie — razem z umiejętnościami.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-4 rounded-2xl text-lg flex items-center gap-2 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow">
              <Gamepad2 className="w-5 h-5" /> Zagraj za darmo
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-2xl text-lg hover:bg-white/5 transition-colors">
              Zobacz cennik
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-4">Pierwsze 3 dni bez opłat · Bez karty kredytowej</p>
        </div>

        {/* Game UI mockup */}
        <div className="bg-gray-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl mb-14">
          {/* Browser bar */}
          <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 bg-gray-700 rounded-full h-6 mx-4 flex items-center justify-center">
              <span className="text-gray-400 text-xs">gobraintech.pl/gra</span>
            </div>
            <Volume2 className="w-4 h-4 text-gray-400" />
          </div>

          {/* Game interface */}
          <div className="p-6 bg-gradient-to-br from-gray-900 via-blue-950/40 to-purple-950/30">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Etap 3 / Poziom 7</p>
                <h3 className="text-white font-bold text-lg">Gra dźwięków — Sekwencje</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 bg-yellow-500/20 border border-yellow-500/30 px-3 py-1.5 rounded-full">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-yellow-300 font-bold text-sm">2 840 pkt</span>
                </div>
                <div className="flex items-center gap-1.5 bg-blue-500/20 border border-blue-500/30 px-3 py-1.5 rounded-full">
                  <Zap className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-blue-300 font-bold text-sm">Seria 12 dni</span>
                </div>
              </div>
            </div>

            {/* Game area */}
            <div className="grid grid-cols-4 gap-3 mb-5">
              {[
                { note: "Do", active: true, color: "from-blue-500 to-blue-600" },
                { note: "Re", active: false, color: "from-purple-500 to-purple-600" },
                { note: "Mi", active: true, color: "from-indigo-500 to-indigo-600" },
                { note: "Fa", active: false, color: "from-violet-500 to-violet-600" },
              ].map((n, i) => (
                <div key={i} className={`h-24 rounded-2xl bg-gradient-to-b ${n.color} flex flex-col items-center justify-end pb-3 cursor-pointer ${n.active ? "ring-2 ring-white/60 shadow-lg" : "opacity-50"}`}>
                  <Music className={`w-5 h-5 mb-1 ${n.active ? "text-white" : "text-white/50"}`} />
                  <span className={`font-black text-sm ${n.active ? "text-white" : "text-white/50"}`}>{n.note}</span>
                </div>
              ))}
            </div>

            {/* Progress */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
              <span className="text-gray-400 text-sm">67%</span>
            </div>
          </div>
        </div>

        {/* Achievement badges */}
        <div className="mb-8">
          <p className="text-center text-gray-500 text-sm mb-4 uppercase tracking-wider font-medium">Odblokowane osiągnięcia</p>
          <div className="flex justify-center gap-3 flex-wrap">
            {achievements.map((a, i) => (
              <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full border ${i < 3 ? "bg-white/10 border-white/20 text-white" : "bg-gray-900 border-gray-700 text-gray-600"}`}>
                <span>{a.icon}</span>
                <span className="text-sm font-semibold">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game catalog */}
      <section className="px-8 pb-14 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Katalog gier</p>
            <h2 className="text-2xl font-black">19 programów treningowych</h2>
          </div>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1 transition-colors">
            Zobacz wszystkie <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {games.map((g, i) => (
            <div key={i} className="bg-gray-900 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors cursor-pointer group">
              <div className={`w-10 h-10 ${g.color} rounded-xl flex items-center justify-center text-xl mb-3`}>
                {g.emoji}
              </div>
              <h3 className="font-bold text-white mb-1">{g.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{g.desc}</p>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${levelColors[g.level]}`}>
                  {g.level}
                </span>
                <span className="text-xs text-gray-600">{g.players} graczy</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
