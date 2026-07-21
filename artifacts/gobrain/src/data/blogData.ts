export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  modifiedAt?: string;
  category: string;
  categoryColor: string;
  author: string;
  content: string;
  pdfUrl?: string;
  externalUrl?: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "prasa-why-story-2021",
    title: "Przeczytajcie o nas w prasie #2",
    excerpt: "Nasza metoda oraz historia rozwoju GoBrain została opisana w czasopiśmie Why Story nr 1/2021.",
    date: "10 lipca 2023",
    publishedAt: "2023-07-10",
    category: "Prasa",
    categoryColor: "bg-blue-100 text-blue-700",
    author: "Aneta Pakieła",
    pdfUrl: "https://gobrain.pl/wp-content/uploads/2021/08/2021_WHY_GoBrain4-1.pdf",
    content: `Nasza metoda oraz historia rozwoju GoBrain została opisana w czasopiśmie **Why Story nr 1/2021**, w artykule „Czas na nowe wyzwania z GoBrain" autorstwa Piotra Góralczyka i Beaty Sekuły. Poniżej cytujemy fragmenty publikacji.

> Każdy dzień stawia przed nami nowe wyzwania. Zastanawiając się jak w obecnej sytuacji skupić się na tym, co pozytywne, możemy spróbować wykorzystać ten czas na stymulację naszych dzieci. Według szacunków specjalistów problem z nieprawidłowym przetwarzaniem słuchowym dotyczy około 15-20 proc. dzieci w wieku szkolnym, co powoduje nie tylko ograniczenie ich szans rozwojowych, ale utrudnia też kontakty z rówieśnikami. Jest to wciąż mało znana jednostka zaburzeń, która bardzo często współwystępuje u dzieci z dysleksją i zaburzeniami mowy w tym w przebiegu autyzmu.

## GoBrain – nauka przez zabawę

> Gobrain jest metodą należącą do treningów aktywnych, takich jak np. Warnke. Interaktywny Trening Słuchowy ITS GoBrain to niezwykle efektywny trening wpływający na prawidłowe przetwarzanie bodźców słuchowych, a tym samym na koncentrację i pamięć słuchową. Jego głównym założeniem jest aktywizacja struktur mózgowych, pobudzenie ciekawości dzieci, dzięki zastosowaniu nowoczesnych metod multimedialnych i audiowizualnych. Oferta Gobrain jest konkurencyjna w stosunku do drogich terapii słuchowych.

Program GoBrain to efekt działań specjalistów z wielu dziedzin — połączenie doświadczenia i wiedzy merytorycznej poradni LogoMedic Anety Pakieły z pasją informatyczną i wiedzą o nowoczesnych technologiach firmy DGD Rafała Sadowskiego.

## GoBrain a nadwrażliwość słuchowa

> Co może oznaczać zatykanie przez dzieci uszu w reakcji na stosunkowo normalne dźwięki z otoczenia? Jest to objaw nadwrażliwości słuchowej. Występuje w różnym nasileniu, a w przypadku dzieci z autyzmem często utrudnia im normalne funkcjonowanie. Gobrain zawiera unikatową funkcję normalizacji nadwrażliwości słuchowej. Zastosowanie tej i innych funkcji tj. stymulacji lewej półkuli czyni z ITS Gobrain skuteczne narzędzie terapeutyczne.

## Słyszy, ale nie słucha i nie pamięta

> Gdy mówimy do dziecka, a ono nie odpowiada lub trzeba mu powtarzać po kilka razy polecenie, zastanawiamy się, czy ono dobrze słyszy, a przecież jednocześnie najdrobniejszy szmer potrafi je zdekoncentrować w trakcie odrabiania lekcji. Takie dziecko nie pamięta co miało zadane i co było na lekcjach. Poprawa odbioru dźwięków wpływa na odciążenie układu nerwowego, który dzięki temu sprawniej funkcjonuje, a przede wszystkim lepiej zapamiętuje, ponieważ nie zużywa tyle energii na odkodowanie odbieranych informacji.

## Autorka metody

Poradnią LogoMedic kieruje **Aneta Pakieła**, doktorantka Warszawskiego Uniwersytetu Medycznego, wieloletnia prezes Polskiego Towarzystwa Neurologopedów, członek zarządu Polskiego Komitetu Audiofonologii, prezes Fundacji „Usłysz marzenia", neurologopeda i surdologopeda, specjalistka w leczeniu zaburzeń mowy dzieci z wadą słuchu. Aneta Pakieła należy także do elitarnego grona Kobiet Charyzmatycznych.

Fundacja „Usłysz marzenia" powstała kilkanaście lat temu, rozpoczynając działalność od zbiórki pieniędzy na zakup kosztownego aparatu słuchowego dla niemówiącego chłopca z porażeniem dziecięcym — dziś zdrowego, mówiącego młodego mężczyzny realizującego swoje marzenia. Fundacja objęła też patronat nad Ogólnopolskim Projektem Badań „Trening czyni mistrza", obejmującym szkolenie terapeutów oraz bezpłatny dostęp do treningu GoBrain dla dzieci z całej Polski.

Zapraszamy do zapoznania się z pełnym artykułem — plik PDF dostępny pod poniższym linkiem.`,
  },
  {
    slug: "prasa-artykul-naukowy",
    title: "Przeczytajcie o nas w prasie #1",
    excerpt: "Metoda ITS GoBrain obok innych treningów słuchowych takich jak Tomatis, Johansen jest opisana w artykule naukowym o centralnych zaburzeniach przetwarzania słuchowego.",
    date: "10 lipca 2023",
    publishedAt: "2023-07-10",
    category: "Nauka",
    categoryColor: "bg-purple-100 text-purple-700",
    author: "Aneta Pakieła",
    externalUrl: "https://journals.indexcopernicus.com/api/file/viewByFileId/557012.pdf",
    content: `Metoda ITS GoBrain obok innych treningów słuchowych takich jak Tomatis, Johansen jest opisana w artykule naukowym **„Centralne zaburzenia przetwarzania słuchowego – aktualne możliwości terapii dostępne w Polsce"** autorstwa Anny Kruczyńskiej-Werner z UMCS w Lublinie, Zakładu Logopedii i Językoznawstwa Stosowanego. Poniżej cytujemy fragment dotyczący metody GoBrain.

## GoBrain – Zabawa z dźwiękami

> GoBrain Fast Learning & Fun (zabawa z dźwiękami) to także interaktywny trening słuchowy. Zalecany do pracy z dziećmi w wieku 5–12 lat. Diagnoza obejmuje wywiad z rodzicami, kwestionariusz dotyczący słyszenia, badanie lateralizacji oraz test oceniający słuch fonemowy, pamięć słuchową, przetwarzanie słuchowe (w zakresie różnicowania cech dźwięków). Ćwiczenia odbywają się minimum trzy razy w tygodniu ok. 30 minut dziennie (najlepiej ćwiczyć codziennie). Trening odbywa się w słuchawkach nausznych. Terapia, w zależności od wyników pacjenta (powtórne wykonanie testów z diagnozy), może trwać od 3 do 8 tygodni. Każdy etap to 20 sesji treningowych. Program dostosowuje poziom trudności zadań do aktualnych możliwości pacjenta. GoBrain wykorzystywany jest jako wsparcie terapii, np. logopedycznej.

## Czym są centralne zaburzenia przetwarzania słuchowego (CAPD)?

> Centralne zaburzenia przetwarzania słuchowego są to nieprawidłowości w przetwarzaniu słuchowym na poziomie neuronalnym. Nie wynikają one z zaburzeń poznawczych i językowych, choć często z nimi współwystępują.

Autorka podkreśla istotne rozróżnienie między słyszeniem a słuchaniem: słyszenie jest procesem biernym, zależnym od stanu narządu słuchu, natomiast słuchanie to aktywna umiejętność koncentrowania się na dźwięku, interesowania się nim i świadomego jego percypowania.

Wśród treningów słuchowych dostępnych obecnie w Polsce artykuł wymienia metodę Tomatisa, Indywidualną Stymulację Słuchu K. Johansena (IAS), Metodę Warnkego, SPPS (Stymulację Polimodalnej Percepcji Sensorycznej), Neuroflow oraz GoBrain — zabawę z dźwiękami.

Zachęcamy do zapoznania się z pełnym materiałem na str. 243.`,
  },
  {
    slug: "czym-sa-zaburzenia-capd",
    title: "Czym są zaburzenia przetwarzania słuchowego na poziomie centralnym (CAPD)?",
    excerpt: "Czy dziecko, które słyszy najdrobniejszy szmer może mieć zaburzenia przetwarzania słuchowego? Z różnych przyczyn proces nauki słuchania nie przebiega prawidłowo — mózg skupia się na nieistotnych bodźcach.",
    date: "10 lipca 2023",
    publishedAt: "2023-07-10",
    category: "CAPD",
    categoryColor: "bg-green-100 text-green-700",
    author: "Aneta Pakieła",
    content: `## Czy dziecko, które słyszy najdrobniejszy szmer może mieć zaburzenia przetwarzania słuchowego?

Z różnych przyczyn proces nauki słuchania nie przebiega prawidłowo — mózg skupia się na nieistotnych dźwiękach: nadwrażliwość, co pociąga za sobą podatność na rozproszenie, a ignoruje dźwięki istotne — niedowrażliwość słuchowa, co skutkuje problemem z ich właściwym, szybkim przetwarzaniem.

W sytuacji odbioru niewielkiej ilości informacji słuchowych dziecko nie ma problemów, lecz gdy dobiega ich zbyt dużo, powoduje to przeciążenie — między innymi z powodu braku właściwej selekcji dźwięków i niewłaściwego przetwarzania słuchowego.

## Jak przetwarzanie słuchowe wpływa na problemy z koncentracją i pamięcią?

Mózg w sytuacji nieefektywnego odbioru i przetwarzania informacji słuchowych zużywa czas i energię na przetworzenie i rozpoznawanie bodźców, co skutkuje problemami z ich zapamiętaniem — a to z kolei przeciąża układ nerwowy, wpływając negatywnie na koncentrację.

## Skutki zaburzeń przetwarzania słuchowego (CAPD)

Zaburzenia przetwarzania słuchowego — pomimo prawidłowego słuchu obwodowego — skutkują niewłaściwą organizacją informacji słuchowych, która objawia się **zaburzeniami koncentracji, uwagi, pamięci słuchowej.** W efekcie dziecko może być wycofane, nieśmiałe lub wręcz odwrotnie — głośne, drażliwe i „niegrzeczne" w zależności od osobowości i kondycji układu nerwowego.

Pomimo starań może mieć duże **problemy z nauką czytania i pisania — pomimo znajomości liter ma kłopot ze zrozumieniem odczytanego tekstu.** Często zapomina co było zadane, **ma problemy z organizacją i dokończeniem zadań, ze zrozumieniem dłuższych poleceń.** Dziecko sprawia wrażenie jakby słyszało, ale nie słuchało.

Mózg na rozpoznanie dźwięków mowy ma znacznie krótszy czas niż na pozostałe dźwięki — stąd zaburzenia przetwarzania słuchowego mogą pociągać za sobą problemy z rozwojem mowy i być przyczyną braku efektów terapii logopedycznej.

## Co może sugerować występowanie CAPD?

Szczególnie narażone na CAPD są dzieci, które w przeszłości miały częste infekcje kataralne lub przerost trzeciego migdałka gardłowego, stany zapalne uszu czy długotrwały stres, np. pobyt w szpitalu.

Negatywne skutki mogą utrzymywać się pomimo wyleczenia. Warto w takiej sytuacji skonsultować się z terapeutą specjalizującym się w zaburzeniach przetwarzania słuchowego.

## Jak GoBrain pomaga?

Interaktywny Trening Słuchowy ITS GoBrain „Zabawy z Dźwiękami" jest programem stworzonym specjalnie z myślą o dzieciach z trudnościami w przetwarzaniu słuchowym. Ćwiczenia zawarte w programie trenują uwagę słuchową, pamięć i koncentrację w formie angażującej gry — tak, aby nauka była przyjemna i skuteczna.`,
  },
  {
    slug: "capd-dobrze-slyszy-zle-przetwarza",
    title: "Centralne zaburzenia przetwarzania słuchowego (CAPD) — dobrze słyszy, ale źle przetwarza dźwięki",
    excerpt: "Ale jak to? — zapyta większość z nas. Zazwyczaj, gdy mamy podejrzenia problemów ze słuchem, od razu myślimy, że coś niedobrego dzieje się z uchem. Tymczasem CAPD to problem zupełnie innej natury.",
    date: "26 listopada 2020",
    publishedAt: "2020-11-26",
    category: "CAPD",
    categoryColor: "bg-green-100 text-green-700",
    author: "Aneta Pakieła",
    content: `„Ale jak to?" — zapyta większość z nas. Zazwyczaj, gdy mamy podejrzenia problemów ze słuchem, od razu myślimy, że coś niedobrego dzieje się z uchem. W przypadku CAPD problem leży dużo głębiej, a mianowicie w układzie nerwowym.

## Jak układ nerwowy wpływa na to jak słyszymy?

Droga słuchowa, przez którą przechodzi impuls elektryczny, zawiera informacje o dźwięku, który dotarł do naszego ucha. Droga ta prowadzi do kory słuchowej, która na różnych poziomach odkodowuje tę informację, scalając ją później z innymi informacjami.

CAPD to nieprawidłowości w przetwarzaniu dźwięków na poziomie neuronalnym, nie wynikające z zaburzeń funkcji poznawczych. Występuje problem z przetwarzaniem wielu sygnałów na raz. Oznacza to, że układ nerwowy u osoby z CAPD działa nieoptymalnie i jest przeciążony.

## Jak CAPD wpływa na codzienne życie?

Przekładając biologiczne zjawiska na codzienne życie — osoba z CAPD czuje się zmęczona i rozdrażniona. Znacznie lepiej funkcjonuje w cichym pomieszczeniu, współpracując tylko z jedną osobą. Często wykonywanie zadań w otoczeniu, w którym jest wiele bodźców — nawet cichych — sprawia dużo problemów. Proces słuchania przebiega wadliwie, co pociąga za sobą również trudności w koncentracji i zapamiętywaniu. Dziecko łatwo się rozprasza i reaguje nieadekwatnie nawet na ciche dźwięki.

CAPD jest zaburzeniem występującym stosunkowo często, a niestety rzadko diagnozowanym. Jeśli podejrzewasz u swojego dziecka problemy ze słuchaniem, warto oprócz lekarza zgłosić się także do wykwalifikowanego terapeuty w tej dziedzinie.

## Efekty zastosowania treningu słuchowego

Z obserwacji klinicznych wynika, że stosowanie treningu słuchowego przynosi następujące efekty:

- Wyciszenie emocjonalne
- Wydłużenie czasu uwagi
- Poprawa pamięci słuchowej
- Optymalny poziom koncentracji
- Właściwa autokontrola słuchowa — lepsza wymowa
- Poprawa wyników w nauce

Zastosowanie odpowiedniej terapii — przypominającej grę komputerową — pozwala osiągnąć bardzo dobre efekty w stosunkowo krótkim czasie.`,
  },
  {
    slug: "szkola-podstawowa-z-gobrain",
    title: "Przez szkołę podstawową z GoBrain!",
    excerpt: "Wiek, kiedy twoje dziecko idzie do szkoły jest bardzo wyjątkowym momentem w jego życiu. Wtedy właśnie zaczyna się uczyć wielu nowych rzeczy, nie tylko tych szkolnych.",
    date: "26 listopada 2020",
    publishedAt: "2020-11-26",
    category: "Rodzice",
    categoryColor: "bg-orange-100 text-orange-700",
    author: "Aneta Pakieła",
    content: `Wiek, kiedy twoje dziecko idzie do szkoły jest bardzo wyjątkowym momentem w jego życiu. Wtedy właśnie zaczyna się uczyć wielu nowych rzeczy, nie tylko tych, które ma zapisane w podręcznikach. Szkoła podstawowa jest miejscem nowych wyzwań, nauki samodzielności, a także życia społecznego twojego dziecka.

## Koncentracja — fundament nauki szkolnej

Po pierwsze szkoła wymaga od dziecka umiejętności koncentrowania się na zadaniu. Wraz z dorastaniem wykształcamy mechanizm dowolnego skupiania uwagi, który pomaga nam precyzyjnie wykonywać zadanie bez rozpraszania się. Warto go pielęgnować i rozwijać, gdyż jest on niezwykle przydatny w dorosłym życiu.

Do trenowania uwagi wykorzystuje się różne zadania, gdzie zmierzamy się z dystraktorami, czyli bodźcami odwracającymi naszą uwagę. W ITS GoBrain „Zabawy z Dźwiękami" zastosowaliśmy opcję dźwiękowych dystraktorów, aby również i tę umiejętność rozwijać u dzieci podczas wykonywania różnych zadań.

## Pamięć i strategie pamięciowe

Drugą ważną umiejętnością jest pamięć. Dziecko w wieku szkolnym nabywa umiejętność stosowania własnych strategii pamięciowych. Warto je wspierać, proponując mu różne mnemotechniki, aby mogło znaleźć optymalną dla siebie opcję. Przykładem mnemotechniki może być układanie wierszyka zawierającego pojęcia do zapamiętania. Inną możliwością rozwoju tej umiejętności jest wykonywanie zadań wymagających przypominania, odtwarzania usłyszanych informacji. Zadania w treningu GoBrain ćwiczą pamięć i uważne słuchanie.

## Wyzwania społeczne w szkole

Oprócz uwagi i pamięci środowisko wczesnoszkolne stawia przed maluchem wiele wyzwań społecznych. Więzi tworzone z rówieśnikami stają się dużo głębsze niż te, z którymi mieliśmy do czynienia w przedszkolu. Dziecko zaczyna uczyć się efektywnego pracowania w grupie, w tym dzielenia się, negocjowania czy wspierania. Gdy pojawiają się konflikty na tych polach, warto wspierać swoje dziecko w rozwiązywaniu ich poprzez wskazówki, jednocześnie nie pozbawiając go samodzielności. Budowanie poczucia własnej wartości wraz z konsekwencją w działaniu to klucz do sukcesu.

## GoBrain — wsparcie na każdym etapie

Jako zespół GoBrain od 2009 roku pracowaliśmy nad programem, który byłby w stanie wesprzeć dziecko w podróży przez świat nauki i dorastania. Efektem tego jest Interaktywny Trening Słuchowy „Zabawy z Dźwiękami", który rozwija u dziecka przetwarzanie słuchowe, pamięć, koncentrację, wielozadaniowość oraz kreatywność. Sukces naszego programu potwierdzają opinie rodziców, których dzieci korzystały z treningu.`,
  },
  {
    slug: "pomysly-na-zabawy-z-dzieckiem",
    title: "4 pomysły na rozwijające zabawy z dzieckiem",
    excerpt: "W życiu dziecka zabawa odgrywa bardzo ważną rolę. Dzięki niej uczymy się relacji z rówieśnikami, nowych pojęć czy mechanizmów. Warto zadbać, aby zabawy dzieci niosły ze sobą wartości edukacyjne.",
    date: "26 listopada 2020",
    publishedAt: "2020-11-26",
    category: "Rozwój",
    categoryColor: "bg-yellow-100 text-yellow-700",
    author: "Aneta Pakieła",
    content: `W życiu dziecka zabawa odgrywa bardzo ważną rolę. Dzięki niej uczymy się relacji z rówieśnikami, nowych pojęć czy mechanizmów. Warto zadbać, aby zabawy dzieci niosły ze sobą rozwój psychospołeczny. Poniżej znajdą Państwo cztery pomysły na świetną zabawę w niewielkim gronie z maluchami, które nie tylko bawią, ale i uczą.

## 1. Rysowanie na wesoło

Rysowanie nie musi być jedynie tworzeniem kredką na papierze. Pomysłem na świetną zabawę z dzieckiem jest zaproponowanie mu rysowania innymi częściami ciała — takimi jak stopa, zgięcie przy łokciu czy usta. Ponadto można rozbudować zabawę o malowanie konkretnych haseł, takich jak dom, pies, kwiatek — lub bardziej abstrakcyjnych: radość, podróż, miłość czy przyjaźń.

Dzięki takiej formie zabawy dziecko rozwija swoją kreatywność, poznaje różne pojęcia nie tylko treściowo, ale i obrazowo, oraz wykorzystuje myślenie poza schematami — co jest niezwykle istotne w życiu dorosłym.

## 2. Piłka słów

Zastanawiasz się jak poszerzyć słownictwo twojego dziecka innym sposobem niż czytanie książek? Zagraj z nim w piłkę słów. Do gry potrzeba przynajmniej trzech osób. Zabawa polega na tym, że każda osoba, która otrzyma piłkę, musi powiedzieć słowo na ostatnią literę poprzedniego słowa przeciwnika. W przypadku gdy nie możemy wymyślić słowa w ciągu 10 sekund — odpadamy. Możemy utrudnić zadanie, wykluczając imiona z gry.

Dzięki połączeniu ruchu z wykorzystywaniem zadań pamięciowych dziecko znacznie lepiej będzie zapamiętywać nowo poznane słowa. Wynika to z zasad neuroplastyczności mózgu.

## 3. Zgadnij kim jestem

Zabawa, gdzie każdy zgaduje za pomocą pytań „tak – nie" kim jest — określone jest to na karteczce przyklejonej do czoła, którą widzi reszta uczestników. W zmodyfikowanej wersji nazwy na karteczkach mogą odnosić się do roli w rodzinie (mama, brat, dziadek) lub do zawodów (policjant, lekarz, sprzedawca). Dzięki takiej grze dziecko poznaje różne role społeczne, a także związane z nimi czynności.

## 4. Alternatywna gra na komputer

Zespół GoBrain stworzył Interaktywny Trening Słuchowy „Zabawy z Dźwiękami" z myślą o formie gry komputerowej, która uczy dziecko w zakresie słuchu, mowy, pamięci i koncentracji od najmłodszych lat. Podczas rozwiązywania kolejnych etapów maluch rozwija swoje kompetencje, co ma przełożenie na późniejszy sukces w nauce szkolnej.

Warto na koniec podkreślić, że wszelkie zabawy — jeśli jest taka możliwość — warto wykonywać na świeżym powietrzu. Z badań naukowych wynika, że najlepiej uczymy się i zapamiętujemy na dworze, w towarzystwie aktywności fizycznych.`,
  },
  {
    slug: "dysleksja-i-gobrain",
    title: "Twoje dziecko ma dysleksję? Trening GoBrain to świetne rozwiązanie!",
    excerpt: "Czy wiesz, że aż 15% dzieci w Polsce ma dysleksję? Czym jest dysleksja i jak można sobie z nią poradzić? Trening słuchowy ITS GoBrain może być skutecznym wsparciem w terapii dysleksji.",
    date: "26 listopada 2020",
    publishedAt: "2020-11-26",
    category: "Dysleksja",
    categoryColor: "bg-red-100 text-red-700",
    author: "Aneta Pakieła",
    content: `Czy wiesz, że aż 15% dzieci w Polsce ma dysleksję? Pomimo tak częstego występowania, nierzadko objawy mylone są błędnie z niestarannością czy lenistwem dziecka.

## Czym tak naprawdę jest dysleksja?

Ogólnie dysleksję określa się jako trudności w nauce czytania i pisania. Głównym problemem w dysleksji jest poprawne, szybkie i skoordynowane przetwarzanie bodźców wizualnych i słuchowych. Dziecko wolniej czyta, przekręca końcówki wyrazów, popełnia błędy ortograficzne oraz poświęca więcej czasu na zrozumienie tekstu słyszanego lub czytanego.

Dysleksji mogą towarzyszyć problemy z mową, koncentracją czy uwagą. Według statystyk u jednego na czworo dzieci z dysleksją mogą towarzyszyć centralne zaburzenia przetwarzania słuchowego (CAPD).

## Rodzaje dysleksji

Według klasyfikacji profesor Bogdanowicz wyróżnia się:

- **dysleksję wzrokową** — gdzie zaburzona jest percepcja wzrokowa,
- **dysleksję słuchową** — opartą na trudnościach w przetwarzaniu bodźców dźwiękowych,
- **dysleksję integracyjną** — polegającą na braku koordynacji procesów percepcyjno-motorycznych,
- **dysleksję mieszaną** — będącą połączeniem dysleksji wzrokowej i słuchowej.

Warto zaznaczyć, że dysleksja nie ma związku z poziomem inteligencji dziecka. Jest ona jedynie ograniczeniem w rozwoju indywidualnego potencjału dziecka.

## Terapia ma ogromne znaczenie

Kompleksowa, profesjonalna terapia zapobiega rozwinięciu się negatywnych skutków dysleksji, takich jak zaburzenia pamięci, uwagi, koncentracji, a w konsekwencji problemów w nauce. Należy pamiętać, że u dzieci z dysleksją możemy spotkać się ze spadkiem motywacji spowodowanym licznymi niepowodzeniami szkolnymi.

Warto zaznaczyć, że według badań zastosowanie terapii obniża z 15 do zaledwie 1,5% odsetek dzieci ze zdiagnozowaną dysleksją! Dlatego należy wprowadzić działania terapeutyczne jak najwcześniej.

## Jak GoBrain pomaga dzieciom z dysleksją?

Trening ITS GoBrain „Zabawy z Dźwiękami" rozwija pamięć, koncentrację oraz koordynację słuchowo-wizualną. Są to dokładnie te obszary, które u dzieci z dysleksją wymagają wsparcia.

Rozpocznij działania wspomagające rozwój Twojego dziecka — dla lepszych efektów w nauce szkolnej. Skontaktuj się z jednym z naszych certyfikowanych terapeutów lub skorzystaj z programu samodzielnie w domu.`,
  },
  {
    slug: "przedszkole-z-gobrain",
    title: "Do przedszkola z GoBrain",
    excerpt: "Gdy dziecko wchodzi w wiek przedszkolny, każdy z rodziców zastanawia się, w jaki sposób przygotować je na nowe wyzwania związane z tym okresem. Rozwój maluchów w wieku 4–6 lat to kluczowy etap.",
    date: "26 listopada 2020",
    publishedAt: "2020-11-26",
    category: "Przedszkole",
    categoryColor: "bg-pink-100 text-pink-700",
    author: "Aneta Pakieła",
    content: `Gdy dziecko wchodzi w wiek przedszkolny, każdy z rodziców zastanawia się, w jaki sposób przygotować je na nowe wyzwania związane z tym okresem. Pójście do przedszkola to dla malucha zupełnie nowe środowisko — i brak bezpiecznej bazy w postaci rodziców — co wymaga zdobycia nowych umiejętności, przekładając się na całościowy rozwój człowieka.

## Nowe zasady i kontrola zachowania

Po pierwsze dziecko musi skonfrontować się z tym, że zasady panujące w środowisku domowym nie zawsze są takie same jak w środowisku pozadomowym. Zmierzenie się z nowymi ograniczeniami wpływa w dużym stopniu na rozwój kontroli nad własnym zachowaniem.

## Relacje z rówieśnikami

Kolejną istotną rzeczą w rozwoju dzieci jest wchodzenie w relacje interpersonalne ze swoimi rówieśnikami. Podczas tego procesu pojawiają się takie elementy jak wzajemność, współpraca czy rywalizacja. Kontakty z innymi dziećmi uczą samokontroli, reprezentacji emocji oraz przestrzegania zasad w sytuacjach poza kontrolą rodziców.

Dziecko podejmujące działania w tym zakresie przygotowuje się na dalsze funkcjonowanie w społeczeństwie. Rodzice w tym aspekcie spełniają rolę czynnika samoregulującego — gdy dziecko jest grzeczne, dajemy mu więcej swobody w kontaktach z kolegami, jednak gdy zachowuje się niewłaściwie, zmniejsza się dystans.

## Wiek pytań — poznawanie świata

Pod kątem poznawczym dziecko zaczyna interesować się rzeczami niedostępnymi w bezpośrednim poznaniu. To wtedy zaczyna się tak zwany „wiek pytań". Ważne jest wtedy zapewnienie swojemu maluchowi możliwości poznania świata wieloaspektowo, różnymi zmysłami.

## Rola zabawy w rozwoju

Mówiąc o rozwoju dziecka w wieku przedszkolnym nie można zapomnieć o zabawie. Podstawową funkcją zabawy jest spełnienie pragnień dziecka. Warunkami dobrej zabawy według Profesor Brzezińskiej są: zachowanie dystansu do ról, rozróżnienie fikcji od rzeczywistości oraz określenie jasnych granic.

Dzięki zabawie dziecko rozwija się pod kątem społecznym, emocjonalnym, moralnym i umysłowym — dlatego powinniśmy jako rodzice uwzględnić ten aspekt jako równie ważny.

## GoBrain wspiera gotowość przedszkolną

Każdy etap rozwoju człowieka jest niezwykle istotny i wpływa na nasze dalsze życie. Rolą rodziców jest zapewnienie jak najbardziej ciekawego i zachęcającego do działania środowiska. Program GoBrain „fast learning and fun" wspomaga rozwój dzieci w wieku od 5 do 12 lat oraz przygotowuje je do nowych wyzwań stawianych przez wiek szkolny.`,
  },
  {
    slug: "czym-jest-adhd",
    title: "Czym jest ADHD?",
    excerpt: "ADHD to nadpobudliwość psychoruchowa z deficytem uwagi i impulsywnością. Jeśli wszystkie trzy objawy występują u dziecka przez co najmniej kilka miesięcy niezależnie od środowiska, może to wskazywać na ADHD.",
    date: "26 listopada 2020",
    publishedAt: "2020-11-26",
    category: "ADHD",
    categoryColor: "bg-indigo-100 text-indigo-700",
    author: "Aneta Pakieła",
    content: `ADHD to nadpobudliwość psychoruchowa z deficytem uwagi i impulsywnością. Jeśli wszystkie trzy objawy występują u dziecka przez co najmniej kilka miesięcy niezależnie od środowiska — jest to moment, aby mu pomóc poprzez zgłoszenie się z nim do specjalisty.

## Nadpobudliwość

Dziecko nie jest w stanie ani chwili posiedzieć spokojnie, a gdy proponujesz mu że poczytasz mu książkę — jego ręce i nogi są w nieustannym ruchu? Patrząc z boku wydaje ci się, że malec w ogóle nie słucha i przeważnie tylko biega lub wspina się na meble? Czy przed snem twoje dziecko ma problemy z wyciszeniem się?

Jeśli odpowiedź brzmi tak — są to objawy nadpobudliwości. Maluch z ADHD ma tyle energii, że można by bez trudu obdzielić nią paru kilkulatków.

## Impulsywność

Malec kończy za ciebie zdanie, odpowiada nim zdążysz zadać pytanie, wciąż wtrąca się w rozmowę dorosłych. Często zdarza mu się psuć i łamać różne przedmioty, bo nie jest w stanie używać ich delikatnie. Także w kontaktach z bliskimi dziecko nie jest „delikatne" — a gdy chce się przywitać, potrafi z impetem wskoczyć na kogoś lub bardzo mocno przytulić. Tego typu zachowania wskazują na wysoką impulsywność.

## Zaburzenia koncentracji uwagi

Dziecko w przedszkolu ma problem ze skoncentrowaniem się na jednej czynności? — to zupełnie naturalne. Problem zaczyna się, gdy kłopoty z utrzymaniem uwagi na jednej czynności ma dziecko w szkole. Tego typu zaburzenia mogą objawiać się np. tym, że malec zaczyna rysować, po chwili bawi się samochodami, a już za moment skacze po łóżku. Czasem robi kilka rzeczy równocześnie. Ciągle coś gubi czy zapomina o codziennych czynnościach.

## Jak GoBrain pomaga dzieciom z ADHD?

Nasz program GoBrain — interaktywny trening słuchowy — może pomóc dziecku ze zdiagnozowanym zespołem ADHD, gdyż:

- **usprawnia koncentrację uwagi** — ćwiczenia wymagają skupienia przez określony czas,
- **ułatwia komunikację** — trening słuchowy poprawia odbiór i rozumienie mowy,
- **ćwiczy pamięć** — zadania angażują pamięć słuchową i roboczą,
- **poprawia umiejętność słuchania** — systematyczne ćwiczenia wzmacniają filtrowanie dźwięków.

Jeśli podejrzewasz u swojego dziecka objawy ADHD lub CAPD, skontaktuj się z certyfikowanym terapeutą GoBrain lub zacznij trening w domu.`,
  },
];
