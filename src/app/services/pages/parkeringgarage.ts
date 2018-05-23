import { Page } from '../content.service';
import { Hero } from '../../components/hero/hero.component';
import { Article } from '../../components/article/article.component';

export const parkeringGarageContent: Page = {
  title: 'Parkering, Garage & Vägar',
  description: 'Här hittar du information om vägar, parkeringsplatser och samfällighetens garage samt snöröjningskartor',
  modules: [
    {
      type: 'hero',
      hero: <Hero> {
        header: 'Parkering, Garage & Vägar',
        ptemp: 'Här hittar du information om vägar, parkeringsplatser och samfällighetens garage samt snöröjningskartor',
        image: './assets/images/image7.jpg',
        version: 'light',
        size: 'medium',           
      },
    }, 
    {
      type: 'article',
      article: <Article> {
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
        `,
      },
    },
  ],
}