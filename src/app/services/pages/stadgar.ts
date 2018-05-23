import { Page } from '../content.service';
import { Hero } from '../../components/hero/hero.component';
import { Article } from '../../components/article/article.component';

export const stadgarContent: Page = {
    title: 'Stadgar',
    description: 'Här hittar du information om samfällighetens stadgar',
    modules: [
      {
        type: 'hero',
        hero: <Hero> {
          header: 'Samfällighetens Stadgar',
          ptemp: 'Här hittar du information om samfällighetens stadgar',
          image: './assets/images/image10.jpg',
          version: 'light',
          size: 'medium',           
        },
      }, 
      {
        type: 'article',
        article: <Article> {
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
          `,
        },
      },
        
    ],
}