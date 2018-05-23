import { Page } from '../content.service';
import { Hero } from '../../components/hero/hero.component';
import { Article } from '../../components/article/article.component';

export const reglerContent: Page = {
  title: 'Regler',
  description: 'Här hittar du information om samfällighetens relger',
  modules: [
    {
      type: 'hero',
      hero: <Hero> {
        header: 'Samfällighetens Regler',
        ptemp: 'Här hittar du information om samfällighetens relger',
        image: './assets/images/image3.jpg',
        version: 'light',
        size: 'medium',           
      },
    }, 
    {
      type: 'article',
      article: <Article> { 
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

          [Länk till policy ](dokument)
          
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

        `,
      },
    },
  ],
}