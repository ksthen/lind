import { Page } from '../content.service';
import { Hero } from '../../components/hero/hero.component';
import { Article } from '../../components/article/article.component';

export const staddagarContent: Page = {
  title: 'Städdagar och Grönområden',
  description: 'Här hittar du information föreingens städdagar och grönområdet samt klippkartor',
  modules: [
    {
      type: 'hero',
      hero: <Hero> {
        header: 'Städdagar & Grönområden',
        ptemp: 'Här hittar du information föreingens städdagar och grönområdet samt klippkartor',
        image: './assets/images/image8.jpg',
        version: 'light',
        size: 'medium',           
      },
    },
    {
      type: 'article',
      article: <Article> {
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

        `,
      },
    },
    {
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
        `,
      },
    },
  ],
}