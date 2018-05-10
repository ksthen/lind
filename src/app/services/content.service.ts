import { Injectable } from '@angular/core';
import { Hero } from '../components/hero/hero.component';
import { News } from '../components/news/news.component';
import { Menu } from '../pages/footer/footer.component';
import { FileList } from '../components/file-list/file-list.component';
import { ContactTable } from '../components/contact-table/contact-table.component';
import { Gallery } from '../components/gallery/gallery.component';


export interface Module {
  type: string;
  hero?: Hero;
  news?: News;
  files?: FileList;
  article?: string;
  contactTable?: ContactTable
}

export interface Page {
  title: string;
  description: string;
  modules: Array<Module>;
}

export interface Data {
  [id: string]: Page;
}

@Injectable()

export class ContentService {
  
  constructor() { }

  getData(id: string) {
    const data: Data = {
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
    }
    return data[id];
  }

  getMenu(): Menu {
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
  } // menu


  getModule(id: string): Module {
    const modules = {
      notFoundHero: {
        type: 'hero',
        hero: <Hero>{
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
          image: './assets/images/image12.jpg',
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
              top: 'Maj 2018',
              header: 'Årsmötesprotokoll',
              text: 'Protokollet från årsmötet är nu distribuerat. Protokollet kan även tillhandahålls av styrelsen på begäran.',
              image: './assets/images/image9.jpg'
            },
            {
              top: '21-22 Oktober',
              header: 'Höstens städdagar',
              text: 'Höstens städdagar är planerade till 21-22 Oktober',
              image: './assets/images/image8.jpg'
            }
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
        gallery: <Gallery> {
          version: 'muted',
          images: [
            { url: './assets/images/image15.jpg' },
            { url: './assets/images/image3.jpg' },
            { url: './assets/images/image5.jpg' },
            { url: './assets/images/image4.jpg' },
            { url: './assets/images/image9.jpg' },
            { url: './assets/images/image14.jpg' },
          ]
        }
      }        
    } //modules
    return modules[id];
  }

  getArticle(id:string) {
    const articles = {
      startArticle: {
        type: 'article',
        article: {
          version: 'muted',
          text: 
            `
            ## Om föreningen
      
            Östra Lindås anläggningssamfällighetsförening beläget öster om gamla Särövägen i södra Billdal. Länsgränsen till Hallands län ligger enbart några meter söder om Östra Lindås.
            Området byggdes huvudsakligen under 1972 och idag omfattar samfälligheten totalt 135 hushåll på Lindåsvägen 8-128 och Billdals Aspväg 2-148.
      
            Angränsande till området ligger Lindåsskolan som har cirka 590 elever från förskoleklass till årskurs 9. På skolan finns ett fritidshem med fyra avdelningar. I närområdet finns det förskolor; Lindebovägen, Södra Särövägen( även känd som Sommarbo) och Kyrkvägen.
            Föreningen förvaltar den gemensamma anläggningssamfälligheten genom en styrelse som följer föreningens lagar stadgar och de lagar som gäller för samfällighetsföreningar.
      
            Om Du önskar förändringar är du välkommen att lämna in skriftlig motion senast 10 februari till styrelsens ordförande. Du är givetvis mycket välkommen med förbättringsförslag som du lämpligast ställer till styrelsen eller lämplig ledamot.
            Städdagar hålls normalt två gånger per år, vår och höst. Det är mycket viktigt att alla som orkar ställer upp, då ansvaret att hålla området i ordning vilar på alla. Risken är annars att årsavgiften måste höjas för att bekosta städning, rabatt- och buskvård etc.
            Enligt årsmötes beslut 2017 debiteras inte 2000:- per fastighet vid aktivt deltagande lördag och söndag på våra två städhelger eller annan dag enligt överenskommelse. Om man ej kan deltaga på städdag och vill slippa kostnaden skall man meddela någon i styrelsen eller områdesansvariga, sk städledare, för att få en uppgift som kan utföras på annan dag än städdag.
      
            I området finns en landhockeybana som föreningen underhåller och alla områdets medlemmar är välkomna att använda. Respektera de ordningsregler som finns uppsatta invid banan.
            Tennisbanan ägs av Göteborgs stad och underhålls dessvärre dåligt. Det går dock att spela på banan.
          `
        }
      },
      reglerArticle: {
        type: 'article',
        article: { 
          text: 
            `
            ## Regler och praxis
            ### Parkering 
            Parkering är tillåten 1 dygn för både boende och gäster på de parkeringar som återfinns i anslutning till garagen.
            
            Parkering inom området är **förbjuden**. Det är dock tillåtet att dagtid köra in för av-, pålastning och därefter omgående ta ut bilen ur området. Inom området är det gångfart som gäller för våra bilar, tänk på våra barn som inte förväntar sig en bil när de kommer i full fart runt ett hörne.
            För att öppna bommarna behövs en A-nyckel (gammal modell) och i vissa fall där det finns dubbla bommar behövs en trekantsnyckel. Dessa finns båda att köpa hos låssmed, låna en grannes om du är osäker på vilken det är som krävs. Var noga med att stänga bommen efter er!
            
            Använd INTE cykel/gångbana eller gräsmatta för in/utfart eller uppställning.
            
            Parkering på spolplattorna är inte tillåten. Respektera din granne som flyttat till trevliga och rena Östra Lindås vid havet...
            
            ### Störande ljud
            Styrelsen fick vid årsstämman 2010 i uppdrag att ta fram regler för när maskiner och annan störande verksamhet skall vara tillåten inom föreningen. Visst måste man få lov att renovera/reparera sitt hus, klippa/trimma gräsmattor och utöva hobbyarbeten på helger och kvällar, men man kan välja typ av arbete efter tidpunkt för utförandet.
            
            Kommunen har satt en tidsgräns 07:00-19:00 på vardagar samt med reducerad bullernivå  till 22:00 på vardagskvällar/lördagar/sön- och helgdagar.
            
            Samfällighetens årsmöte har beslutat att fredag-söndag samt helgdagar under den varma delen av året ska buller begränsas efter 18:00 och innan 08:00. Om man har behov av att jobba utanför dessa begränsningar, prata med grannarna!
            
            ### Mopedåkning
            Moped får ej köras inom området av varken ungdom eller vuxen. Vid infarterna till området finns skyltar som tydligt visar detta. Vi vill be Er som har mopedåkande ungdomar att informera dem och deras besökande kamrater om vad som gäller.
            
            ### Husdjur
            Alla typer av husdjur måste vara kopplade i området och får ej springa lösa. Hundar och katter bör ej vistas runt lekplatserna. Även husdjur måste givetvis gå på toaletten. Var vänlig städa upp efter fullbordat besök så att övriga i området slipper trampa runt i avföring etc!
            
            ### Båtar - Trailers- Husvagnar m.m. 
            Det är **ej tillåtet** att ställa upp båtar, trailers, husvagnar m.m. för vintern på Samfällighetens mark. Detta inkluderar även våra garage.
            
            ### Ersättning från kassan
            Enligt styrelseprotokoll skall den som yrkar på ersättning från Samfällighetens kassa ha förankrat inköpet hos någon styrelseledamot dessförinnan. En ensam styrelseledamot kan tillstyrka belopp upp till 1.000 SEK utan övriga styrelsens eller årsmötets godkännande. Rekvisition krävs om godkända inköp görs mot faktura eller efterkrav.
            
            ### Avfall
            Det är förbjudet att slänga trädgårdsavfall eller fyllnadsmaterial (jord, lera etc.) i skogen runt området. Brännbart trädgårdsavfall från egen tomt är tillåtet att slänga i de sopbilar som används vid städdagarna.
            I samband med förändringen av sophanteringen 2005 för hushållen i området har styrelsen tagit fram följande policy för att vägleda föreningens medlemmar. 
            
            ### Garage
            Varje medlem i Samfälligheten tillhandahålls en parkeringsplats i till Samfälligheten tillhörande garagelängor.
            
            Som Samfällighetsmedlem betalar du ingen fastighetsskatt för garageplatsen. Enligt senaste fastighetstaxering är markvärdet för parkeringsplatsen ca: 25 000:-. 
            
            Enligt årsmötesbeslut 2014 är det förbjudet att sätta upp garageportsöppnare som ej monteras av behörig montör/firma. Detta för att porten skall vara säker i funktion och elanslutning.
            
            Om medlemmen inte utnyttjar platsen för parkering av egen bil skall den överlåtas till styrelsen för "utlåning" till annan medlem under den tid medlemmen inte använder platsen. Detta för att minska problemen med för få parkeringsplatser inom Samfällighetens område.
            
            Garageplatsen får inte utnyttjas för något annat ändamål utöver parkering för medlemmens bil och förvaring av billtillhörigheter. Om det vid händelse av brand i garagen finns lagrat annat brännbart material såsom möbler, trä, lådor, papp etc. som kan förvärra branden är det risk för att försäkringsbolaget ej betalar ut full ersättning till Samfälligheten.
            
            Den som enligt ovan utnyttjar parkeringsplatsen för annat ändamål än bilparkering måste alltså dessutom teckna tilläggsförsäkring för eget ändamål utöver ovan angivna kostnader och kan dessutom bli skadeståndsskyldig för skador på garagebyggnaden.
            
            Parkeringsplatserna i garagelängorna är projekterade så att det skall parkeras en bil/plats, det vill säga att bildörrarna skall kunna öppnas in på platsen bredvid. Det är därmed förbjudet att lagra material eller att sätta upp vägg under järnbalken som är upplagd mellan portarna.
            
            Till varje garageport finns det 3 nycklar som fastighetsägaren ansvarar för. Om man behöver köpa en ny nyckel så köps dessa via Västsvenska Port & El  http://shop.vpe.se/ För att kunna beställa en nyckel behöver du det nummer som finns på låscylindern.
            
            
            
            ### Luftvärmepumpar, airconditioners och parabolantenner.
            Styrelsen har föreslagit följande riktlinjer vid installation av luftvärmepumpar, airconditioners och parabolantenner i området:
            
            Installation skall ske på ett sätt som minimerar påverkan på närmiljön och med största hänsyn tagen till grannfastigheter.
            
            Fastighetsägaren står för alla kostnader i samband installation.
            Externa enheter såsom ex. värmeväxlare och parabolantenner
            
            placeras lämpligen i atriumgården eller möjligen på framsidan huset
            * får endast monteras på den egna fastigheten inom tomtgräns
            * får inte placeras på fasad mot granne
            * får inte placeras på fasad mot bygata
            Utdelat informationsblad.
            
            Trädfällning
            Samfälligheten äger gemensamt mark och på den stående träd/skog. För att hålla efter denna har vi from 2006 anlitat entreprenör samt börjat avsätta medel i skogsvårdsfond. Följande policy har tagits fram för att vägleda föreningens medlemmar.
            
            ### Policy för trädfällning (gäller träd på samfällighetens mark):
            
            * All fällning skall godkännas skriftligen av styrelsen och berörda grannar.
            * Samfälligheten bekostar fällning och bortforsling av träd om fara för person eller egendom föreligger. Vid behov inkallas besiktningsman.
            * Fällning av andra orsaker skall alltid godkännas av styrelsen och bekostas av fastighetsägaren (även bortforsling av virke).

          `
        }
      },
      faktaArticle:  {
        type: 'article',
        article: {
          text: `
          ## Föreningsfakta

          **Föreningsnamn**       
          Anläggningssamfälligheten Östra Lindås 

          **Fastighetsbeteckning**  
          Lindås GA:10 

          **Organisationsnummer**	  
          717904-7787 
          
          **Adress**	              
          Billdals Aspväg 70, 427 39 BILLDAL 
          
          **Hemsida**	              
          http://www.ostralindas.se 
          
          **Kontakt**	              
          styrelsen@ostralindas.se 
          `
        }
      },
      stadgarArticle: {
        type: 'article',
        article: {
          text: `
            ## Stadgar

            ** 1. ** Samfällighetens firma är Anläggningssamfälligheten Östra Lindås.
        
            ** 2. ** Samfälligheten utgörs av fastigheterna:
              * Lindås 1:144 - 1:184
              * Lindås 1:186 - 1:224
              * Lindås 1:228 - 1:249
              * Lindås 1:252 - 1:260
              * Lindås 1:415 - 1:438
            
        
            ** 3. ** Samfälligheten har till ändamål att underhålla och driva den gemensamhetsanläggning, som enligt lagen om gemensamhetsanläggningar inrättats för de fastigheter, som ingår i samfälligheten. 
            Till gemensamhetsanläggningen hör:
              * Garage med belysning och kraftuttag samt parkeringsplatser och i anslutning till dessa inrättade anordningar för rengöring av fordon.
              * Gångvägar, lekplatser och grönytor.
              * Elektrisk ytterbelysning och gemensamma elledningar till den del kraftleverantören ej svarar för anläggningen.
              * Centralantennanläggning för radio och television med tillhörande anordningar och ledningar.
              * Serviceledningar för vatten och avlopp, dock ej allmän vatten- och avloppsanläggning.
              
            
            ** 4. ** För samfälligheten skall finnas en styrelse, som skall utses bland fastighetsägarna. Styrelsen skall bestå av fem ledamöter jämte en suppleant och ha sitt säte i Billdal.
            Styrelsen är beslutsför om minst tre ledamöter är närvarande.
            
            ** 5. ** För granskning av styrelsens förvaltning och samfällighetens räkenskaper skall finnas två revisorer jämt en suppleant.
            
            ** 6. ** Styrelseledamöter, styrelsesuppleant, revisorer och revisorsuppleant väljes årligen på ordinarie samfällighetsstämma för tiden intill dess nästa ordinarie stämma hållits.Ordförande utses av stämman och styrelsen utser inom sig sekreterare och kassör.
            
            ** 7. ** Samfällighetens räkenskapsår sammanfaller med kalenderåret.
            
            ** 8. ** Det åligger styrelsen att föra räkenskaper över förvaltningen. Räkenskaperna skall hållas tillgängliga för revisorer senast en månad efter räkenskapsårets utgång. 
            Föreningen skall årligen fondera minst 0,3% av nyanskaffningsvärdet till en särskild underhållsfond. Syftet med fonden är att säkerställa underhåll och förnyelse av gemensamhetsanläggningen som beskrivs under 3. Översyn av detta belopp skall göras varje år.
              
              Styrelsen skall upprätta förvaltningsberättelser för tilländagånget verksamhetsår samt uppgöra förslag till inkomst- och utgiftsstat och till debiteringslängd för kommande räkenskapsår.
              
              Styrelsen skall tillse att under dess förvaltning stående egendom är försäkrad till betryggande belopp. Kontanta tillgångar skall, bortsett från obetydliga belopp, insättas på bank.
              
              Vid styrelsens sammanträden skall föras protokoll.
            
            ** 9. **Ordinarie samfällighetsstämma skall hållas varje år i mars eller april.
            Extra samfällighetsstämma hålles då styrelsen finner omständigheter föranleda därtill, då revisorer så påfordrar eller då minst en femtedel av samtliga röstberättigade medlemmar hos styrelsen skriftligen begär detta med angivande av ärende som önskas behandlat.Kallelse till samfällighetsstämma skall ske skriftligen. Kallelsen skall utsändas senast två veckor före ordinarie och senast en vecka före extra samfällighetsstämma.Vid kallelsen till ordinarie samfällighetsstämma bör bifogas styrelsens förvaltningsberättelse och revisionsberättelse.
            
            ** 10. Mom. 1 **
            Vid ordinarie samfällighetsstämma skall följande ärenden förekomma:
            
            1. Justering av röstlängd
            2. Val av ordförande vid stämman
            3. Val av två justeringsmän
            4. Fråga om kallelse till stämman skett behörigen
            5. Föredragning av styrelsens förvaltningsberättelse för det förflutna räkenskapsåret
            6. Fördragning av revisorernas berättelse över styrelsens förvaltning
            7. Fråga om beviljande av ansvarsfrihet för styrelsen
            8. Fastställande av arvoden för styrelseledamöter och revisorer
            9. Fastställande av inkomst- och utgiftsstat för kommande året samt beslut i anledning av uppkommet överskott eller underskott tidigare år.
            10. Fastställande av debiteringslängd, upptagande av det belopp, som skall uttaxeras från varje fastighetsägare, och tiden för inbetalningen
            11. Val av ordförande och övriga styrelseledamöter samt styrelsesuppleant
            12. Val av revisorer och revisorsuppleant
            13. Utseende av valberedning on tre ledamöter, varav en ordförande, jämt två suppleanter för förberedande av val jämlikt 11) och 12)
            14. Inkomna motioner. Motioner avseende ekonomiska åtaganden skall, för att kunna upptas till behandling vid ordinarie stämma, vara styrelsen tillhanda före den 10 februari.
            15. Övriga ärenden
            
            ** Mom. 2 **
            Vid extra samfällighetsstämma får ej andra ärenden bli föremål för beslut än de som angivits i kallelsen till stämman.
            
            ** Mom. 3 **
            Röstning sker öppet; dock skall val förrättas med slutna sedlar om någon så önskar. 
            Vid lika röstetal avgöres val genom lottning. I andra frågor gäller vid lika röstetal den mening som biträdes av ordföranden.
            
            ** 11. ** Ändring av dessa stadgar skall för att bli gällande antagas av två på varandra följande stämmor med minst två månaders mellanrum, varav en skall vara ordinarie stämma. 
            Beslut om stadgeändring skall tillika ange dagen för ändringens ikraftträdande.
            
            Att ovanstående stadgar blivit antagna på extra samfällighetsstämma den 19.9 1973 i Billdal betyga:
            
            Ändringar gällande underhållsfond gjorda enligt årsmöte 1991 och 1992.
            
            Se även [Lag (1973:1150) om förvaltning av samfälligheter](https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-19731150-om-forvaltning-av-samfalligheter_sfs-1973-1150)
          `
          }
      },

      stadDagarOneArticle: {
        type: 'article',
        article: {
          text:
          `
          ## Städdagar
          Städdagar hålls normalt två gånger per år, vår och höst. Det är mycket viktigt att alla som orkar ställer upp, då ansvaret att hålla området i ordning vilar på alla. Risken är annars att årsavgiften måste höjas för att bekosta städning, rabatt- och buskvård etc. Enligt årsmötes beslut 2017 debiteras inte 2000:- per fastighet vid aktivt deltagande lördag och söndag på våra två städhelger eller annan dag enligt överenskommelse. Om man ej kan deltaga på städdag och vill slippa kostnaden skall man meddela någon i styrelsen eller områdesansvariga, sk städledare, för att få en uppgift som kan utföras på annan dag än städdag.
          
          Områdesansvarig ansvarar för följande:

          Översyn av området innan städdagar

          * Fördelning av arbetsuppgifter under städdagar

          *  Allmän kontroll av "sitt" område Information till nyinflyttade (denna skrivelse), matrikel samt kallelse och protokoll från senaste årsmötet. Materialet kan erhållas från styrelsens sekreterare.

          * Innan varje städdag (ca 2-3 veckor innan) samlas samtliga områdesansvariga för genomgång för att se vad som måste inhandlas till städdagen. Styrelsen sammankallar.

          Följande material skall finnas utanför förrådet vid Billdals Aspväg 122:

          | Antal | Object |
          | ----- | ------ |
          | 1 st | Skopa för rensning av brunnar |
          | 3 st | Skottkärror |
          | 1 st | Stege, tvådelad |
          | 1 st | Snösläde |

          Om något går sönder ansvarar Du för att enheten repareras. Kostnaderna regleras av samfällighetens kassör om inte vårdslöshet kan påvisas.

          `
        }
      },
        
      stadDagarTwoArticle: {
        type: 'article',
        article: {
          text: 
            `
            ## Att göra på städdagarna

            **Buskar**

            Kontrollera och åtgärda förväxta planteringar vid lekplatser, garage m.m.
        
            ** Staket **

            Byt ut skadade brädor för staket vid lekplatser, garagelängor eller bygator. Måla om vid behov.
        
            ** Lekplatser**

            Reparation eller utbyte av skadade leksaker. Materialbehov anmäles till styrelsen.
        
            ** Garage**

            Översyn och eventuell målning Kontrollera stuprör. Kontrollera att alla garage går att låsa. Smörjning av portmekanism.
        
            ** Parkeringsplatser**

            Kontroll och eventuell förbättring av linjemålning.
        
            ** Områdesvägar**

            Rapportering till styrelsen gällande skador i asfalt typ bubblor, hålor eller liknade.
        
            ** Belysning**

            Kontroll av lampor och att eldosor ej är öppnade.
        
            ** Brandposter**

            Kontrollera att posterna är i gott skick och åtkomliga för brandkåren. Skall finnas ex på varje lekplats. Kontrollera även att pekskylten som pekar mot brandposten pekar åt rätt håll.
        
            ** Brunnslock**
            Kontroll av att lock ej saknas samt att locken ej är lätta för barn att flytta. Lock av så kallad kupad modell skall vara låsta.
        
            ** Grus**

            Allt grus/flis från vinterns väghållning skall sopas bort och läggas i gruslådor.
        
            ** Datum**

            Aktuellt datum för städdagar hittar du i protokollet från Årsmötet
            
            ** Grönområden**

            Samfälligheten äger gemensamt mark och på den stående träd/skog. För att hålla efter denna har vi from 2006 anlitat entreprenör samt börjat avsätta medel i skogsvårdsfond. Följande policy har tagits fram för att vägleda föreningens medlemmar.
            
            * All fällning skall godkännas skriftligen av styrelsen och berörda grannar.
            * Samfälligheten bekostar fällning och bortforsling av träd om fara för person eller egendom föreligger. Vid behov inkallas besiktningsman.
            * Fällning av andra orsaker skall alltid godkännas av styrelsen och bekostas av fastighetsägaren (även bortforsling av virke).
            
            ## Gräsklippning
            * Gräsklippning enl. kartor inkl. puts 20-22 ggr/ säsong 1 maj - 1 oktober.
            * Slagning görs 1-2 ggr /år vid norra parkeringen Billdals Aspväg, pulkabacken, vid grind mot skolan samt gångtunneln under Lövskogsvägen på begäran.
            * Entrepenör: Lindome Entreprenad AB
            
            #### Klippkarta norr
        
            ![Norr](./assets/images/klipp-norr.png)
        
            #### Klippkarta mitt
        
            ![Mitt](./assets/images/klipp-mitt.png)
        
            #### Klippkarta söder
        
            ![Söder](./assets/images/klipp-soder.png)
          `
        }
      },
      parkeringGarageArticle: {
        type: 'article',
        article: {
          text: 
            `
            ## Parkeringsplatser
            Parkering är tillåten 1 dygn för både boende och gäster på de parkeringar som återfinns i anslutning till garagen.
            
            Parkering inom området är förbjuden. Det är dock tillåtet att dagtid köra in för av-, pålastning och därefter omgående ta ut bilen ur området. Inom området är det gångfart som gäller för våra bilar, tänk på våra barn som inte förväntar sig en bil när de kommer i full fart runt ett hörne.
            För att öppna bommarna behövs en A-nyckel (gammal modell) och i vissa fall där det finns dubbla bommar behövs en trekantsnyckel. Dessa finns båda att köpa hos låssmed, låna en grannes om du är osäker på vilken det är som krävs. Var noga med att stänga bommen efter er!
            
            Använd INTE cykel/gångbana eller gräsmatta för in/utfart eller uppställning.
            
            Parkering på spolplattorna är inte tillåten. Respektera din granne som flyttat till trevliga och rena Östra Lindås vid havet...
            
            Båtar - Trailers- Husvagnar m.m. Det är ej tillåtet att ställa upp båtar, trailers, husvagnar m.m. för vintern på Samfällighetens mark. Detta inkluderar även våra garage.

            ## Garage
            Varje medlem i Samfälligheten tillhandahålls en parkeringsplats i till Samfälligheten tillhörande garagelängor.
            
            Som Samfällighetsmedlem betalar du ingen fastighetsskatt för garageplatsen. Enligt senaste fastighetstaxering är markvärdet för parkeringsplatsen ca: 25 000:-.
            
            Enligt årsmötesbeslut 2014 är det förbjudet att sätta upp garageportsöppnare som ej monteras av behörig montör/firma. Detta för att porten skall vara säker i funktion och elanslutning.
            
            Om medlemmen inte utnyttjar platsen för parkering av egen bil skall den överlåtas till styrelsen för "utlåning" till annan medlem under den tid medlemmen inte använder platsen. Detta för att minska problemen med för få parkeringsplatser inom Samfällighetens område.
            
            Garageplatsen får inte utnyttjas för något annat ändamål utöver parkering för medlemmens bil och förvaring av billtillhörigheter. Om det vid händelse av brand i garagen finns lagrat annat brännbart material såsom möbler, trä, lådor, papp etc. som kan förvärra branden är det risk för att försäkringsbolaget ej betalar ut full ersättning till Samfälligheten.
            
            Den som enligt ovan utnyttjar parkeringsplatsen för annat ändamål än bilparkering måste alltså dessutom teckna tilläggsförsäkring för eget ändamål utöver ovan angivna kostnader och kan dessutom bli skadeståndsskyldig för skador på garagebyggnaden.
            
            Parkeringsplatserna i garagelängorna är projekterade så att det skall parkeras en bil/plats, det vill säga att bildörrarna skall kunna öppnas in på platsen bredvid. Det är därmed förbjudet att lagra material eller att sätta upp vägg under järnbalken som är upplagd mellan portarna.
            
            Till varje garageport finns det 3 nycklar som fastighetsägaren ansvarar för. Om man behöver köpa en ny nyckel så köps dessa via Västsvenska Port & El  http://shop.vpe.se/ För att kunna beställa en nyckel behöver du det nummer som finns på låscylindern.  

            ## Vägar
            Mopedåkning
            Moped får ej köras inom området av varken ungdom eller vuxen. Vid infarterna till området finns skyltar som tydligt visar detta. Vi vill be Er som har mopedåkande ungdomar att informera dem och deras besökande kamrater om vad som gäller.
        
            ### Snöröjning norr
            ![Norr](./assets/images/vag-norr.gif)
        
            ### Snöröjning mitt
            ![Mitt](./assets/images/vag-mitt.gif)
        
            ### Snöröjning söder
            ![Söder](./assets/images/vag-soder.gif)
          `
        }
      },
      tvArticle: {
        type: 'article',
        article: {
          text: 
          `
          ## TV utbud

          Vid årsmötet hade en medlem en fråga om styrelsen kunde skriva ett avtal vad gäller samma TV kanaler som idag men en uppdatering till ett antal HD kanaler samt HD box. Styrelsen fick i uppdrag att kolla detta med Villaägarna och har nu fått svar att detta är helt OK. Merkostnad för Samfälligheten är 40:-(fyrtio)/år för samtliga fastigheter.
          
          Vi kommer nu att dela ut information i brevlådan vad du som fastighetsägare måste göras för att starta tillgången av HD kanalerna från 01 maj 2018.
          Vi hoppas ni skall se detta som en positiv utveckling av området och en kvalitetsförbättring. 
          Innehållet i kanalerna styr vi dock inte över.
          
          Med vänlig hälsning
          Lars Hermanson
          
           
          Ny TV genom fiber
          Dessa kanaler distribueras okodat vilket innebär att ni kan se kanalerna på alla anslutna TV utan box eller programkort. Efter anslutning av TV till mediakonvertern behöver ni göra en ny kanalsökning på TV:n.
           
          ### TV-kanaler
          * SVT1	 E5
          * SVT2	 E8
          * TV3	 S13
          * TV4	 S8
          * Barnkanalen/SVT24	 E7
          * Kunskapskanalen	E10
          * Kanal 5	S11
          * TV 6	S15 
          * Sjuan	S19
          * Discovery Channel	S18
          * MTV	C6
          * TV 8	S7
          * Kanal 9	S17
          * Kanal 11	S16
          * TV10	C12
          * TV12	C11
           
          Dessutom distribueras SVT1, SVT2, SVT24, Barnkanalen, Kunskapskanalen och TV4 digitalt okodat i format DVB-C. Det innebär att ni kan se dessa kanaler i digital kvalité på alla anslutna TV med inbyggd DVB-C box utan programkort.
          
          Utrustningen är nu installerad (maj 2015). Gå in på www.canaldigital.se för mer information. Basutbudet (ovan) ingår i samfällighetsavgiften. Om du önskar fler kanaler, kontakta CanalDigital och det är på din egen räkning.
          
          Eftersom det varierar hur man ställer in kanalerna beroende på tv-modell, ber vi er att läsa instruktionsboken till er tv för korrekt inställning.
          
          ### Tilläggstjänster som betalas av respektive hushåll;
          Bredband och telefoni levereras av Ownit, konstakta styrelsen för uppgifter när ni ska beställa dessa tjänster (gäller inte under projektet, då har information angående detta skickats ut per mail). 
          
          Extra kanalpaket, kontakta Canal Digital och då är det kabel-TV ni vill beställa.
          
          ## Felanmälan 
          ### TV – det är Canal Digital som ska kontaktas. Men innan ni kontaktar Canal Digital, fråga era grannar om de har samma problem. 
          
          Om ni är de enda med problemet, testa att stänga av konvertern och låt den vara avstängd en minut innan ni startar om den. Om felet ej avhjälps, testa med en annan antennkabel. Om felet kvarstår, kontakta Canal Digital. Mer information om felsökning hittar du på Canal Digitals hemsida
          
          Canal Digiatal felanmälan, ring  0770 - 11 55 11 (knapptryck #1 befintlig kund, knappa in personnummer, #2 TV via kabelnät, #3 teknisk information eller felanmälan) eller skicka via deras hemsida, Kundservice 
          
          ### Bredband/Telefoni – kontakta Ownit, 08 - 525 07 300 eller maila info@ownit.se   
          
          På Ownits hemsida finns information om pågående kända driftstörningar https://www.ownit.se/kundservice/driftstatus
          
          Ownit har mycket bra guider och information på sin hemsida https://www.ownit.se/kundservice/guider  
          
          Bl.a. om ni har beställt bredband och inte har den förväntade hastigheten trådlöst, läs guiden för hur man kan optimera hastigheten https://www.ownit.se/kundservice/guider/bredband-ownits-wifi-guide Den konverter/router som ingick i paketet är inte den bästa de har och kan därmed behöva lite förstärkning i form av en router, en medlem skriver följande; 
          
          Köpte en routern (på media market 1690kr)som Ownit rekommenderad (ASUS66 någonting hette den som Ownit rekommenderad vi köpte den övre ASUS68) bad dem brygga en lanutgång i den fasta konverten ( detta sker via telefon från Ownit),  en nätverkskabel drogs från den fasta konverten till den nya routern. Valde en 15 meters kabel så att den nya routern kom i mitten av huset. Wow vilken skillnad det blev är riktigt nöjda nu.
          
          `
        }
      },
      privacyArticle: {
        type: 'article',
        article: {
          text: 
          `
            ## Privacy
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ipsum at nunc pellentesque commodo. Phasellus mattis arcu eleifend sem ornare euismod. Ut porttitor leo eget nibh sodales, quis imperdiet purus sodales. Vestibulum consequat leo lectus, nec iaculis ex cursus a. Aliquam efficitur neque mattis nibh molestie elementum. Nam mattis ex molestie imperdiet tincidunt. Nullam dictum a nibh ut tempor. Aenean eleifend maximus neque dapibus scelerisque. Aenean feugiat ante felis, quis pharetra est dapibus sed. Integer maximus tempor euismod. Fusce magna magna, elementum vitae nulla id, placerat dapibus ligula. Duis vitae erat vitae sapien tincidunt ullamcorper. Aenean faucibus ac purus quis mattis. Maecenas ut est blandit, porttitor nunc sed, ullamcorper purus.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ipsum at nunc pellentesque commodo. Phasellus mattis arcu eleifend sem ornare euismod. Ut porttitor leo eget nibh sodales, quis imperdiet purus sodales. Vestibulum consequat leo lectus, nec iaculis ex cursus a. Aliquam efficitur neque mattis nibh molestie elementum. Nam mattis ex molestie imperdiet tincidunt. Nullam dictum a nibh ut tempor. Aenean eleifend maximus neque dapibus scelerisque. Aenean feugiat ante felis, quis pharetra est dapibus sed. Integer maximus tempor euismod. Fusce magna magna, elementum vitae nulla id, placerat dapibus ligula. Duis vitae erat vitae sapien tincidunt ullamcorper. Aenean faucibus ac purus quis mattis. Maecenas ut est blandit, porttitor nunc sed, ullamcorper purus.
          `
        }
      },
      cookiesArticle: {
        type: 'article',
        article: {
          text: 
          `
          ## Cookies
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ipsum at nunc pellentesque commodo. Phasellus mattis arcu eleifend sem ornare euismod. Ut porttitor leo eget nibh sodales, quis imperdiet purus sodales. Vestibulum consequat leo lectus, nec iaculis ex cursus a. Aliquam efficitur neque mattis nibh molestie elementum. Nam mattis ex molestie imperdiet tincidunt. Nullam dictum a nibh ut tempor. Aenean eleifend maximus neque dapibus scelerisque. Aenean feugiat ante felis, quis pharetra est dapibus sed. Integer maximus tempor euismod. Fusce magna magna, elementum vitae nulla id, placerat dapibus ligula. Duis vitae erat vitae sapien tincidunt ullamcorper. Aenean faucibus ac purus quis mattis. Maecenas ut est blandit, porttitor nunc sed, ullamcorper purus.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ipsum at nunc pellentesque commodo. Phasellus mattis arcu eleifend sem ornare euismod. Ut porttitor leo eget nibh sodales, quis imperdiet purus sodales. Vestibulum consequat leo lectus, nec iaculis ex cursus a. Aliquam efficitur neque mattis nibh molestie elementum. Nam mattis ex molestie imperdiet tincidunt. Nullam dictum a nibh ut tempor. Aenean eleifend maximus neque dapibus scelerisque. Aenean feugiat ante felis, quis pharetra est dapibus sed. Integer maximus tempor euismod. Fusce magna magna, elementum vitae nulla id, placerat dapibus ligula. Duis vitae erat vitae sapien tincidunt ullamcorper. Aenean faucibus ac purus quis mattis. Maecenas ut est blandit, porttitor nunc sed, ullamcorper purus.
          `
          }
        }      
    }//articles
    return articles[id];
  }
} //contentService
