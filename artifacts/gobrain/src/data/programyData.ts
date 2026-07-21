import { AUTOMATER_PRODUCTS } from "@/config/automater";

export interface Program {
  slug: string;
  title: string;
  subtitle: string;
  category: "Zabawy logopedyczne" | "Zabawy z literkami" | "Kreatywny brzdąc";
  emoji: string;
  age: string;
  pcDownload: string;
  androidDownload: string;
  automaterUrl: string;
  sections: { heading: string; content: string }[];
}

const AUTOMATER = AUTOMATER_PRODUCTS.programyEdukacyjne;

export const programs: Program[] = [
  {
    slug: "zabawy-logopedyczne-01",
    title: "Zabawy logopedyczne 01",
    subtitle: "Zestaw gier logopedycznych — ćwiczenia wspierające rozwój mowy, pamięci wzrokowej i słuchowej.",
    category: "Zabawy logopedyczne",
    emoji: "🎮",
    age: "od 3 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Logogry_01.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Logopedia_01.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Program przeznaczony jest dla dzieci w wieku przedszkolnym i wczesnoszkolnym. Wspiera stymulowanie rozwoju mowy oraz przygotowanie do nauki czytania i pisania.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Program składa się z video prezentacji, interaktywnych gier edukacyjnych oraz testów sprawdzających zdobyte umiejętności. Istotną funkcją jest dystraktor dźwiękowy, który pomaga kształtować uwagę i koncentrację dziecka oraz normalizuje wrażliwość słuchową.\n\nZestawy logopedyczne obejmują różnorodne zadania: rozwój pamięci, koncentracji, orientacji przestrzennej, liczenia oraz rozpoznawania kierunków.",
      },
      {
        heading: "Efekty treningu",
        content:
          "Regularne korzystanie z programu przynosi liczne pozytywne efekty: poprawę wymowy, poszerzenie znajomości liter, usprawnienie koncentracji i uwagi słuchowej, ćwiczenie słuchu fonematycznego oraz przygotowanie do nauki czytania i pisania.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "gloski-ciszace-01",
    title: "Zabawy logopedyczne. Głoski ciszące — zestaw I",
    subtitle: "Ćwiczenia głosek si, zi, ci, dzi — wsparcie terapii mowy dla dzieci od 3 lat.",
    category: "Zabawy logopedyczne",
    emoji: "🤫",
    age: "od 3 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Logopedia_Gloski_01.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/LogoGloski_01.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw gier logopedycznych przeznaczony dla dzieci w wieku od 3 lat. Aplikacja logopedyczna zawiera ćwiczenia wspierające prawidłowy rozwój mowy, komunikacji oraz słuchu fonematycznego.",
      },
      {
        heading: "Głoski ciszące — co to są?",
        content:
          "Głoski SI, ZI, CI, DZI to grupa dźwięków miękkich w języku polskim. Głoska SI jest artykułowana poprzez zbliżenie przedniej części języka do podniebienia miękkiego. Głoska DZI odpowiada miękkiemu dź. Głoska ZI tworzy dźwięk zbliżony do ź, a CI — do ć.\n\nGłoski te mogą występować na początku, w środku i na końcu wyrazów. Przykłady: siła, dzień, ziemia, ciepło.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Dziecko podczas zadań uczy się rozpoznawać, różnicować i wymawiać podobnie brzmiące głoski, układa je w sylaby, a następnie w wyrazy. Uczy się również rozpoznawać fazy artykulacyjne wyrazu: początek, środek i koniec.\n\nAplikacja oferuje szeroką gamę gier interaktywnych — za wykonywanie zadań dziecko zdobywa punkty i pochwały.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "gloski-ciszace-02",
    title: "Zabawy logopedyczne. Zestaw 02",
    subtitle: "Zestaw gier logopedycznych rozwijających pamięć i koncentrację — dla dzieci od 3 lat.",
    category: "Zabawy logopedyczne",
    emoji: "🤫",
    age: "od 3 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Logo_Zabawy_02.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Logopedia_02.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw gier logopedycznych rozwijających pamięć i koncentrację. Dla dzieci w wieku od 3 lat. Aplikacja zawiera ćwiczenia wspierające prawidłowy rozwój mowy i komunikacji.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Zestaw zawiera ćwiczenia kształtujące słuch fonemowy, pamięć i koncentrację. Ćwiczy zapamiętywanie sekwencji dźwięków i obrazków, rozpoznawanie i różnicowanie podobnie brzmiących głosek, sylab i wyrazów. Uczy różnicowania przedmiotów według wielkości, rozpoznawania faz artykulacyjnych oraz logicznego myślenia.",
      },
      {
        heading: "Efekty treningu",
        content:
          "Dzięki różnorodności gier program motywuje do ćwiczeń przez zabawę. Za wykonywanie zadań dziecko zdobywa punkty i pochwały, co wzbudza zainteresowanie i rozwija umiejętności.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "gloski-kr-gr",
    title: "Zabawy logopedyczne. Głoski KR i GR",
    subtitle: "Ćwiczenia głosek zwartych tylnojęzykowych i głoski drżącej — wsparcie terapii logopedycznej.",
    category: "Zabawy logopedyczne",
    emoji: "🦁",
    age: "od 3 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Logo_KR_GR.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Logo_KR_GR.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Program przeznaczony do wspierania terapii dzieci z wadami wymowy. Ma na celu urozmaicenie i uzupełnienie tradycyjnych metod terapii logopedycznej. Dla dzieci w wieku od 3 lat.",
      },
      {
        heading: "Zakres ćwiczeń",
        content:
          "Zestaw koncentruje się na rozwijaniu umiejętności rozpoznawania, różnicowania i prawidłowego wymawiania głosek zwartych tylnojęzykowych (K i G) oraz głoski drżącej przedniojęzykowej (R).\n\nĆwiczenia są zorganizowane w trzech etapach: nauka pojedynczych głosek, układanie ich w sylaby oraz budowanie wyrazów. Program uczy dzieci rozpoznawania faz artykulacyjnych wyrazów — co jest kluczowe dla prawidłowej artykulacji.",
      },
      {
        heading: "Bogaty zasób słownictwa",
        content:
          "Zestaw zawiera dużą liczbę wyrazów, co sprawia, że ćwiczenia są różnorodne i zachęcające. Program można dostosować do indywidualnych potrzeb każdego dziecka, uwzględniając różne poziomy zaawansowania w terapii.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "gloski-pr-br",
    title: "Zabawy logopedyczne. Głoski PR i BR",
    subtitle: "Ćwiczenia głosek zwartych P, B z głoską drżącą R — dla dzieci od 3 lat.",
    category: "Zabawy logopedyczne",
    emoji: "🐘",
    age: "od 3 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/GP_Gloski_PR_BR.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/PR_BR.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw gier logopedycznych przeznaczony dla dzieci w wieku od 3 lat. Program powstał z myślą o wsparciu terapii dzieci z wadami wymowy jako uzupełnienie tradycyjnej terapii logopedycznej.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Ćwiczenia dotyczą głosek zwartych tylnojęzykowych P i B z głoską drżącą przedniojęzykową R — na etapie głosek, sylab oraz wyrazów.\n\nZestaw zawiera dużą liczbę wyrazów — ćwiczenia są różnorodne i zachęcające do nauki. Dziecko uczy się rozpoznawać, różnicować i wymawiać podobnie brzmiące głoski, układa je w sylaby i wyrazy, a także rozpoznaje fazy artykulacyjne: początek, środek i koniec wyrazu.",
      },
      {
        heading: "Interaktywna nauka",
        content:
          "Aplikacja oferuje szeroką gamę gier interaktywnych. Za wykonywanie zadań dziecko zdobywa punkty i pochwały, co wzbudza zainteresowanie i motywuje do dalszej nauki.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "gloski-tr-dr",
    title: "Zabawy logopedyczne. Głoski TR i DR",
    subtitle: "Nowoczesna aplikacja wspierająca prawidłową wymowę głosek T, D i R.",
    category: "Zabawy logopedyczne",
    emoji: "🥁",
    age: "od 3 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Gloski_TR_DR.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/TR_DR.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Dla dzieci od 3 roku życia, które chcą rozwijać umiejętność prawidłowej wymowy. Program wspiera terapię dzieci z wadami wymowy jako nowoczesne uzupełnienie tradycyjnych metod.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Ćwiczenia głosek zwartych T, D i R na etapie głosek, sylab i wyrazów. Różnorodne zadania i gry interaktywne — dziecko uczy się przez zabawę. Punkty i pochwały za zadania motywują i zachęcają do nauki.",
      },
      {
        heading: "Efekty",
        content:
          "Aplikacja wspiera prawidłowy rozwój mowy, komunikacji i słuchu fonematycznego. Dzięki interaktywnej formie dziecko nie zauważa kiedy ćwiczy — jest pochłonięte zabawą.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "gloski-miekkie",
    title: "Zabawy logopedyczne. Głoski miękkie",
    subtitle: "Ćwiczenia głosek SI, CI, ZI, DZI oraz S i SZ — dla dzieci od 3 lat.",
    category: "Zabawy logopedyczne",
    emoji: "🌸",
    age: "od 3 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Logopedia_Gloski_02.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/LogoGloski_02.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw gier logopedycznych przeznaczony dla dzieci w wieku od 3 lat. Program wspiera terapię dzieci z wadami wymowy jako uzupełnienie tradycyjnej terapii logopedycznej.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Ćwiczenia dotyczą głosek miękkich: SI, CI, ZI, DZI oraz głosek S i SZ na etapie głosek, sylab oraz wyrazów. Dziecko uczy się rozpoznawać, różnicować i wymawiać podobnie brzmiące głoski, układa je w sylaby i wyrazy.",
      },
      {
        heading: "Bogaty zasób ćwiczeń",
        content:
          "Zestaw zawiera dużą liczbę wyrazów — ćwiczenia są różnorodne i zachęcające do nauki. Aplikacja oferuje szeroką gamę gier interaktywnych, za które dziecko zdobywa punkty i pochwały.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "szereg-szumiacy-sz",
    title: "Zabawy logopedyczne. Szereg szumiący — głoska SZ",
    subtitle: "Ćwiczenia szeregu szumiącego SZA, SZE, SZO, SZU, SZY na etapie sylab, wyrazów i zdań.",
    category: "Zabawy logopedyczne",
    emoji: "🐍",
    age: "od 3 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Szereg_Szumiacy_01.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Szereg_Szumiacy_01.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Program kierowany do dzieci w wieku przedszkolnym i wczesnoszkolnym. Doskonała pomoc logopedyczna polecana jako uzupełnienie terapii logopedycznej.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Ćwiczenia dotyczą szeregu szumiącego: SZA, SZE, SZO, SZU, SZY na etapie sylab, wyrazów oraz zdań. Dziecko uczy się prawidłowo wymawiać głoski, rozpoznaje je i utrwala ich znajomość.",
      },
      {
        heading: "Efekty treningu",
        content:
          "Poprawna wymowa, znajomość liter, przygotowanie do nauki płynnego czytania, usprawnienie pamięci wzrokowo-słuchowej, usprawnienie koncentracji i uwagi słuchowej, ćwiczenie słuchu fonematycznego oraz analizy i syntezy słuchowej — podstawy pisania i czytania.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "szereg-szumiacy-cz",
    title: "Zabawy logopedyczne. Szereg szumiący — głoska CZ",
    subtitle: "Ćwiczenia szeregu szumiącego CZA, CZE, CZO, CZU, CZY na etapie sylab, wyrazów i zdań.",
    category: "Zabawy logopedyczne",
    emoji: "⚡",
    age: "od 3 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Szereg_Szumiacy_CZ.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Szereg_Szumiacy_CZ.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw gier logopedycznych dla dzieci w wieku od 3 lat. Aplikacja zawiera ćwiczenia wspierające prawidłowy rozwój mowy i komunikacji oraz słuchu fonematycznego.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Ćwiczenia dotyczą szeregu szumiącego CZA, CZE, CZO, CZU, CZY na etapie sylab, wyrazów oraz zdań. Dziecko uczy się rozpoznawać i różnicować głoski, układa je w sylaby i wyrazy, dokonuje analizy i syntezy wyrazów oraz tworzy zdania.",
      },
      {
        heading: "Dlaczego warto?",
        content:
          "Program powstał z myślą o wsparciu terapii dzieci z wadami wymowy. Zestaw zawiera dużą liczbę wyrazów, dzięki czemu ćwiczenia są różnorodne i zachęcające do nauki. Interaktywne gry motywują przez system punktów i pochwał.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "szereg-szumiacy-rz",
    title: "Zabawy logopedyczne. Szereg szumiący — głoska RZ/Ż",
    subtitle: "Ćwiczenia szeregu szumiącego RZA, RZE, RZO, RZU, RZY na etapie sylab, wyrazów i zdań.",
    category: "Zabawy logopedyczne",
    emoji: "🌊",
    age: "od 3 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Szereg_Szumiacy_RzZ.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Szereg_Szumiacy_RzZ.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw gier logopedycznych przeznaczony dla dzieci w wieku od 3 lat. Program wspiera terapię dzieci z wadami wymowy jako uzupełnienie tradycyjnej terapii logopedycznej.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Ćwiczenia dotyczą szeregu szumiącego RZA, RZE, RZO, RZU, RZY na etapie sylab, wyrazów oraz zdań. Dziecko uczy się rozpoznawać, różnicować i wymawiać podobnie brzmiące głoski i sylaby, dokonuje analizy (dzieli wyraz na sylaby) i syntezy (łączy sylaby w wyraz), a następnie tworzy zdania.",
      },
      {
        heading: "Dlaczego warto?",
        content:
          "Zestaw zawiera dużą liczbę wyrazów — ćwiczenia są różnorodne i zachęcające. Interaktywne gry motywują dziecko przez system punktów i pochwał za każde wykonane zadanie.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "literki-a-o-e-u-i-y",
    title: "Zabawy z literkami. Samogłoski A O E U I Y",
    subtitle: "Nauka alfabetu z ilustracjami — gry i zabawy literowe dla dzieci od 3 do 7 lat.",
    category: "Zabawy z literkami",
    emoji: "🔤",
    age: "3–7 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Zabawy_Literki_AOUEIY.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Literki_AOUEIY.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Program stworzony z myślą o przyjemnej i skutecznej nauce literek dla dzieci w wieku od 3 do 7 lat. Doskonale przygotowuje do nauki czytania i pisania.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Zabawy z literkami zawierają naukę samogłosek A, O, E, U, I, Y — pierwszych liter alfabetu. Program uczy czym jest sylaba i jak budować wyrazy. Zabawy są tak skonstruowane, aby dziecko najpierw nauczyło się liter, a następnie sprawdziło i utrwaliło swoje umiejętności.",
      },
      {
        heading: "Normalizacja wrażliwości sluchowej",
        content:
          "Program wykorzystuje dystraktor dźwiękowy — dźwięki z otoczenia imitujące naturalne odgłosy (szum uliczny, odgłosy rozmów, przyrody). Pomaga to dzieciom z nadwrażliwością słuchową i uczy skupienia się na istotnej informacji.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "literki-t-d",
    title: "Zabawy z literkami. Spółgłoski T i D",
    subtitle: "Nauka spółgłosek przedniojęzykowo-przyzębowych T i D — gry literowe dla dzieci od 3 do 7 lat.",
    category: "Zabawy z literkami",
    emoji: "🅃",
    age: "3–7 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Literki_TD.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Literki_TD.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw zawiera gry i zabawy literowe dla dzieci w wieku od 3 do 7 lat. Aplikacja skupia się na spółgłoskach T i D (głoski przedniojęzykowo-przyzębowe).",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Program zawiera gry edukacyjne motywujące do nauki literek przez zabawę. Ćwiczenia wspierają prawidłowy rozwój mowy i komunikacji oraz przygotowują do nauki czytania i pisania.\n\nGry ćwiczą poprawną wymowę, usprawniają koncentrację i pamięć wzrokowo-słuchową. Program jest tak skonstruowany, że zawiera część edukacyjną (nauka) oraz testy sprawdzające umiejętności.",
      },
      {
        heading: "Efekty nauki",
        content:
          "Dziecko nauczy się rozpoznawać i różnicować oraz wymawiać podobnie brzmiące głoski, układa je w sylaby, a następnie w wyrazy.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "literki-p-b",
    title: "Zabawy z literkami. Spółgłoski P i B",
    subtitle: "Nauka spółgłosek P i B — gry i zabawy literowe dla dzieci od 3 do 7 lat.",
    category: "Zabawy z literkami",
    emoji: "🅿",
    age: "3–7 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Literki_PB.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Literki_PB.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw zawiera gry i zabawy literowe dla dzieci w wieku od 3 do 7 lat. Program skupia się na spółgłoskach P i B.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Program zawiera gry edukacyjne motywujące do nauki literek przez zabawę. Aplikacja składa się z ćwiczeń wspierających prawidłowy rozwój mowy i komunikacji oraz przygotowujących do nauki czytania i pisania.\n\nGry ćwiczą poprawną wymowę, usprawniają koncentrację i pamięć wzrokowo-słuchową. Dziecko uczy się rozpoznawać, różnicować i wymawiać podobnie brzmiące głoski, układa je w sylaby, a następnie w wyrazy.",
      },
      {
        heading: "Interaktywna nauka",
        content:
          "Aplikacja oferuje szeroką gamę interaktywnych gier. Za wykonywanie zadań dziecko zdobywa punkty i pochwały, co wzbudza zainteresowanie i motywuje do dalszego ćwiczenia.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "literki-m-n",
    title: "Zabawy z literkami. Literki M i N",
    subtitle: "Nauka spółgłosek M i N — gry i zabawy literowe dla dzieci od 3 do 7 lat.",
    category: "Zabawy z literkami",
    emoji: "📝",
    age: "3–7 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Literki_MN.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Literki_MN.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw zawiera gry i zabawy literowe dla dzieci w wieku od 3 do 7 lat. Program skupia się na spółgłoskach M i N.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Program zawiera gry edukacyjne motywujące do nauki literek przez zabawę. Aplikacja wspiera prawidłowy rozwój mowy i komunikacji oraz przygotowuje do nauki czytania i pisania.\n\nDziecko uczy się rozpoznawać i różnicować podobnie brzmiące głoski, układa je w sylaby i wyrazy. Gry ćwiczą poprawną wymowę oraz usprawniają koncentrację i pamięć wzrokowo-słuchową.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "literki-k-g-h",
    title: "Zabawy z literkami. Literki K, G, H",
    subtitle: "Nauka spółgłosek K, G i H — gry i zabawy literowe dla dzieci od 3 do 7 lat.",
    category: "Zabawy z literkami",
    emoji: "🔑",
    age: "3–7 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Literki_KGH.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Literki_KGH.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw zawiera gry i zabawy literowe dla dzieci w wieku od 3 do 7 lat. Program skupia się na spółgłoskach K, G i H.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Program zawiera gry edukacyjne motywujące do nauki literek przez zabawę. Aplikacja wspiera prawidłowy rozwój mowy i komunikacji oraz przygotowuje do nauki czytania i pisania.\n\nDziecko uczy się rozpoznawać i różnicować głoski K, G i H, układa je w sylaby i wyrazy. Gry ćwiczą poprawną wymowę, usprawniają koncentrację i pamięć wzrokowo-słuchową.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "literki-l-r-j",
    title: "Zabawy z literkami. Literki L, R, J",
    subtitle: "Nauka spółgłosek L, R i J — gry i zabawy literowe dla dzieci od 3 do 7 lat.",
    category: "Zabawy z literkami",
    emoji: "🌈",
    age: "3–7 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Literki_LRJ.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Literki_06_lrj.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw zawiera gry i zabawy literowe dla dzieci w wieku od 3 do 7 lat. Program skupia sie na spółgłoskach L, R i J.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Program zawiera gry edukacyjne motywujące do nauki literek przez zabawę. Ćwiczenia wspierają prawidłowy rozwój mowy i komunikacji oraz przygotowują do nauki czytania i pisania.\n\nDziecko uczy się rozpoznawać, różnicować i wymawiać głoski L, R i J, układa je w sylaby, a następnie buduje wyrazy. Gry usprawniają koncentrację i pamięć wzrokowo-słuchową.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "literki-w-f",
    title: "Zabawy z literkami. Literki W i F",
    subtitle: "Nauka spółgłosek W i F — gry i zabawy literowe dla dzieci od 3 do 7 lat.",
    category: "Zabawy z literkami",
    emoji: "🌬️",
    age: "3–7 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Literki_WF.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Literki_07_WF.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw zawiera gry i zabawy literowe dla dzieci w wieku od 3 do 7 lat. Program skupia sie na spółgłoskach W i F.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Program zawiera gry edukacyjne motywujące do nauki literek przez zabawę. Ćwiczenia wspierają prawidłowy rozwój mowy i komunikacji oraz przygotowują do nauki czytania i pisania.\n\nDziecko uczy się rozpoznawać, różnicować i wymawiać spółgłoski W i F, układa je w sylaby i wyrazy. Gry usprawniają koncentrację i pamięć wzrokowo-słuchową.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "literki-c-s-z",
    title: "Zabawy z literkami. Literki C, S, Z",
    subtitle: "Nauka spółgłosek C, S i Z — gry i zabawy literowe dla dzieci od 3 do 7 lat.",
    category: "Zabawy z literkami",
    emoji: "✨",
    age: "3–7 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Literki_CSZ.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Zabawy_Literki_CSZ.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw zawiera gry i zabawy literowe dla dzieci w wieku od 3 do 7 lat. Program skupia sie na spółgłoskach C, S i Z.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Program zawiera gry edukacyjne motywujące do nauki literek przez zabawę. Ćwiczenia wspierają prawidłowy rozwój mowy i komunikacji oraz przygotowują do nauki czytania i pisania.\n\nDziecko uczy się rozpoznawać, różnicować i wymawiać spółgłoski C, S i Z, układa je w sylaby i wyrazy. Gry usprawniają koncentrację i pamięć wzrokowo-słuchową.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "kreatywny-brzdac-01",
    title: "Kreatywny brzdąc — zestaw I",
    subtitle: "Zestaw gier logicznych rozwijających pamięc i koncentrację — dla dzieci od 3 do 7 lat.",
    category: "Kreatywny brzdąc",
    emoji: "🎨",
    age: "3–7 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Kreatywny_Brzdac_01.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Brzdac_01.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Program kierowany do dzieci w wieku przedszkolnym i wczesnoszkolnym. Zestaw gier logicznych rozwijających pamiec i koncentrację. Dla dzieci od 3 do 7 lat.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Program z tej serii to wybór gier edukacyjnych motywujących do treningu mózgu poprzez konwencję zabawy. Nasza aplikacja stymuluje rozwój i potencjał dziecka.\n\nDziecko nauczy sie koncentrować na zadaniu, poprawi pamiec (w tym pamiec sekwencyjną), nauczy sie nazw kolorów i kształtów, umiejetności segregowania przedmiotów według kategorii, rozpoznawania odgłosów zwierząt oraz dopasowywania przedmiotów w pary.",
      },
      {
        heading: "Trening mózgu przez zabawę",
        content:
          "Aplikacja oferuje szeroką gamę gier interaktywnych. Za wykonywanie zadań dziecko zdobywa punkty i pochwały, co wzbudza zainteresowanie i motywuje do dalszej nauki.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "kreatywny-brzdac-02",
    title: "Kreatywny brzdąc — zestaw II",
    subtitle: "Gry logiczne z nauką kolorów, zegara i klasyfikacji — dla dzieci od 3 do 7 lat.",
    category: "Kreatywny brzdąc",
    emoji: "🎨",
    age: "3–7 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Kreatywny_Brzdac_02.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Brzdac_02.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw zawiera gry logiczne rozwijające pamiec i koncentrację. Dla dzieci w wieku od 3 do 7 lat.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Program z tej serii to wybór gier edukacyjnych motywujących do treningu mózgu poprzez konwencję zabawy. Nasza aplikacja stymuluje rozwój i potencjał dziecka.\n\nDziecko dowie sie czym mierzymy prędkość, masę, długość i temperaturę, nauczy sie klasyfikować zwierzęta według tego co jedzą, jak wyglądają i gdzie mieszkają, nabedzie umiejetności posługiwania sie zegarem, pozna kolory i nauczy sie je rozróżniać, a także dopasowywać przedmioty w pary.",
      },
      {
        heading: "Trening mózgu przez zabawę",
        content:
          "Aplikacja oferuje szeroką gamę gier interaktywnych. Za wykonywanie zadań dziecko zdobywa punkty i pochwały, co wzbudza zainteresowanie i motywuje do dalszej nauki.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "pamiec-i-koncentracja-01",
    title: "Pamiec i koncentracja — zestaw I",
    subtitle: "Gry rozwijające pamiec sekwencyjną, logiczne myślenie i koncentrację — od 3 lat.",
    category: "Kreatywny brzdąc",
    emoji: "🧠",
    age: "od 3 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Pamiac_01.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/pamiac_01.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw zawiera gry logiczne rozwijające pamiec i koncentrację. Dla dzieci w wieku od 3 do 7 lat.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Program z tej serii to wybór gier edukacyjnych motywujących do treningu mózgu poprzez konwencję zabawy. Nasza aplikacja stymuluje rozwój i potencjał dziecka.\n\nDziecko nauczy sie koncentrować na zadaniu i poprawi pamiec (w tym pamiec sekwencyjną). Bedzie tworzyć obrazki według wzoru, zapamietywać i rozpoznawać dźwięki pojazdów, zwierząt i instrumentów, dopasowywać przedmioty według kategorii i funkcjonalności oraz uczyć sie logicznego myślenia i analizowania.",
      },
      {
        heading: "Trening mózgu przez zabawę",
        content:
          "Aplikacja oferuje szeroką gamę interaktywnych gier. Za wykonywanie zadań dziecko zdobywa punkty i pochwały, co wzbudza zainteresowanie i motywuje do dalszej nauki.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
  {
    slug: "mala-matematyka-01",
    title: "Mała matematyka — zestaw I",
    subtitle: "Nauka dodawania, odejmowania i mnożenia w formie zabawy — dla dzieci od 5 lat.",
    category: "Kreatywny brzdąc",
    emoji: "🔢",
    age: "od 5 lat",
    pcDownload: "https://gobraintech.pl/current/Sklep_PC/Matematyka_01.msi",
    androidDownload: "https://gobraintech.pl/current/Sklep_Android/Matematyka_01.apk",
    automaterUrl: AUTOMATER,
    sections: [
      {
        heading: "Dla kogo?",
        content:
          "Zestaw gier matematycznych przeznaczony dla dzieci od 5 roku życia, które chcą rozwijać umiejetności matematyczne i logiczne.",
      },
      {
        heading: "Co zawiera program?",
        content:
          "Gry matematyczne i logiczne rozwijające pamiec i koncentrację. Dodawanie, odejmowanie i mnożenie (zakres do 20, mnożenie przez 9 do 90) w przyjaznej formie. Nauka cyfr, zegara i logicznego myślenia przez praktyczne ćwiczenia.",
      },
      {
        heading: "Dlaczego warto?",
        content:
          "Program motywuje do nauki przez zabawę i system punktów i pochwał. Aplikacja stymuluje rozwój potencjału matematycznego dziecka, łącząc edukację z angażującą mechaniką gry.",
      },
      {
        heading: "Twórca",
        content:
          "Program jest efektem wieloletniej pracy i doświadczenia stworzony przez neurologopedę, surdologopedę, pedagoga oraz doktorantkę Warszawskiego Uniwersytetu Medycznego — Anetę Pakieła.",
      },
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export const programsByCategory = {
  logopedyczne: programs.filter((p) => p.category === "Zabawy logopedyczne"),
  literkami: programs.filter((p) => p.category === "Zabawy z literkami"),
  brzdac: programs.filter((p) => p.category === "Kreatywny brzdąc"),
};
