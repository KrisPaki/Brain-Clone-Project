import { useState } from "react";
import { Star, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar?: string;
}

export const allReviews: Review[] = [
  { name: "Katarzyna W.",   role: "Mama 7-latka",                         rating: 5, text: "Po 3 miesiącach syn zaczął skupiać się na lekcjach. Niesamowita zmiana — nauczyciele sami pytali co się stało. Polecam każdemu rodzicowi." },
  { name: "Magdalena K.",   role: "Mama 9-latki",                         rating: 5, text: "Córka uwielbia te ćwiczenia! A co ważniejsze — nauczycielka w szkole sama zwróciła uwagę na poprawę koncentracji i rozumienia poleceń." },
  { name: "Joanna M.",      role: "Logopeda, Warszawa",                   rating: 5, text: "Platforma Terapeuta ułatwiła mi pracę z dziećmi z CAPD. Bardzo czytelne raporty i łatwy dostęp do wyników. Rodzicom łatwiej wyjaśnić postępy." },
  { name: "Anna B.",        role: "Mama 6-latka",                         rating: 5, text: "Już po pierwszym miesiącu widać różnicę w rozumieniu poleceń. Synek nie prosi o powtarzanie — sam rozumie za pierwszym razem." },
  { name: "Ewa K.",         role: "Pedagog specjalny, Kraków",            rating: 5, text: "Nieocenione narzędzie w pracy z dziećmi z dysleksją i ADHD. Widzę realny postęp już po kilku tygodniach systematycznej pracy." },
  { name: "Piotr M.",       role: "Tata 8-latka",                        rating: 5, text: "Syn przestał prosić o powtarzanie instrukcji. Zdumiewające — przez całe życie myślałem, że po prostu nie słucha. Okazało się że problem był głębszy." },
  { name: "Monika G.",      role: "Logopeda, Wrocław",                   rating: 5, text: "Raporty pre/post są przekonującym dowodem efektów dla rodziców. To ogromna pomoc w motywowaniu do kontynuowania terapii." },
  { name: "Joanna L.",      role: "Mama 5-latki",                        rating: 5, text: "GoBrain to najlepsza inwestycja jaką zrobiliśmy dla córki. Polecam wszystkim rodzicom którzy zmagają się z opóźnieniem mowy lub słuchu." },
  { name: "Marta R.",       role: "Mama 10-latka",                       rating: 5, text: "Wyniki w szkole poszły w górę — oceny z polskiego i angielskiego poprawiły się o cały stopień w ciągu semestru. Jestem pod wrażeniem." },
  { name: "Beata W.",       role: "Psycholog dziecięcy, Gdańsk",         rating: 5, text: "Doskonałe narzędzie diagnostyczne i terapeutyczne. Polecam wszystkim kolegom po fachu — to coś czego brakowało na polskim rynku." },
  { name: "Krzysztof S.",   role: "Tata bliźniaków (7 lat)",             rating: 5, text: "Oboje synów robi trening i oboje robią postępy. Starszy miał problemy z dysleksją — teraz czyta płynnie. Młodszy poprawił koncentrację." },
  { name: "Natalia P.",     role: "Nauczycielka, szkoła podstawowa",     rating: 5, text: "Klasa jest bardziej skupiona odkąd kilkoro dzieci korzysta z GoBrain. Naprawdę widać różnicę w pracy grupowej i reakcji na polecenia." },
  { name: "Agnieszka T.",   role: "Mama 8-latki",                        rating: 5, text: "Dziecko chętnie siada do ćwiczeń bez przypominania — to największa zaleta. Żaden inny program tego nie osiągnął." },
  { name: "Olga F.",        role: "Mama 7-latka (ADHD)",                 rating: 5, text: "Największa poprawa: syn siedzi spokojnie przez 20 minut. Dla nas to absolutny przełom. Polecam rodzicom dzieci z ADHD." },
  { name: "Dorota S.",      role: "Wychowawca przedszkolny, Poznań",     rating: 5, text: "Ćwiczenia są tak atrakcyjne wizualnie i dźwiękowo, że dzieci traktują je jak zabawę. Nikt nie protestuje gdy przychodzi czas na GoBrain." },
  { name: "Robert K.",      role: "Tata 6-latki (opóźnienie mowy)",      rating: 5, text: "Córka zaczęła wymawiać głoski których nie umiała od urodzenia. Wzruszające jak obserwować ten postęp tydzień po tygodniu." },
  { name: "Sylwia M.",      role: "Mama 11-latka (dysleksja)",           rating: 5, text: "Czytanie poprawiło się o dwa poziomy w ciągu semestru. Biblioterapia i GoBrain razem dały nam niesamowite efekty." },
  { name: "Halina D.",      role: "Babcia 9-latka",                      rating: 5, text: "Wnuczek robi ćwiczenia codziennie bez przypominania! Ja sama podsłuchuję zadania i uważam, że są naprawdę dobrze zaprojektowane." },
  { name: "Łukasz N.",      role: "Tata 8-latka",                        rating: 5, text: "Gry audio są rewelacyjne. Dzieciak gra dobrowolnie przez pół godziny. A przy okazji ćwiczy słuch i koncentrację — idealne połączenie." },
  { name: "Karolina P.",    role: "Mama 9-latka",                        rating: 5, text: "Pierwszy program terapeutyczny który naprawdę działa dla nas. Wcześniej próbowaliśmy kilku innych — żaden nie dawał tak szybkich efektów." },
  { name: "Tomasz W.",      role: "Tata 7-latka (APD)",                  rating: 5, text: "Syn ma stwierdzone APD. GoBrain to jedyne narzędzie które dosłownie zmienia jego codzienne funkcjonowanie. Polecam z czystym sumieniem." },
  { name: "Izabela C.",     role: "Logopeda i surdopedagog, Łódź",       rating: 5, text: "Używam GoBrain w pracy od ponad roku. Wyniki mówią same za siebie — każdy mój pacjent robi mierzalne postępy. Niezastąpione narzędzie." },
];

const row1 = allReviews.slice(0, 11);
const row2 = allReviews.slice(11);

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const initials = review.name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  const hue = review.name.charCodeAt(0) * 7 % 360;

  return (
    <div
      className="flex-shrink-0 w-80 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col gap-3 select-none"
    >
      <div className="flex items-start justify-between gap-2">
        <StarRating rating={review.rating} />
        <span className="text-[10px] text-gray-300 font-medium">✓ Zweryfikowana</span>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed flex-1">
        {'\u201E'}{review.text}{'\u201D'}
      </p>
      <div className="flex items-center gap-3 pt-1 border-t border-gray-50">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
          style={{ backgroundColor: `hsl(${hue}, 55%, 52%)` }}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 leading-none">{review.name}</p>
          <p className="text-xs text-gray-500 mt-0.5">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ reviews, reverse = false, speed = 40 }: { reviews: Review[]; reverse?: boolean; speed?: number }) {
  const [paused, setPaused] = useState(false);
  const doubled = [...reviews, ...reviews];
  const animName = reverse ? "marquee-right" : "marquee-left";

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-4"
        style={{
          width: "max-content",
          animation: `${animName} ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}

interface ReviewsCarouselProps {
  title?: string;
  subtitle?: string;
  showBadge?: boolean;
}

export default function ReviewsCarousel({
  title = "Co mówią rodzice i terapeuci?",
  subtitle = "Ponad 5 000 zadowolonych rodzin i setek terapeutów w całej Polsce.",
  showBadge = true,
}: ReviewsCarouselProps) {
  return (
    <section className="py-20 bg-[#f7f9fc] border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          {showBadge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm font-medium mb-4">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              4.9 / 5.0
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">{subtitle}</p>
        </motion.div>
      </div>

      <div className="space-y-4">
        <MarqueeRow reviews={row1} reverse={false} speed={45} />
        <MarqueeRow reviews={row2} reverse={true}  speed={38} />
      </div>
    </section>
  );
}
