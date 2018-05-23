import { Page } from '../content.service';
import { Gallery } from '../../components/gallery/gallery.component';
import { Article } from '../../components/article/article.component';
import { News } from '../../components/news/news.component';
import { Hero } from '../../components/hero/hero.component';

export const startContent: Page = {
    title: 'Start',
    description: 'Välkommen till Östra Lindås Samfällighet',
    modules: [
        {
            type: 'hero',
            hero: <Hero> {
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
                type: 'anchor',
              },                 
            },
        },
        {
            type: 'news',
            news: <News> {
              header: 'Nyheter',
              newsItems: [
                {
                  top: 'Maj 2018',
                  header: 'Ny "Vippy"',
                  text: 'Ny "vippy" gungbräda är på plats!',
                  image: './assets/images/image16.jpg',
                }, 
                {
                  top: 'Maj 2018',
                  header: 'Ny hemsida',
                  text: 'Till följd av GDPR vill vi minska hanteringen av personuppgifter. Vi har därför byggt en ny hemsida med ett minimum personuppgifter. Vi kommer även att stänga ner epost-listorna tills vidare. Medlemsregister, städområden, årsmötesprotokoll mm. tillhandahålls av styrelsen på begäran.',
                  image: './assets/images/image1.jpg',
                },      
                {
                  top: '21-22 Oktober',
                  header: 'Höstens städdagar',
                  text: 'Höstens städdagar är planerade till 21-22 Oktober',
                  image: './assets/images/image8.jpg',
                },
                {
                  top: 'Maj 2018',
                  header: 'Årsmötesprotokoll',
                  text: 'Protokollet från årsmötet är nu distribuerat. Protokollet kan även tillhandahålls av styrelsen på begäran.',
                  image: './assets/images/image9.jpg',
                },            
              ],
            },
        },        
        {
            type: 'article',
            article: <Article> {
              version: 'muted',
              text: 
                `
                ## Om föreningen
          
                Östra Lindås anläggningssamfällighetsförening beläget öster om gamla Särövägen i södra Billdal. Länsgränsen till Hallands län ligger enbart några meter söder om Östra Lindås.
                Området byggdes huvudsakligen under 1972 och idag omfattar samfälligheten totalt 135 hushåll på Lindåsvägen 8-128 och Billdals Aspväg 2-148.
          
                Angränsande till området ligger Lindåsskolan som har cirka 590 elever från förskoleklass till årskurs 9. På skolan finns ett fritidshem med fyra avdelningar. I närområdet finns det förskolor; Lindebovägen, Södra Särövägen( även känd som Sommarbo) och Kyrkvägen.
                Föreningen förvaltar den gemensamma anläggningssamfälligheten genom en styrelse som följer föreningens lagar stadgar och de lagar som gäller för samfällighetsföreningar.
          
                Om Du önskar förändringar är du välkommen att lämna in skriftlig motion senast 10 februari till styrelsens ordförande (använd gärna [den här mallen](/dokument)). Du är givetvis mycket välkommen med förbättringsförslag som du lämpligast ställer till styrelsen eller lämplig ledamot.
                Städdagar hålls normalt två gånger per år, vår och höst. Det är mycket viktigt att alla ställer upp, då ansvaret att hålla området i ordning vilar på alla. Risken är annars att årsavgiften måste höjas för att bekosta städning, rabatt- och buskvård etc.
                Enligt årsmötes beslut 2017 ger ett aktivt deltagande under städdagarna en återbetalning på 1000:-  per städ tillfälle. Om man ej kan deltaga på städdag och vill slippa kostnaden skall man meddela någon i styrelsen eller områdesansvariga, sk städledare, för att få en uppgift som kan utföras på annan dag än städdag.
          
                I området finns en landhockeybana som föreningen underhåller och alla områdets medlemmar är välkomna att använda. Respektera de ordningsregler som finns uppsatta invid banan.
                Tennisbanan ägs av Göteborgs stad och underhålls dessvärre dåligt. Det går dock att spela på banan.
              `,
            },
          },        
        {
            type: 'gallery',
            gallery: <Gallery> {
                version: 'muted',
                images: [
                { url: './assets/images/image15.jpg' },
                { url: './assets/images/image3.jpg' },
                { url: './assets/images/image5.jpg' },
                { url: './assets/images/image17.jpg' },
                { url: './assets/images/image18.jpg' },
                { url: './assets/images/image19.jpg' },
                ],
            },
        },           
    ],
}