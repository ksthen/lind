import { Page } from '../content.service';
import { Hero } from '../../components/hero/hero.component';


export const tvFiberContent: Page = {
  title: 'TV och Fiber',
  description: 'Här hittar du information om TV och fiber',
  modules: [
    {
      type: 'hero',
      hero: <Hero> {
        header: 'TV och Fiber',
        ptemp: 'Här hittar du information om TV-utbudet samt fiber',
        image: './assets/images/image11.jpg',
        version: 'light',
        size: 'medium',           
      },
    },  
    {
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
        
        `,
      },
    },
  ],
}