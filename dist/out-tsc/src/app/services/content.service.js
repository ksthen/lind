"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContentService = /** @class */ (function () {
    function ContentService() {
    }
    ContentService.prototype.getData = function (id) {
        var data = {
            notFound: {
                title: '404 - Sidan hittades inte',
                description: 'Sidan hittades inte',
                modules: [
                    this.getModule('notFoundHero')
                ]
            },
            start: {
                title: 'Start',
                description: 'Välkommen till Östra Lindås Samfällighet',
                modules: [
                    this.getModule('startHero'),
                    this.getModule('startNews'),
                    this.getArticle('startArticle'),
                    this.getModule('startGallery')
                ]
            },
            styrelsen: {
                title: 'Styrelsen och föreningsfakta',
                description: 'Här hittar du kontaktuppgifter till styrelsen samt områdesansvariga i Östra Lindås Samfällighet',
                modules: [
                    this.getModule('styrelsenHero'),
                    this.getModule('styrelsenContactTable'),
                    this.getModule('omradesansvarigTable'),
                    this.getArticle('faktaArticle')
                ]
            },
            regler: {
                title: 'Regler',
                description: 'Här hittar du information om samfällighetens relger',
                modules: [
                    this.getModule('reglerHero'),
                    this.getArticle('reglerArticle')
                ]
            },
            stadgar: {
                title: 'Stadgar',
                description: 'Här hittar du information om samfällighetens stadgar',
                modules: [
                    this.getModule('stadgarHero'),
                    this.getArticle('stadgarArticle')
                ]
            },
            staddagar: {
                title: 'Städdagar och Grönområden',
                description: 'Här hittar du information föreingens städdagar och grönområdet samt klippkartor',
                modules: [
                    this.getModule('stadDagarHero'),
                    this.getArticle('stadDagarOneArticle'),
                    this.getModule('omradesansvarigTable'),
                    this.getArticle('stadDagarTwoArticle'),
                ]
            },
            parkeringgarage: {
                title: 'Parkering, Garage & Vägar',
                description: 'Här hittar du information om vägar, parkeringsplatser och samfällighetens garage samt snöröjningskartor',
                modules: [
                    this.getModule('parkeringGarageHero'),
                    this.getArticle('parkeringGarageArticle')
                ]
            },
            tvfiber: {
                title: 'TV och Fiber',
                description: 'Här hittar du information om TV och fiber',
                modules: [
                    this.getModule('tvHero'),
                    this.getArticle('tvArticle')
                ]
            },
            dokument: {
                title: 'Dokument',
                description: 'Dokument, ritningar och infobrev med mera',
                modules: [
                    this.getModule('dokumentHero'),
                    this.getModule('files'),
                    this.getModule('infobrev'),
                ]
            },
            privacy: {
                title: 'Privacy',
                description: 'Privacy policy',
                modules: [
                    this.getArticle('privacyArticle')
                ]
            },
            cookies: {
                title: 'Cookies',
                description: 'Cookies',
                modules: [
                    this.getArticle('cookiesArticle')
                ]
            },
            test: {
                title: 'Test',
                description: 'Test',
                modules: [
                    this.getModule('startHero'),
                    this.getModule('startNews'),
                    this.getArticle('startArticle'),
                    this.getModule('startGallery'),
                    this.getModule('dokumentHero'),
                    this.getModule('files'),
                    this.getModule('infobrev'),
                    this.getArticle('reglerArticle'),
                    this.getModule('styrelsenContactTable')
                ]
            }
        };
        return data[id];
    };
    ContentService.prototype.getMenu = function () {
        return {
            background: './assets/images/image1.jpg',
            categories: [
                {
                    categoryTitle: 'Föreningen',
                    categoryItems: [
                        {
                            title: 'Nyheter / Om föreningen',
                            link: 'start'
                        },
                        {
                            title: 'Styrelsen / Föreningsfakta',
                            link: 'styrelsen'
                        },
                        {
                            title: 'Regler',
                            link: 'regler'
                        },
                        {
                            title: 'Stadgar',
                            link: 'stadgar'
                        }
                    ]
                },
                {
                    categoryTitle: 'Samfälligheten',
                    categoryItems: [
                        {
                            title: 'Städdagar / Grönområden',
                            link: 'staddagar'
                        },
                        {
                            title: 'Parkering, Garage / Vägar',
                            link: 'parkeringgarage'
                        },
                        {
                            title: 'TV / Fiber',
                            link: 'tvfiber'
                        },
                        {
                            title: 'Dokument',
                            link: 'dokument'
                        }
                    ]
                }
            ]
        };
    }; // menu
    ContentService.prototype.getModule = function (id) {
        var modules = {
            notFoundHero: {
                type: 'hero',
                hero: {
                    top: '404',
                    header: 'Sidan hittades inte',
                    image: './assets/images/image1.jpg',
                    version: 'light',
                    size: 'full',
                    linkOne: {
                        text: 'Till startsidan',
                        href: '/',
                        type: 'internal'
                    },
                    disableScrollDown: true
                }
            },
            startHero: {
                type: 'hero',
                hero: {
                    top: 'Välkommen till',
                    header: 'Östra Lindås Samfällighet',
                    image: './assets/images/image1.jpg',
                    version: 'light',
                    size: 'large',
                    linkOne: {
                        text: 'Meny',
                        href: 'meny',
                        type: 'internal'
                    },
                    linkTwo: {
                        text: 'Nyheter',
                        href: '#down',
                        type: 'anchor'
                    },
                }
            },
            styrelsenHero: {
                type: 'hero',
                hero: {
                    top: 'Kontaktinformation',
                    header: 'Styrelsen & Föreningsfakta',
                    ptemp: 'Här hittar du kontaktuppgifter till styrelsen samt fakta om föreningen',
                    image: './assets/images/image19.jpg',
                    version: 'light',
                    size: 'medium',
                }
            },
            reglerHero: {
                type: 'hero',
                hero: {
                    header: 'Samfällighetens Regler',
                    ptemp: 'Här hittar du information om samfällighetens relger',
                    image: './assets/images/image3.jpg',
                    version: 'light',
                    size: 'medium',
                }
            },
            stadgarHero: {
                type: 'hero',
                hero: {
                    header: 'Samfällighetens Stadgar',
                    ptemp: 'Här hittar du information om samfällighetens stadgar',
                    image: './assets/images/image10.jpg',
                    version: 'light',
                    size: 'medium',
                }
            },
            stadDagarHero: {
                type: 'hero',
                hero: {
                    header: 'Städdagar & Grönområden',
                    ptemp: 'Här hittar du information föreingens städdagar och grönområdet samt klippkartor',
                    image: './assets/images/image8.jpg',
                    version: 'light',
                    size: 'medium',
                }
            },
            parkeringGarageHero: {
                type: 'hero',
                hero: {
                    header: 'Parkering, Garage & Vägar',
                    ptemp: 'Här hittar du information om vägar, parkeringsplatser och samfällighetens garage samt snöröjningskartor',
                    image: './assets/images/image7.jpg',
                    version: 'light',
                    size: 'medium',
                }
            },
            tvHero: {
                type: 'hero',
                hero: {
                    header: 'TV och Fiber',
                    ptemp: 'Här hittar du information om TV-utbudet samt fiber',
                    image: './assets/images/image11.jpg',
                    version: 'light',
                    size: 'medium',
                }
            },
            dokumentHero: {
                type: 'hero',
                hero: {
                    top: 'Arkiv',
                    header: 'Dokument & ritningar',
                    ptemp: 'Här hittar du dokument, ritningar informationsbrev, med mera',
                    image: './assets/images/image13.jpg',
                    version: 'light',
                    size: 'medium',
                }
            },
            styrelsenContactTable: {
                type: 'contactTable',
                contactTable: {
                    header: 'Styrelsen 2018',
                    contacts: [
                        {
                            function: 'Ordförande',
                            name: 'Lars Hermanson',
                            address: 'Billdals Aspväg 38',
                            phone: '031 91 32 82 '
                        },
                        {
                            function: 'Kassör',
                            name: 'Gabriella Barta Söderqvist	',
                            address: 'Billdals Aspväg 70',
                            phone: '031 91 20 19'
                        },
                        {
                            function: 'Sekreterare',
                            name: 'Sara Danestedt',
                            address: 'Billdals Aspväg 110',
                            phone: '031 91 48 16'
                        },
                        {
                            function: 'Ledamot',
                            name: 'Kristoffer Sthen',
                            address: 'Lindåsvägen 68',
                            phone: '0723 71 75 03'
                        },
                        {
                            function: 'Ledamot',
                            name: 'Mikael Forsman',
                            address: 'Billdals Aspväg 62',
                            phone: '031 91 47 11'
                        },
                        {
                            function: 'Suppleant',
                            name: 'Jonas Jävert',
                            address: 'Lindåsvägen 22',
                            phone: '0739 02 04 57'
                        }
                    ]
                }
            },
            omradesansvarigTable: {
                type: 'contactTable',
                contactTable: {
                    header: 'Områdesansvariga',
                    contacts: [
                        {
                            function: 'Område 1',
                            name: '	Jonas Jävert',
                            address: 'Lindåsvägen 22',
                        },
                        {
                            function: 'Område 2',
                            name: 'Lena Larsson / Linda Vendelstrand Gardelin',
                            address: 'LV 50 / LV60  '
                        },
                        {
                            function: 'Område 3',
                            name: 'Björn Töpel',
                            address: 'Lindåsvägen 116'
                        },
                        {
                            function: 'Område 4',
                            name: 'Lars Hägnemo',
                            address: 'Billdals Aspväg 140',
                        },
                        {
                            function: 'Område 5',
                            name: 'Lars Björklund',
                            address: 'Billdals Aspväg 86'
                        },
                        {
                            function: 'Område 6',
                            name: 'Gabriella Barta Söderqvist',
                            address: 'Billdals Aspväg 70'
                        },
                        {
                            function: 'Område 7',
                            name: 'Christian Conradi',
                            address: 'Billdals Aspväg 7'
                        }
                    ]
                }
            },
            startNews: {
                type: 'news',
                news: {
                    header: 'Nyheter',
                    newsItems: [
                        {
                            top: 'Maj 2018',
                            header: 'Ny "Vippy"',
                            text: 'Ny "vippy" gungbräda är på plats!',
                            image: './assets/images/image16.jpg'
                        },
                        {
                            top: 'Maj 2018',
                            header: 'Ny hemsida',
                            text: 'Till följd av GDPR vill vi minska hanteringen av personuppgifter. Vi har därför byggt en ny hemsida med ett minimum personuppgifter. Vi kommer även att stänga ner epost-listorna tills vidare. Medlemsregister, städområden, årsmötesprotokoll mm. tillhandahålls av styrelsen på begäran.',
                            image: './assets/images/image1.jpg'
                        },
                        {
                            top: '21-22 Oktober',
                            header: 'Höstens städdagar',
                            text: 'Höstens städdagar är planerade till 21-22 Oktober',
                            image: './assets/images/image8.jpg'
                        },
                        {
                            top: 'Maj 2018',
                            header: 'Årsmötesprotokoll',
                            text: 'Protokollet från årsmötet är nu distribuerat. Protokollet kan även tillhandahålls av styrelsen på begäran.',
                            image: './assets/images/image9.jpg'
                        },
                    ]
                }
            },
            files: {
                type: 'files',
                files: {
                    header: 'Dokument',
                    files: [
                        {
                            header: 'Anläggningsbeslut',
                            text: 'Anläggningsbeslut för samfälligheten',
                        },
                        {
                            header: 'Fiber AV',
                            text: 'Ritning över fibernät Billdals Aspväg',
                        },
                        {
                            header: 'Fiber LV',
                            text: 'Ritning över fibernät Lindåsvägen',
                        },
                        {
                            header: 'Anfallspolicy',
                        },
                        {
                            header: 'Mall motion till årsmötet',
                        },
                    ]
                }
            },
            infobrev: {
                type: 'files',
                files: {
                    header: 'Infobrev',
                    files: [
                        {
                            header: 'Välkomstbrev',
                        },
                        {
                            header: 'Julbrev 2017',
                        },
                        {
                            header: 'Sommarbrev 2017',
                        },
                        {
                            header: 'Julbrev 2016',
                        },
                        {
                            header: 'Sommarbrev 2016',
                        },
                    ]
                }
            },
            startGallery: {
                type: 'gallery',
                gallery: {
                    version: 'muted',
                    images: [
                        { url: './assets/images/image15.jpg' },
                        { url: './assets/images/image3.jpg' },
                        { url: './assets/images/image5.jpg' },
                        { url: './assets/images/image17.jpg' },
                        { url: './assets/images/image18.jpg' },
                        { url: './assets/images/image19.jpg' }
                    ]
                }
            }
        }; //modules
        return modules[id];
    };
    ContentService.prototype.getArticle = function (id) {
        var articles = {
            startArticle: {
                type: 'article',
                article: {
                    version: 'muted',
                    text: "\n            ## Om f\u00F6reningen\n      \n            \u00D6stra Lind\u00E5s anl\u00E4ggningssamf\u00E4llighetsf\u00F6rening bel\u00E4get \u00F6ster om gamla S\u00E4r\u00F6v\u00E4gen i s\u00F6dra Billdal. L\u00E4nsgr\u00E4nsen till Hallands l\u00E4n ligger enbart n\u00E5gra meter s\u00F6der om \u00D6stra Lind\u00E5s.\n            Omr\u00E5det byggdes huvudsakligen under 1972 och idag omfattar samf\u00E4lligheten totalt 135 hush\u00E5ll p\u00E5 Lind\u00E5sv\u00E4gen 8-128 och Billdals Aspv\u00E4g 2-148.\n      \n            Angr\u00E4nsande till omr\u00E5det ligger Lind\u00E5sskolan som har cirka 590 elever fr\u00E5n f\u00F6rskoleklass till \u00E5rskurs 9. P\u00E5 skolan finns ett fritidshem med fyra avdelningar. I n\u00E4romr\u00E5det finns det f\u00F6rskolor; Lindebov\u00E4gen, S\u00F6dra S\u00E4r\u00F6v\u00E4gen( \u00E4ven k\u00E4nd som Sommarbo) och Kyrkv\u00E4gen.\n            F\u00F6reningen f\u00F6rvaltar den gemensamma anl\u00E4ggningssamf\u00E4lligheten genom en styrelse som f\u00F6ljer f\u00F6reningens lagar stadgar och de lagar som g\u00E4ller f\u00F6r samf\u00E4llighetsf\u00F6reningar.\n      \n            Om Du \u00F6nskar f\u00F6r\u00E4ndringar \u00E4r du v\u00E4lkommen att l\u00E4mna in skriftlig motion senast 10 februari till styrelsens ordf\u00F6rande (anv\u00E4nd g\u00E4rna [den h\u00E4r mallen](/dokument)). Du \u00E4r givetvis mycket v\u00E4lkommen med f\u00F6rb\u00E4ttringsf\u00F6rslag som du l\u00E4mpligast st\u00E4ller till styrelsen eller l\u00E4mplig ledamot.\n            St\u00E4ddagar h\u00E5lls normalt tv\u00E5 g\u00E5nger per \u00E5r, v\u00E5r och h\u00F6st. Det \u00E4r mycket viktigt att alla st\u00E4ller upp, d\u00E5 ansvaret att h\u00E5lla omr\u00E5det i ordning vilar p\u00E5 alla. Risken \u00E4r annars att \u00E5rsavgiften m\u00E5ste h\u00F6jas f\u00F6r att bekosta st\u00E4dning, rabatt- och buskv\u00E5rd etc.\n            Enligt \u00E5rsm\u00F6tes beslut 2017 ger ett aktivt deltagande under st\u00E4ddagarna en \u00E5terbetalning p\u00E5 1000:-  per st\u00E4d tillf\u00E4lle. Om man ej kan deltaga p\u00E5 st\u00E4ddag och vill slippa kostnaden skall man meddela n\u00E5gon i styrelsen eller omr\u00E5desansvariga, sk st\u00E4dledare, f\u00F6r att f\u00E5 en uppgift som kan utf\u00F6ras p\u00E5 annan dag \u00E4n st\u00E4ddag.\n      \n            I omr\u00E5det finns en landhockeybana som f\u00F6reningen underh\u00E5ller och alla omr\u00E5dets medlemmar \u00E4r v\u00E4lkomna att anv\u00E4nda. Respektera de ordningsregler som finns uppsatta invid banan.\n            Tennisbanan \u00E4gs av G\u00F6teborgs stad och underh\u00E5lls dessv\u00E4rre d\u00E5ligt. Det g\u00E5r dock att spela p\u00E5 banan.\n          "
                }
            },
            reglerArticle: {
                type: 'article',
                article: {
                    text: "\n            ## Regler och praxis\n            ### Parkering \n            Parkering \u00E4r till\u00E5ten 1 dygn f\u00F6r b\u00E5de boende och g\u00E4ster p\u00E5 de parkeringar som \u00E5terfinns i anslutning till garagen.\n            \n            Parkering inom omr\u00E5det \u00E4r **f\u00F6rbjuden**. Det \u00E4r dock till\u00E5tet att dagtid k\u00F6ra in f\u00F6r av-, p\u00E5lastning och d\u00E4refter omg\u00E5ende ta ut bilen ur omr\u00E5det. Inom omr\u00E5det \u00E4r det g\u00E5ngfart som g\u00E4ller f\u00F6r v\u00E5ra bilar, t\u00E4nk p\u00E5 v\u00E5ra barn som inte f\u00F6rv\u00E4ntar sig en bil n\u00E4r de kommer i full fart runt ett h\u00F6rne.\n            F\u00F6r att \u00F6ppna bommarna beh\u00F6vs en A-nyckel (gammal modell) och i vissa fall d\u00E4r det finns dubbla bommar beh\u00F6vs en trekantsnyckel. Dessa finns b\u00E5da att k\u00F6pa hos l\u00E5ssmed, l\u00E5na en grannes om du \u00E4r os\u00E4ker p\u00E5 vilken det \u00E4r som kr\u00E4vs. Var noga med att st\u00E4nga bommen efter er!\n            \n            Anv\u00E4nd INTE cykel/g\u00E5ngbana eller gr\u00E4smatta f\u00F6r in/utfart eller uppst\u00E4llning.\n            \n            Parkering p\u00E5 spolplattorna \u00E4r inte till\u00E5ten. Respektera din granne som flyttat till trevliga och rena \u00D6stra Lind\u00E5s vid havet...\n            \n            ### St\u00F6rande ljud\n            Styrelsen fick vid \u00E5rsst\u00E4mman 2010 i uppdrag att ta fram regler f\u00F6r n\u00E4r maskiner och annan st\u00F6rande verksamhet skall vara till\u00E5ten inom f\u00F6reningen. Visst m\u00E5ste man f\u00E5 lov att renovera/reparera sitt hus, klippa/trimma gr\u00E4smattor och ut\u00F6va hobbyarbeten p\u00E5 helger och kv\u00E4llar, men man kan v\u00E4lja typ av arbete efter tidpunkt f\u00F6r utf\u00F6randet.\n            \n            Kommunen har satt en tidsgr\u00E4ns 07:00-19:00 p\u00E5 vardagar samt med reducerad bullerniv\u00E5  till 22:00 p\u00E5 vardagskv\u00E4llar/l\u00F6rdagar/s\u00F6n- och helgdagar.\n            \n            Samf\u00E4llighetens \u00E5rsm\u00F6te har beslutat att fredag-s\u00F6ndag samt helgdagar under den varma delen av \u00E5ret ska buller begr\u00E4nsas efter 18:00 och innan 08:00. Om man har behov av att jobba utanf\u00F6r dessa begr\u00E4nsningar, prata med grannarna!\n            \n            ### Moped\u00E5kning\n            Moped f\u00E5r ej k\u00F6ras inom omr\u00E5det av varken ungdom eller vuxen. Vid infarterna till omr\u00E5det finns skyltar som tydligt visar detta. Vi vill be Er som har moped\u00E5kande ungdomar att informera dem och deras bes\u00F6kande kamrater om vad som g\u00E4ller.\n            \n            ### Husdjur\n            Alla typer av husdjur m\u00E5ste vara kopplade i omr\u00E5det och f\u00E5r ej springa l\u00F6sa. Hundar och katter b\u00F6r ej vistas runt lekplatserna. \u00C4ven husdjur m\u00E5ste givetvis g\u00E5 p\u00E5 toaletten. Var v\u00E4nlig st\u00E4da upp efter fullbordat bes\u00F6k s\u00E5 att \u00F6vriga i omr\u00E5det slipper trampa runt i avf\u00F6ring etc!\n            \n            ### B\u00E5tar - Trailers- Husvagnar m.m. \n            Det \u00E4r **ej till\u00E5tet** att st\u00E4lla upp b\u00E5tar, trailers, husvagnar m.m. f\u00F6r vintern p\u00E5 Samf\u00E4llighetens mark. Detta inkluderar \u00E4ven v\u00E5ra garage.\n            \n            ### Ers\u00E4ttning fr\u00E5n kassan\n            Enligt styrelseprotokoll skall den som yrkar p\u00E5 ers\u00E4ttning fr\u00E5n Samf\u00E4llighetens kassa ha f\u00F6rankrat ink\u00F6pet hos n\u00E5gon styrelseledamot dessf\u00F6rinnan. En ensam styrelseledamot kan tillstyrka belopp upp till 1.000 SEK utan \u00F6vriga styrelsens eller \u00E5rsm\u00F6tets godk\u00E4nnande. Rekvisition kr\u00E4vs om godk\u00E4nda ink\u00F6p g\u00F6rs mot faktura eller efterkrav.\n            \n            ### Avfall\n            Det \u00E4r f\u00F6rbjudet att sl\u00E4nga tr\u00E4dg\u00E5rdsavfall eller fyllnadsmaterial (jord, lera etc.) i skogen runt omr\u00E5det. Br\u00E4nnbart tr\u00E4dg\u00E5rdsavfall fr\u00E5n egen tomt \u00E4r till\u00E5tet att sl\u00E4nga i de sopbilar som anv\u00E4nds vid st\u00E4ddagarna.\n            I samband med f\u00F6r\u00E4ndringen av sophanteringen 2005 f\u00F6r hush\u00E5llen i omr\u00E5det har styrelsen tagit fram f\u00F6ljande policy f\u00F6r att v\u00E4gleda f\u00F6reningens medlemmar. \n\n            [L\u00E4nk till policy ](dokumentu)\n            \n            ### Garage\n            Varje medlem i Samf\u00E4lligheten tillhandah\u00E5lls en parkeringsplats i till Samf\u00E4lligheten tillh\u00F6rande garagel\u00E4ngor.\n            \n            Som Samf\u00E4llighetsmedlem betalar du ingen fastighetsskatt f\u00F6r garageplatsen. Enligt senaste fastighetstaxering \u00E4r markv\u00E4rdet f\u00F6r parkeringsplatsen ca: 25 000:-. \n            \n            Enligt \u00E5rsm\u00F6tesbeslut 2014 \u00E4r det f\u00F6rbjudet att s\u00E4tta upp garageports\u00F6ppnare som ej monteras av beh\u00F6rig mont\u00F6r/firma. Detta f\u00F6r att porten skall vara s\u00E4ker i funktion och elanslutning.\n            \n            Om medlemmen inte utnyttjar platsen f\u00F6r parkering av egen bil skall den \u00F6verl\u00E5tas till styrelsen f\u00F6r \"utl\u00E5ning\" till annan medlem under den tid medlemmen inte anv\u00E4nder platsen. Detta f\u00F6r att minska problemen med f\u00F6r f\u00E5 parkeringsplatser inom Samf\u00E4llighetens omr\u00E5de.\n            \n            Garageplatsen f\u00E5r inte utnyttjas f\u00F6r n\u00E5got annat \u00E4ndam\u00E5l ut\u00F6ver parkering f\u00F6r medlemmens bil och f\u00F6rvaring av billtillh\u00F6righeter. Om det vid h\u00E4ndelse av brand i garagen finns lagrat annat br\u00E4nnbart material s\u00E5som m\u00F6bler, tr\u00E4, l\u00E5dor, papp etc. som kan f\u00F6rv\u00E4rra branden \u00E4r det risk f\u00F6r att f\u00F6rs\u00E4kringsbolaget ej betalar ut full ers\u00E4ttning till Samf\u00E4lligheten.\n            \n            Den som enligt ovan utnyttjar parkeringsplatsen f\u00F6r annat \u00E4ndam\u00E5l \u00E4n bilparkering m\u00E5ste allts\u00E5 dessutom teckna till\u00E4ggsf\u00F6rs\u00E4kring f\u00F6r eget \u00E4ndam\u00E5l ut\u00F6ver ovan angivna kostnader och kan dessutom bli skadest\u00E5ndsskyldig f\u00F6r skador p\u00E5 garagebyggnaden.\n            \n            Parkeringsplatserna i garagel\u00E4ngorna \u00E4r projekterade s\u00E5 att det skall parkeras en bil/plats, det vill s\u00E4ga att bild\u00F6rrarna skall kunna \u00F6ppnas in p\u00E5 platsen bredvid. Det \u00E4r d\u00E4rmed f\u00F6rbjudet att lagra material eller att s\u00E4tta upp v\u00E4gg under j\u00E4rnbalken som \u00E4r upplagd mellan portarna.\n            \n            Till varje garageport finns det 3 nycklar som fastighets\u00E4garen ansvarar f\u00F6r. Om man beh\u00F6ver k\u00F6pa en ny nyckel s\u00E5 k\u00F6ps dessa via V\u00E4stsvenska Port & El  http://shop.vpe.se/ F\u00F6r att kunna best\u00E4lla en nyckel beh\u00F6ver du det nummer som finns p\u00E5 l\u00E5scylindern.\n            \n            \n            \n            ### Luftv\u00E4rmepumpar, airconditioners och parabolantenner.\n            Styrelsen har f\u00F6reslagit f\u00F6ljande riktlinjer vid installation av luftv\u00E4rmepumpar, airconditioners och parabolantenner i omr\u00E5det:\n            \n            Installation skall ske p\u00E5 ett s\u00E4tt som minimerar p\u00E5verkan p\u00E5 n\u00E4rmilj\u00F6n och med st\u00F6rsta h\u00E4nsyn tagen till grannfastigheter.\n            \n            Fastighets\u00E4garen st\u00E5r f\u00F6r alla kostnader i samband installation.\n            Externa enheter s\u00E5som ex. v\u00E4rmev\u00E4xlare och parabolantenner\n            \n            placeras l\u00E4mpligen i atriumg\u00E5rden eller m\u00F6jligen p\u00E5 framsidan huset\n            * f\u00E5r endast monteras p\u00E5 den egna fastigheten inom tomtgr\u00E4ns\n            * f\u00E5r inte placeras p\u00E5 fasad mot granne\n            * f\u00E5r inte placeras p\u00E5 fasad mot bygata\n            Utdelat informationsblad.\n            \n            Tr\u00E4df\u00E4llning\n            Samf\u00E4lligheten \u00E4ger gemensamt mark och p\u00E5 den st\u00E5ende tr\u00E4d/skog. F\u00F6r att h\u00E5lla efter denna har vi from 2006 anlitat entrepren\u00F6r samt b\u00F6rjat avs\u00E4tta medel i skogsv\u00E5rdsfond. F\u00F6ljande policy har tagits fram f\u00F6r att v\u00E4gleda f\u00F6reningens medlemmar.\n            \n            ### Policy f\u00F6r tr\u00E4df\u00E4llning (g\u00E4ller tr\u00E4d p\u00E5 samf\u00E4llighetens mark):\n            \n            * All f\u00E4llning skall godk\u00E4nnas skriftligen av styrelsen och ber\u00F6rda grannar.\n            * Samf\u00E4lligheten bekostar f\u00E4llning och bortforsling av tr\u00E4d om fara f\u00F6r person eller egendom f\u00F6religger. Vid behov inkallas besiktningsman.\n            * F\u00E4llning av andra orsaker skall alltid godk\u00E4nnas av styrelsen och bekostas av fastighets\u00E4garen (\u00E4ven bortforsling av virke).\n\n          "
                }
            },
            faktaArticle: {
                type: 'article',
                article: {
                    text: "\n          ## F\u00F6reningsfakta\n\n          **F\u00F6reningsnamn**       \n          Anl\u00E4ggningssamf\u00E4lligheten \u00D6stra Lind\u00E5s \n\n          **Fastighetsbeteckning**  \n          Lind\u00E5s GA:10 \n\n          **Organisationsnummer**\t  \n          717904-7787 \n          \n          **Adress**\t              \n          Billdals Aspv\u00E4g 70, 427 39 BILLDAL \n          \n          **Hemsida**\t              \n          http://www.ostralindas.se \n          \n          **Kontakt**\t              \n          styrelsen@ostralindas.se \n          "
                }
            },
            stadgarArticle: {
                type: 'article',
                article: {
                    text: "\n            ## Stadgar\n\n            ** 1. ** Samf\u00E4llighetens firma \u00E4r Anl\u00E4ggningssamf\u00E4lligheten \u00D6stra Lind\u00E5s.\n        \n            ** 2. ** Samf\u00E4lligheten utg\u00F6rs av fastigheterna:\n              * Lind\u00E5s 1:144 - 1:184\n              * Lind\u00E5s 1:186 - 1:224\n              * Lind\u00E5s 1:228 - 1:249\n              * Lind\u00E5s 1:252 - 1:260\n              * Lind\u00E5s 1:415 - 1:438\n            \n        \n            ** 3. ** Samf\u00E4lligheten har till \u00E4ndam\u00E5l att underh\u00E5lla och driva den gemensamhetsanl\u00E4ggning, som enligt lagen om gemensamhetsanl\u00E4ggningar inr\u00E4ttats f\u00F6r de fastigheter, som ing\u00E5r i samf\u00E4lligheten. \n            Till gemensamhetsanl\u00E4ggningen h\u00F6r:\n              * Garage med belysning och kraftuttag samt parkeringsplatser och i anslutning till dessa inr\u00E4ttade anordningar f\u00F6r reng\u00F6ring av fordon.\n              * G\u00E5ngv\u00E4gar, lekplatser och gr\u00F6nytor.\n              * Elektrisk ytterbelysning och gemensamma elledningar till den del kraftleverant\u00F6ren ej svarar f\u00F6r anl\u00E4ggningen.\n              * Centralantennanl\u00E4ggning f\u00F6r radio och television med tillh\u00F6rande anordningar och ledningar.\n              * Serviceledningar f\u00F6r vatten och avlopp, dock ej allm\u00E4n vatten- och avloppsanl\u00E4ggning.\n              \n            \n            ** 4. ** F\u00F6r samf\u00E4lligheten skall finnas en styrelse, som skall utses bland fastighets\u00E4garna. Styrelsen skall best\u00E5 av fem ledam\u00F6ter j\u00E4mte en suppleant och ha sitt s\u00E4te i Billdal.\n            Styrelsen \u00E4r beslutsf\u00F6r om minst tre ledam\u00F6ter \u00E4r n\u00E4rvarande.\n            \n            ** 5. ** F\u00F6r granskning av styrelsens f\u00F6rvaltning och samf\u00E4llighetens r\u00E4kenskaper skall finnas tv\u00E5 revisorer j\u00E4mt en suppleant.\n            \n            ** 6. ** Styrelseledam\u00F6ter, styrelsesuppleant, revisorer och revisorsuppleant v\u00E4ljes \u00E5rligen p\u00E5 ordinarie samf\u00E4llighetsst\u00E4mma f\u00F6r tiden intill dess n\u00E4sta ordinarie st\u00E4mma h\u00E5llits.Ordf\u00F6rande utses av st\u00E4mman och styrelsen utser inom sig sekreterare och kass\u00F6r.\n            \n            ** 7. ** Samf\u00E4llighetens r\u00E4kenskaps\u00E5r sammanfaller med kalender\u00E5ret.\n            \n            ** 8. ** Det \u00E5ligger styrelsen att f\u00F6ra r\u00E4kenskaper \u00F6ver f\u00F6rvaltningen. R\u00E4kenskaperna skall h\u00E5llas tillg\u00E4ngliga f\u00F6r revisorer senast en m\u00E5nad efter r\u00E4kenskaps\u00E5rets utg\u00E5ng. \n            F\u00F6reningen skall \u00E5rligen fondera minst 0,3% av nyanskaffningsv\u00E4rdet till en s\u00E4rskild underh\u00E5llsfond. Syftet med fonden \u00E4r att s\u00E4kerst\u00E4lla underh\u00E5ll och f\u00F6rnyelse av gemensamhetsanl\u00E4ggningen som beskrivs under 3. \u00D6versyn av detta belopp skall g\u00F6ras varje \u00E5r.\n              \n              Styrelsen skall uppr\u00E4tta f\u00F6rvaltningsber\u00E4ttelser f\u00F6r till\u00E4ndag\u00E5nget verksamhets\u00E5r samt uppg\u00F6ra f\u00F6rslag till inkomst- och utgiftsstat och till debiteringsl\u00E4ngd f\u00F6r kommande r\u00E4kenskaps\u00E5r.\n              \n              Styrelsen skall tillse att under dess f\u00F6rvaltning st\u00E5ende egendom \u00E4r f\u00F6rs\u00E4krad till betryggande belopp. Kontanta tillg\u00E5ngar skall, bortsett fr\u00E5n obetydliga belopp, ins\u00E4ttas p\u00E5 bank.\n              \n              Vid styrelsens sammantr\u00E4den skall f\u00F6ras protokoll.\n            \n            ** 9. **Ordinarie samf\u00E4llighetsst\u00E4mma skall h\u00E5llas varje \u00E5r i mars eller april.\n            Extra samf\u00E4llighetsst\u00E4mma h\u00E5lles d\u00E5 styrelsen finner omst\u00E4ndigheter f\u00F6ranleda d\u00E4rtill, d\u00E5 revisorer s\u00E5 p\u00E5fordrar eller d\u00E5 minst en femtedel av samtliga r\u00F6stber\u00E4ttigade medlemmar hos styrelsen skriftligen beg\u00E4r detta med angivande av \u00E4rende som \u00F6nskas behandlat.Kallelse till samf\u00E4llighetsst\u00E4mma skall ske skriftligen. Kallelsen skall uts\u00E4ndas senast tv\u00E5 veckor f\u00F6re ordinarie och senast en vecka f\u00F6re extra samf\u00E4llighetsst\u00E4mma.Vid kallelsen till ordinarie samf\u00E4llighetsst\u00E4mma b\u00F6r bifogas styrelsens f\u00F6rvaltningsber\u00E4ttelse och revisionsber\u00E4ttelse.\n            \n            ** 10. Mom. 1 **\n            Vid ordinarie samf\u00E4llighetsst\u00E4mma skall f\u00F6ljande \u00E4renden f\u00F6rekomma:\n            \n            1. Justering av r\u00F6stl\u00E4ngd\n            2. Val av ordf\u00F6rande vid st\u00E4mman\n            3. Val av tv\u00E5 justeringsm\u00E4n\n            4. Fr\u00E5ga om kallelse till st\u00E4mman skett beh\u00F6rigen\n            5. F\u00F6redragning av styrelsens f\u00F6rvaltningsber\u00E4ttelse f\u00F6r det f\u00F6rflutna r\u00E4kenskaps\u00E5ret\n            6. F\u00F6rdragning av revisorernas ber\u00E4ttelse \u00F6ver styrelsens f\u00F6rvaltning\n            7. Fr\u00E5ga om beviljande av ansvarsfrihet f\u00F6r styrelsen\n            8. Fastst\u00E4llande av arvoden f\u00F6r styrelseledam\u00F6ter och revisorer\n            9. Fastst\u00E4llande av inkomst- och utgiftsstat f\u00F6r kommande \u00E5ret samt beslut i anledning av uppkommet \u00F6verskott eller underskott tidigare \u00E5r.\n            10. Fastst\u00E4llande av debiteringsl\u00E4ngd, upptagande av det belopp, som skall uttaxeras fr\u00E5n varje fastighets\u00E4gare, och tiden f\u00F6r inbetalningen\n            11. Val av ordf\u00F6rande och \u00F6vriga styrelseledam\u00F6ter samt styrelsesuppleant\n            12. Val av revisorer och revisorsuppleant\n            13. Utseende av valberedning on tre ledam\u00F6ter, varav en ordf\u00F6rande, j\u00E4mt tv\u00E5 suppleanter f\u00F6r f\u00F6rberedande av val j\u00E4mlikt 11) och 12)\n            14. Inkomna motioner. Motioner avseende ekonomiska \u00E5taganden skall, f\u00F6r att kunna upptas till behandling vid ordinarie st\u00E4mma, vara styrelsen tillhanda f\u00F6re den 10 februari.\n            15. \u00D6vriga \u00E4renden\n            \n            ** Mom. 2 **\n            Vid extra samf\u00E4llighetsst\u00E4mma f\u00E5r ej andra \u00E4renden bli f\u00F6rem\u00E5l f\u00F6r beslut \u00E4n de som angivits i kallelsen till st\u00E4mman.\n            \n            ** Mom. 3 **\n            R\u00F6stning sker \u00F6ppet; dock skall val f\u00F6rr\u00E4ttas med slutna sedlar om n\u00E5gon s\u00E5 \u00F6nskar. \n            Vid lika r\u00F6stetal avg\u00F6res val genom lottning. I andra fr\u00E5gor g\u00E4ller vid lika r\u00F6stetal den mening som bitr\u00E4des av ordf\u00F6randen.\n            \n            ** 11. ** \u00C4ndring av dessa stadgar skall f\u00F6r att bli g\u00E4llande antagas av tv\u00E5 p\u00E5 varandra f\u00F6ljande st\u00E4mmor med minst tv\u00E5 m\u00E5naders mellanrum, varav en skall vara ordinarie st\u00E4mma. \n            Beslut om stadge\u00E4ndring skall tillika ange dagen f\u00F6r \u00E4ndringens ikrafttr\u00E4dande.\n            \n            Att ovanst\u00E5ende stadgar blivit antagna p\u00E5 extra samf\u00E4llighetsst\u00E4mma den 19.9 1973 i Billdal betyga:\n            \n            \u00C4ndringar g\u00E4llande underh\u00E5llsfond gjorda enligt \u00E5rsm\u00F6te 1991 och 1992.\n            \n            Se \u00E4ven [Lag (1973:1150) om f\u00F6rvaltning av samf\u00E4lligheter](https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-19731150-om-forvaltning-av-samfalligheter_sfs-1973-1150)\n          "
                }
            },
            stadDagarOneArticle: {
                type: 'article',
                article: {
                    text: "\n          ## St\u00E4ddagar\n          St\u00E4ddagar h\u00E5lls normalt tv\u00E5 g\u00E5nger per \u00E5r, v\u00E5r och h\u00F6st. Det \u00E4r mycket viktigt att alla som orkar st\u00E4ller upp, d\u00E5 ansvaret att h\u00E5lla omr\u00E5det i ordning vilar p\u00E5 alla. Risken \u00E4r annars att \u00E5rsavgiften m\u00E5ste h\u00F6jas f\u00F6r att bekosta st\u00E4dning, rabatt- och buskv\u00E5rd etc. Enligt \u00E5rsm\u00F6tes beslut 2017 debiteras inte 2000:- per fastighet vid aktivt deltagande l\u00F6rdag och s\u00F6ndag p\u00E5 v\u00E5ra tv\u00E5 st\u00E4dhelger eller annan dag enligt \u00F6verenskommelse. Om man ej kan deltaga p\u00E5 st\u00E4ddag och vill slippa kostnaden skall man meddela n\u00E5gon i styrelsen eller omr\u00E5desansvariga, sk st\u00E4dledare, f\u00F6r att f\u00E5 en uppgift som kan utf\u00F6ras p\u00E5 annan dag \u00E4n st\u00E4ddag.\n          \n          Omr\u00E5desansvarig ansvarar f\u00F6r f\u00F6ljande:\n\n          \u00D6versyn av omr\u00E5det innan st\u00E4ddagar\n\n          * F\u00F6rdelning av arbetsuppgifter under st\u00E4ddagar\n\n          *  Allm\u00E4n kontroll av \"sitt\" omr\u00E5de Information till nyinflyttade (denna skrivelse), matrikel samt kallelse och protokoll fr\u00E5n senaste \u00E5rsm\u00F6tet. Materialet kan erh\u00E5llas fr\u00E5n styrelsens sekreterare.\n\n          * Innan varje st\u00E4ddag (ca 2-3 veckor innan) samlas samtliga omr\u00E5desansvariga f\u00F6r genomg\u00E5ng f\u00F6r att se vad som m\u00E5ste inhandlas till st\u00E4ddagen. Styrelsen sammankallar.\n\n          F\u00F6ljande material skall finnas utanf\u00F6r f\u00F6rr\u00E5det vid Billdals Aspv\u00E4g 122:\n\n          | Antal | Object |\n          | ----- | ------ |\n          | 1 st | Skopa f\u00F6r rensning av brunnar |\n          | 3 st | Skottk\u00E4rror |\n          | 1 st | Stege, tv\u00E5delad |\n          | 1 st | Sn\u00F6sl\u00E4de |\n\n          Om n\u00E5got g\u00E5r s\u00F6nder ansvarar Du f\u00F6r att enheten repareras. Kostnaderna regleras av samf\u00E4llighetens kass\u00F6r om inte v\u00E5rdsl\u00F6shet kan p\u00E5visas.\n\n          "
                }
            },
            stadDagarTwoArticle: {
                type: 'article',
                article: {
                    text: "\n            ## Att g\u00F6ra p\u00E5 st\u00E4ddagarna\n\n            **Buskar**\n\n            Kontrollera och \u00E5tg\u00E4rda f\u00F6rv\u00E4xta planteringar vid lekplatser, garage m.m.\n        \n            ** Staket **\n\n            Byt ut skadade br\u00E4dor f\u00F6r staket vid lekplatser, garagel\u00E4ngor eller bygator. M\u00E5la om vid behov.\n        \n            ** Lekplatser**\n\n            Reparation eller utbyte av skadade leksaker. Materialbehov anm\u00E4les till styrelsen.\n        \n            ** Garage**\n\n            \u00D6versyn och eventuell m\u00E5lning Kontrollera stupr\u00F6r. Kontrollera att alla garage g\u00E5r att l\u00E5sa. Sm\u00F6rjning av portmekanism.\n        \n            ** Parkeringsplatser**\n\n            Kontroll och eventuell f\u00F6rb\u00E4ttring av linjem\u00E5lning.\n        \n            ** Omr\u00E5desv\u00E4gar**\n\n            Rapportering till styrelsen g\u00E4llande skador i asfalt typ bubblor, h\u00E5lor eller liknade.\n        \n            ** Belysning**\n\n            Kontroll av lampor och att eldosor ej \u00E4r \u00F6ppnade.\n        \n            ** Brandposter**\n\n            Kontrollera att posterna \u00E4r i gott skick och \u00E5tkomliga f\u00F6r brandk\u00E5ren. Skall finnas ex p\u00E5 varje lekplats. Kontrollera \u00E4ven att pekskylten som pekar mot brandposten pekar \u00E5t r\u00E4tt h\u00E5ll.\n        \n            ** Brunnslock**\n            Kontroll av att lock ej saknas samt att locken ej \u00E4r l\u00E4tta f\u00F6r barn att flytta. Lock av s\u00E5 kallad kupad modell skall vara l\u00E5sta.\n        \n            ** Grus**\n\n            Allt grus/flis fr\u00E5n vinterns v\u00E4gh\u00E5llning skall sopas bort och l\u00E4ggas i grusl\u00E5dor.\n        \n            ** Datum**\n\n            Aktuellt datum f\u00F6r st\u00E4ddagar hittar du i protokollet fr\u00E5n \u00C5rsm\u00F6tet\n            \n            ** Gr\u00F6nomr\u00E5den**\n\n            Samf\u00E4lligheten \u00E4ger gemensamt mark och p\u00E5 den st\u00E5ende tr\u00E4d/skog. F\u00F6r att h\u00E5lla efter denna har vi from 2006 anlitat entrepren\u00F6r samt b\u00F6rjat avs\u00E4tta medel i skogsv\u00E5rdsfond. F\u00F6ljande policy har tagits fram f\u00F6r att v\u00E4gleda f\u00F6reningens medlemmar.\n            \n            * All f\u00E4llning skall godk\u00E4nnas skriftligen av styrelsen och ber\u00F6rda grannar.\n            * Samf\u00E4lligheten bekostar f\u00E4llning och bortforsling av tr\u00E4d om fara f\u00F6r person eller egendom f\u00F6religger. Vid behov inkallas besiktningsman.\n            * F\u00E4llning av andra orsaker skall alltid godk\u00E4nnas av styrelsen och bekostas av fastighets\u00E4garen (\u00E4ven bortforsling av virke).\n            \n            ## Gr\u00E4sklippning\n            * Gr\u00E4sklippning enl. kartor inkl. puts 20-22 ggr/ s\u00E4song 1 maj - 1 oktober.\n            * Slagning g\u00F6rs 1-2 ggr /\u00E5r vid norra parkeringen Billdals Aspv\u00E4g, pulkabacken, vid grind mot skolan samt g\u00E5ngtunneln under L\u00F6vskogsv\u00E4gen p\u00E5 beg\u00E4ran.\n            * Entrepen\u00F6r: Lindome Entreprenad AB\n            \n            #### Klippkarta norr\n        \n            ![Norr](./assets/images/klipp-norr.png)\n        \n            #### Klippkarta mitt\n        \n            ![Mitt](./assets/images/klipp-mitt.png)\n        \n            #### Klippkarta s\u00F6der\n        \n            ![S\u00F6der](./assets/images/klipp-soder.png)\n          "
                }
            },
            parkeringGarageArticle: {
                type: 'article',
                article: {
                    text: "\n            ## Parkeringsplatser\n            Parkering \u00E4r till\u00E5ten 1 dygn f\u00F6r b\u00E5de boende och g\u00E4ster p\u00E5 de parkeringar som \u00E5terfinns i anslutning till garagen.\n            \n            Parkering inom omr\u00E5det \u00E4r f\u00F6rbjuden. Det \u00E4r dock till\u00E5tet att dagtid k\u00F6ra in f\u00F6r av-, p\u00E5lastning och d\u00E4refter omg\u00E5ende ta ut bilen ur omr\u00E5det. Inom omr\u00E5det \u00E4r det g\u00E5ngfart som g\u00E4ller f\u00F6r v\u00E5ra bilar, t\u00E4nk p\u00E5 v\u00E5ra barn som inte f\u00F6rv\u00E4ntar sig en bil n\u00E4r de kommer i full fart runt ett h\u00F6rne.\n            F\u00F6r att \u00F6ppna bommarna beh\u00F6vs en A-nyckel (gammal modell) och i vissa fall d\u00E4r det finns dubbla bommar beh\u00F6vs en trekantsnyckel. Dessa finns b\u00E5da att k\u00F6pa hos l\u00E5ssmed, l\u00E5na en grannes om du \u00E4r os\u00E4ker p\u00E5 vilken det \u00E4r som kr\u00E4vs. Var noga med att st\u00E4nga bommen efter er!\n            \n            Anv\u00E4nd INTE cykel/g\u00E5ngbana eller gr\u00E4smatta f\u00F6r in/utfart eller uppst\u00E4llning.\n            \n            Parkering p\u00E5 spolplattorna \u00E4r inte till\u00E5ten. Respektera din granne som flyttat till trevliga och rena \u00D6stra Lind\u00E5s vid havet...\n            \n            B\u00E5tar - Trailers- Husvagnar m.m. Det \u00E4r ej till\u00E5tet att st\u00E4lla upp b\u00E5tar, trailers, husvagnar m.m. f\u00F6r vintern p\u00E5 Samf\u00E4llighetens mark. Detta inkluderar \u00E4ven v\u00E5ra garage.\n\n            ## Garage\n            Varje medlem i Samf\u00E4lligheten tillhandah\u00E5lls en parkeringsplats i till Samf\u00E4lligheten tillh\u00F6rande garagel\u00E4ngor.\n            \n            Som Samf\u00E4llighetsmedlem betalar du ingen fastighetsskatt f\u00F6r garageplatsen. Enligt senaste fastighetstaxering \u00E4r markv\u00E4rdet f\u00F6r parkeringsplatsen ca: 25 000:-.\n            \n            Enligt \u00E5rsm\u00F6tesbeslut 2014 \u00E4r det f\u00F6rbjudet att s\u00E4tta upp garageports\u00F6ppnare som ej monteras av beh\u00F6rig mont\u00F6r/firma. Detta f\u00F6r att porten skall vara s\u00E4ker i funktion och elanslutning.\n            \n            Om medlemmen inte utnyttjar platsen f\u00F6r parkering av egen bil skall den \u00F6verl\u00E5tas till styrelsen f\u00F6r \"utl\u00E5ning\" till annan medlem under den tid medlemmen inte anv\u00E4nder platsen. Detta f\u00F6r att minska problemen med f\u00F6r f\u00E5 parkeringsplatser inom Samf\u00E4llighetens omr\u00E5de.\n            \n            Garageplatsen f\u00E5r inte utnyttjas f\u00F6r n\u00E5got annat \u00E4ndam\u00E5l ut\u00F6ver parkering f\u00F6r medlemmens bil och f\u00F6rvaring av billtillh\u00F6righeter. Om det vid h\u00E4ndelse av brand i garagen finns lagrat annat br\u00E4nnbart material s\u00E5som m\u00F6bler, tr\u00E4, l\u00E5dor, papp etc. som kan f\u00F6rv\u00E4rra branden \u00E4r det risk f\u00F6r att f\u00F6rs\u00E4kringsbolaget ej betalar ut full ers\u00E4ttning till Samf\u00E4lligheten.\n            \n            Den som enligt ovan utnyttjar parkeringsplatsen f\u00F6r annat \u00E4ndam\u00E5l \u00E4n bilparkering m\u00E5ste allts\u00E5 dessutom teckna till\u00E4ggsf\u00F6rs\u00E4kring f\u00F6r eget \u00E4ndam\u00E5l ut\u00F6ver ovan angivna kostnader och kan dessutom bli skadest\u00E5ndsskyldig f\u00F6r skador p\u00E5 garagebyggnaden.\n            \n            Parkeringsplatserna i garagel\u00E4ngorna \u00E4r projekterade s\u00E5 att det skall parkeras en bil/plats, det vill s\u00E4ga att bild\u00F6rrarna skall kunna \u00F6ppnas in p\u00E5 platsen bredvid. Det \u00E4r d\u00E4rmed f\u00F6rbjudet att lagra material eller att s\u00E4tta upp v\u00E4gg under j\u00E4rnbalken som \u00E4r upplagd mellan portarna.\n            \n            Till varje garageport finns det 3 nycklar som fastighets\u00E4garen ansvarar f\u00F6r. Om man beh\u00F6ver k\u00F6pa en ny nyckel s\u00E5 k\u00F6ps dessa via V\u00E4stsvenska Port & El  http://shop.vpe.se/ F\u00F6r att kunna best\u00E4lla en nyckel beh\u00F6ver du det nummer som finns p\u00E5 l\u00E5scylindern.  \n\n            ## V\u00E4gar\n            Moped\u00E5kning\n            Moped f\u00E5r ej k\u00F6ras inom omr\u00E5det av varken ungdom eller vuxen. Vid infarterna till omr\u00E5det finns skyltar som tydligt visar detta. Vi vill be Er som har moped\u00E5kande ungdomar att informera dem och deras bes\u00F6kande kamrater om vad som g\u00E4ller.\n        \n            ### Sn\u00F6r\u00F6jning norr\n            ![Norr](./assets/images/vag-norr.gif)\n        \n            ### Sn\u00F6r\u00F6jning mitt\n            ![Mitt](./assets/images/vag-mitt.gif)\n        \n            ### Sn\u00F6r\u00F6jning s\u00F6der\n            ![S\u00F6der](./assets/images/vag-soder.gif)\n          "
                }
            },
            tvArticle: {
                type: 'article',
                article: {
                    text: "\n          ## TV utbud\n\n          Vid \u00E5rsm\u00F6tet hade en medlem en fr\u00E5ga om styrelsen kunde skriva ett avtal vad g\u00E4ller samma TV kanaler som idag men en uppdatering till ett antal HD kanaler samt HD box. Styrelsen fick i uppdrag att kolla detta med Villa\u00E4garna och har nu f\u00E5tt svar att detta \u00E4r helt OK. Merkostnad f\u00F6r Samf\u00E4lligheten \u00E4r 40:-(fyrtio)/\u00E5r f\u00F6r samtliga fastigheter.\n          \n          Vi kommer nu att dela ut information i brevl\u00E5dan vad du som fastighets\u00E4gare m\u00E5ste g\u00F6ras f\u00F6r att starta tillg\u00E5ngen av HD kanalerna fr\u00E5n 01 maj 2018.\n          Vi hoppas ni skall se detta som en positiv utveckling av omr\u00E5det och en kvalitetsf\u00F6rb\u00E4ttring. \n          Inneh\u00E5llet i kanalerna styr vi dock inte \u00F6ver.\n          \n          Med v\u00E4nlig h\u00E4lsning\n          Lars Hermanson\n          \n           \n          Ny TV genom fiber\n          Dessa kanaler distribueras okodat vilket inneb\u00E4r att ni kan se kanalerna p\u00E5 alla anslutna TV utan box eller programkort. Efter anslutning av TV till mediakonvertern beh\u00F6ver ni g\u00F6ra en ny kanals\u00F6kning p\u00E5 TV:n.\n           \n          ### TV-kanaler\n          * SVT1\t E5\n          * SVT2\t E8\n          * TV3\t S13\n          * TV4\t S8\n          * Barnkanalen/SVT24\t E7\n          * Kunskapskanalen\tE10\n          * Kanal 5\tS11\n          * TV 6\tS15 \n          * Sjuan\tS19\n          * Discovery Channel\tS18\n          * MTV\tC6\n          * TV 8\tS7\n          * Kanal 9\tS17\n          * Kanal 11\tS16\n          * TV10\tC12\n          * TV12\tC11\n           \n          Dessutom distribueras SVT1, SVT2, SVT24, Barnkanalen, Kunskapskanalen och TV4 digitalt okodat i format DVB-C. Det inneb\u00E4r att ni kan se dessa kanaler i digital kvalit\u00E9 p\u00E5 alla anslutna TV med inbyggd DVB-C box utan programkort.\n          \n          Utrustningen \u00E4r nu installerad (maj 2015). G\u00E5 in p\u00E5 www.canaldigital.se f\u00F6r mer information. Basutbudet (ovan) ing\u00E5r i samf\u00E4llighetsavgiften. Om du \u00F6nskar fler kanaler, kontakta CanalDigital och det \u00E4r p\u00E5 din egen r\u00E4kning.\n          \n          Eftersom det varierar hur man st\u00E4ller in kanalerna beroende p\u00E5 tv-modell, ber vi er att l\u00E4sa instruktionsboken till er tv f\u00F6r korrekt inst\u00E4llning.\n          \n          ### Till\u00E4ggstj\u00E4nster som betalas av respektive hush\u00E5ll;\n          Bredband och telefoni levereras av Ownit, konstakta styrelsen f\u00F6r uppgifter n\u00E4r ni ska best\u00E4lla dessa tj\u00E4nster (g\u00E4ller inte under projektet, d\u00E5 har information ang\u00E5ende detta skickats ut per mail). \n          \n          Extra kanalpaket, kontakta Canal Digital och d\u00E5 \u00E4r det kabel-TV ni vill best\u00E4lla.\n          \n          ## Felanm\u00E4lan \n          ### TV \u2013 det \u00E4r Canal Digital som ska kontaktas. Men innan ni kontaktar Canal Digital, fr\u00E5ga era grannar om de har samma problem. \n          \n          Om ni \u00E4r de enda med problemet, testa att st\u00E4nga av konvertern och l\u00E5t den vara avst\u00E4ngd en minut innan ni startar om den. Om felet ej avhj\u00E4lps, testa med en annan antennkabel. Om felet kvarst\u00E5r, kontakta Canal Digital. Mer information om fels\u00F6kning hittar du p\u00E5 Canal Digitals hemsida\n          \n          Canal Digiatal felanm\u00E4lan, ring  0770 - 11 55 11 (knapptryck #1 befintlig kund, knappa in personnummer, #2 TV via kabeln\u00E4t, #3 teknisk information eller felanm\u00E4lan) eller skicka via deras hemsida, Kundservice \n          \n          ### Bredband/Telefoni \u2013 kontakta Ownit, 08 - 525 07 300 eller maila info@ownit.se   \n          \n          P\u00E5 Ownits hemsida finns information om p\u00E5g\u00E5ende k\u00E4nda driftst\u00F6rningar https://www.ownit.se/kundservice/driftstatus\n          \n          Ownit har mycket bra guider och information p\u00E5 sin hemsida https://www.ownit.se/kundservice/guider  \n          \n          Bl.a. om ni har best\u00E4llt bredband och inte har den f\u00F6rv\u00E4ntade hastigheten tr\u00E5dl\u00F6st, l\u00E4s guiden f\u00F6r hur man kan optimera hastigheten https://www.ownit.se/kundservice/guider/bredband-ownits-wifi-guide Den konverter/router som ingick i paketet \u00E4r inte den b\u00E4sta de har och kan d\u00E4rmed beh\u00F6va lite f\u00F6rst\u00E4rkning i form av en router, en medlem skriver f\u00F6ljande; \n          \n          K\u00F6pte en routern (p\u00E5 media market 1690kr)som Ownit rekommenderad (ASUS66 n\u00E5gonting hette den som Ownit rekommenderad vi k\u00F6pte den \u00F6vre ASUS68) bad dem brygga en lanutg\u00E5ng i den fasta konverten ( detta sker via telefon fr\u00E5n Ownit),  en n\u00E4tverkskabel drogs fr\u00E5n den fasta konverten till den nya routern. Valde en 15 meters kabel s\u00E5 att den nya routern kom i mitten av huset. Wow vilken skillnad det blev \u00E4r riktigt n\u00F6jda nu.\n          \n          "
                }
            },
            privacyArticle: {
                type: 'article',
                article: {
                    text: "\n            ## Privacy\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ipsum at nunc pellentesque commodo. Phasellus mattis arcu eleifend sem ornare euismod. Ut porttitor leo eget nibh sodales, quis imperdiet purus sodales. Vestibulum consequat leo lectus, nec iaculis ex cursus a. Aliquam efficitur neque mattis nibh molestie elementum. Nam mattis ex molestie imperdiet tincidunt. Nullam dictum a nibh ut tempor. Aenean eleifend maximus neque dapibus scelerisque. Aenean feugiat ante felis, quis pharetra est dapibus sed. Integer maximus tempor euismod. Fusce magna magna, elementum vitae nulla id, placerat dapibus ligula. Duis vitae erat vitae sapien tincidunt ullamcorper. Aenean faucibus ac purus quis mattis. Maecenas ut est blandit, porttitor nunc sed, ullamcorper purus.\n\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ipsum at nunc pellentesque commodo. Phasellus mattis arcu eleifend sem ornare euismod. Ut porttitor leo eget nibh sodales, quis imperdiet purus sodales. Vestibulum consequat leo lectus, nec iaculis ex cursus a. Aliquam efficitur neque mattis nibh molestie elementum. Nam mattis ex molestie imperdiet tincidunt. Nullam dictum a nibh ut tempor. Aenean eleifend maximus neque dapibus scelerisque. Aenean feugiat ante felis, quis pharetra est dapibus sed. Integer maximus tempor euismod. Fusce magna magna, elementum vitae nulla id, placerat dapibus ligula. Duis vitae erat vitae sapien tincidunt ullamcorper. Aenean faucibus ac purus quis mattis. Maecenas ut est blandit, porttitor nunc sed, ullamcorper purus.\n          "
                }
            },
            cookiesArticle: {
                type: 'article',
                article: {
                    text: "\n          ## Cookies\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ipsum at nunc pellentesque commodo. Phasellus mattis arcu eleifend sem ornare euismod. Ut porttitor leo eget nibh sodales, quis imperdiet purus sodales. Vestibulum consequat leo lectus, nec iaculis ex cursus a. Aliquam efficitur neque mattis nibh molestie elementum. Nam mattis ex molestie imperdiet tincidunt. Nullam dictum a nibh ut tempor. Aenean eleifend maximus neque dapibus scelerisque. Aenean feugiat ante felis, quis pharetra est dapibus sed. Integer maximus tempor euismod. Fusce magna magna, elementum vitae nulla id, placerat dapibus ligula. Duis vitae erat vitae sapien tincidunt ullamcorper. Aenean faucibus ac purus quis mattis. Maecenas ut est blandit, porttitor nunc sed, ullamcorper purus.\n\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ipsum at nunc pellentesque commodo. Phasellus mattis arcu eleifend sem ornare euismod. Ut porttitor leo eget nibh sodales, quis imperdiet purus sodales. Vestibulum consequat leo lectus, nec iaculis ex cursus a. Aliquam efficitur neque mattis nibh molestie elementum. Nam mattis ex molestie imperdiet tincidunt. Nullam dictum a nibh ut tempor. Aenean eleifend maximus neque dapibus scelerisque. Aenean feugiat ante felis, quis pharetra est dapibus sed. Integer maximus tempor euismod. Fusce magna magna, elementum vitae nulla id, placerat dapibus ligula. Duis vitae erat vitae sapien tincidunt ullamcorper. Aenean faucibus ac purus quis mattis. Maecenas ut est blandit, porttitor nunc sed, ullamcorper purus.\n          "
                }
            }
        }; //articles
        return articles[id];
    };
    ContentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ContentService);
    return ContentService;
}()); //contentService
exports.ContentService = ContentService;
//# sourceMappingURL=content.service.js.map