import { Article } from "./types";

export const GNEWS_API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;

export const categories = ["general", "business", "entertainment", "health", "science", "sports", "technology"]

export const GNEWS_TOP_HEADLINES_URL = `https://gnews.io/api/v4/top-headlines?&lang=en&apikey=${GNEWS_API_KEY}&category=`

export const GNEWS_SEARCH_URL = `https://gnews.io/api/v4/search?apikey=${GNEWS_API_KEY}&q=`

export const articles: Article[] = [
    {
        "title": "\"Матч с махачкалинским \"Динамо\" не в пользу Осинькина\" - Генич",
        "description": "Матч «Крыльев Советов» против махачкалинского «Динамо» в FONBET Кубке России точно не в пользу главного тренера самарской команды Игоря Осинькина, после такой игры у руководства клуба могут появиться вопросы, считает комментатор Константин Генич.",
        "content": "«Матч с махачкалинским «Динамо» не в пользу Осинькина» — Генич\nМатч «Крыльев Советов» против махачкалинского «Динамо» в FONBET Кубке России точно не в пользу главного тренера самарской команды Игоря Осинькина, после такой игры у руководства клуба мог... [1767 chars]",
        "url": "https://matchtv.ru/football/matchtvnews_NI2116028_Match_s_mahachkalinskim_Dinamo_ne_v_polzu_Osinkina__Genich",
        "image": "https://s-cdn.sportbox.ru/images/shares_matchtv/1200x630/article/2116028/0b30edd68c445951516ffd1c9557aa71.jpg",
        "publishedAt": "2024-10-03T08:07:42Z",
        "source": {
            "name": "Матч ТВ",
            "url": "https://matchtv.ru"
        }
    },
    {
        "title": "Anna Kinberg Batra formellt avskedad som landshövding - hamnar på ”Elefantkyrkogården”",
        "description": "På torsdagen får Anna Kinberg Batra formellt sparken som landshövding. I stället placeras hon på den så kallade ”elefantkyrkogården” där den tidigare moderatledaren har sällskap av fem före detta myndighetschefer.",
        "content": "Vad Anna Kindberg Batra kommer att få för nya arbetsuppgifter har inte presenterats. Klart är att den avsatta landshövdingen för Länsstyrelsen i Stockholm behåller sin månadslön på drygt 120 000 kronor fram till hennes förordnande löper ut i februari... [2114 chars]",
        "url": "https://www.svt.se/nyheter/inrikes/anna-kinberg-batra-formellt-avskedad-som-landshovding-hamnar-pa-elefantkyrkogarden",
        "image": "https://www.svtstatic.se/image-news/1200/1.91:1/0.67/0.17/a5e9e659cae86bbbfe0c8edd93fb0421609000d8cd9f99416c056e26d0e09176",
        "publishedAt": "2024-10-03T08:07:42Z",
        "source": {
            "name": "SVT Nyheter",
            "url": "https://www.svt.se"
        }
    },
    {
        "title": "En direct, guerre au Proche-Orient : dix-sept raids israéliens sur Beyrouth et sa banlieue sud durant la nuit",
        "description": "Un de ces raids, mené sur un centre de secouristes du Hezbollah dans la capitale, a fait six morts, selon le ministère de la santé libanais et une source proche du mouvement islamiste.",
        "content": "Parce qu’une autre personne (ou vous) est en train de lire Le Monde avec ce compte sur un autre appareil. Vous ne pouvez lire Le Monde que sur un seul appareil à la fois (ordinateur, téléphone ou tablette).\nComment ne plus voir ce message ? En cliqua... [432 chars]",
        "url": "https://www.lemonde.fr/international/live/2024/10/03/en-direct-guerre-au-proche-orient-dix-sept-raids-israeliens-sur-beyrouth-et-sa-banlieue-sud-durant-la-nuit_6341193_3210.html",
        "image": "https://img.lemde.fr/2024/10/03/614/0/3000/1500/1440/720/60/0/d36dfd4_1727941946337-liban-frappesfumei-e-asurp-1.jpg",
        "publishedAt": "2024-10-03T08:01:20Z",
        "source": {
            "name": "Le Monde",
            "url": "https://www.lemonde.fr"
        }
    },
    {
        "title": "Two Men Posing As Patients Gun Down Doctor Inside Delhi Hospital",
        "description": "The two men had come to the hospital with an injury, after dressing they had demanded to meet the doctor and shot him dead",
        "content": "In a shocking incident, a doctor was shot dead inside a hospital in Delhi’s Jaitpur area in Kalindi Kunj after two men came for treatment with an excuse of injury, police informed.\nCCTV footage visuals are being examined to identify the accused.\nAs p... [586 chars]",
        "url": "https://www.news18.com/india/delhi-doctor-shot-dead-two-men-excuse-of-injury-nima-hospital-kalindi-kunj-latest-news-9071675.html",
        "image": "https://images.news18.com/ibnlive/uploads/2024/10/fotojet-64-2024-10-b1d531e519e18d81e0a74193f0e47b78-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-10-03T07:56:09Z",
        "source": {
            "name": "News18",
            "url": "https://www.news18.com"
        }
    },
    {
        "title": "Weakened but still strong Typhoon Krathon slams into Taiwan, two dead",
        "description": "KAOHSIUNG - A weakened and \"weird\" Typhoon Krathon slammed into southwestern Taiwan on Thursday, hitting the island with a storm that has killed two people so far and forced it to shut down a second day with hundreds of flights grounded and financial markets closed.",
        "content": "KAOHSIUNG - A weakened and \"weird\" Typhoon Krathon slammed into southwestern Taiwan on Thursday, hitting the island with a storm that has killed two people so far and forced it to shut down a second day with hundreds of flights grounded and financial... [2997 chars]",
        "url": "https://www.gmanetwork.com/news/topstories/world/922472/weakened-but-still-strong-typhoon-krathon-slams-into-taiwan-two-dead/story/",
        "image": "https://images.gmanews.tv/webpics/2024/10/2024-10-03T040055Z_781308774_RC2QCAAP42YT_RTRMADP_3_ASIA-WEATHER-TAIWAN_2024_10_03_15_39_20.jpg",
        "publishedAt": "2024-10-03T07:45:10Z",
        "source": {
            "name": "GMA News Online",
            "url": "https://www.gmanetwork.com"
        }
    },
    {
        "title": "Συγκλονίζουν οι συγγενείς του Έλληνα φοιτητή",
        "description": "\"Τον θυσίασαν στην τρέλα του πολέμου\" δήλωσε συντετριμμένος ο πατέρας του 26χρονου που έπεσε νεκρός σε τραμ στη Γιάφα στο Τελ Αβίβ.",
        "content": "“Τον θυσίασαν στην τρέλα του πολέμου” δήλωσε συντετριμμένος ο πατέρας του 26χρονου Έλληνα φοιτητή που έπεσε νεκρός σε τραμ στη Γιάφα του Τελ Αβίβ.\nΣυντετριμμένοι είναι οι συγγενείς και οι φίλοι του 26χρονου Έλληνα, κατοίκου Ιεροσολύμων, ο οποίος έπεσ... [3921 chars]",
        "url": "https://www.news247.gr/kosmos/tel-aviv-sigklonizoun-oi-singeneis-tou-ellina-foititi-ton-ektelesan/",
        "image": "https://www.news247.gr/wp-content/uploads/2024/10/telaviv1--og-image-2388630.jpg",
        "publishedAt": "2024-10-03T07:44:00Z",
        "source": {
            "name": "News247.gr",
            "url": "https://www.news247.gr"
        }
    },
    {
        "title": "Solen ble borte",
        "description": "En spektakulær solformørkelse kunne sees på himmelen over deler av Sør-Amerika.",
        "content": "En spektakulær solformørkelse kunne sees på himmelen over deler av Sør-Amerika.\nFenomenet oppstår når månen passerer mellom jorda og sola, men er på eller nær sitt fjerneste punkt i banen rundt jorda. Dette gjør at månen ikke dekker sola fullstendig,... [564 chars]",
        "url": "https://www.vg.no/nyheter/i/VzG3d6/solen-ble-borte",
        "image": "https://akamai.vgc.no/v2/images/0885a655-76f7-4351-877a-dd2b3bba8a44?format=auto&w=1080&s=7fdc8e9cc8d5faa42d5a749d7a968ba4bc7f4a27",
        "publishedAt": "2024-10-03T07:42:30Z",
        "source": {
            "name": "VG",
            "url": "https://www.vg.no"
        }
    },
    {
        "title": "Se quer acelerar o metabolismo, é isto que tem de comer pela manhã",
        "description": "São quatro os alimentos que pode juntar às suas papas de aveia, por exemplo. As sugestões são deixadas por dietistas.",
        "content": "É pela manhã que pode começar a trazer benefícios ao organismo. Se pretende acelerar o metabolismo, o melhor é apostar em alguns alimentos específicos. Pode juntá-los a papas de aveia, por exemplo, para conseguir várias vantagens.\nO 'website' SheFind... [1159 chars]",
        "url": "https://www.noticiasaominuto.com/lifestyle/2643667/se-quer-acelerar-o-metabolismo-e-isto-que-tem-de-comer-pela-manha",
        "image": "https://media-manager.noticiasaominuto.com/1280/naom_66fe49ee7bebf.webp",
        "publishedAt": "2024-10-03T07:42:02Z",
        "source": {
            "name": "Notícias ao Minuto",
            "url": "https://www.noticiasaominuto.com"
        }
    },
    {
        "title": "la FAA contre-attaque avec une enquête sur l'anomalie du dernier lancement",
        "description": "Le gendarme américain de l'aérospatiale ne risque pas de faire la moindre concession à SpaceX, dans un contexte où Elon Musk multiplie les attaques frontales envers l'agence.",
        "content": "La FAA, l’agence fédérale qui régule le trafic aérien aux états unis, a requis l’ouverture d’une enquête suite à une anomalie lors du retour du dernier Falcon 9 de SpaceX. Ses fusées vont donc rester clouées au sol encore quelque temps — une situatio... [5639 chars]",
        "url": "https://www.journaldugeek.com/2024/10/03/spacex-la-faa-contre-attaque-avec-une-enquete-sur-lanomalie-du-dernier-lancement/",
        "image": "https://www.journaldugeek.com/app/uploads/2024/10/Lancement-crew-9.jpg",
        "publishedAt": "2024-10-03T07:41:36Z",
        "source": {
            "name": "Journal du geek",
            "url": "https://www.journaldugeek.com"
        }
    },
    {
        "title": "Все скины на оружие из обновления \"Арсенал\" для CS2",
        "description": "В игру было добавлено более 66 новых расцветок на оружие",
        "content": "Вместе с обновлением «Арсенал» в Counter-Strike 2 были добавлены четыре коллекции скинов: Overpass 2024, «Графика», «Спорт и досуг», а также «Галерейный кейс». Всего в шутере от Valve появилось более 66 новых расцветок на оружие.\nЧтобы получить скин ... [3467 chars]",
        "url": "https://www.cybersport.ru/tags/cs2/vse-skiny-na-oruzhie-iz-obnovleniia-arsenal-dlia-cs2",
        "image": "https://virtus-img.cdnvideo.ru/images/og-jpg/plain/4f/4f9585b0-dc0d-4218-9b7d-fa5b75b0e1dd.png",
        "publishedAt": "2024-10-03T07:41:00Z",
        "source": {
            "name": "Cybersport.ru",
            "url": "https://www.cybersport.ru"
        }
    }
];
