import { Page } from '../content.service';
import { Hero } from '../../components/hero/hero.component';
import { ContactTable } from '../../components/contact-table/contact-table.component';
import { Article } from '../../components/article/article.component';

export const styrelsenContent: Page = {
    title: 'Styrelsen och föreningsfakta',
    description: 'Här hittar du kontaktuppgifter till styrelsen samt områdesansvariga i Östra Lindås Samfällighet',
    modules: [
        {
            type: 'hero',
            hero: {
              top: 'Kontaktinformation',
              header: 'Styrelsen & Föreningsfakta',
              ptemp: 'Här hittar du kontaktuppgifter till styrelsen samt fakta om föreningen',
              image: './assets/images/image19.jpg',
              version: 'light',
              size: 'medium',           
            },
        },
        {
            type: 'contactTable',
            contactTable: <ContactTable> {
              header: 'Styrelsen 2018',
              contacts: [
                {
                  function: 'Ordförande',
                  name: 'Lars Hermanson',
                  adress: 'Billdals Aspväg 38',
                  phone: '031 91 32 82 ',
                },
                {
                  function: 'Kassör',
                  name: 'Gabriella Barta Söderqvist	',
                  adress: 'Billdals Aspväg 70',
                  phone: '031 91 20 19', 
                },
                {
                  function: 'Sekreterare',
                  name: 'Sara Danestedt',
                  adress: 'Billdals Aspväg 110',
                  phone: '031 91 48 16',
                },
                {
                  function: 'Ledamot',
                  name: 'Kristoffer Sthen',
                  adress: 'Lindåsvägen 68',
                  phone: '0723 71 75 03',
                },
                {
                  function: 'Ledamot',
                  name: 'Mikael Forsman',
                  adress: 'Billdals Aspväg 62',
                  phone: '031 91 47 11',
                },
                {
                  function: 'Suppleant',
                  name: 'Jonas Jävert',
                  adress: 'Lindåsvägen 22',
                  phone: '0739 02 04 57',
                },
              ],
            },
          },          
          {
            type: 'contactTable',
            contactTable: <ContactTable> {
              header: 'Områdesansvariga',
              contacts: [
                {
                  function: 'Område 1',
                  name: '	Jonas Jävert',
                  adress: 'Lindåsvägen 22',
                },
                {
                  function: 'Område 2',
                  name: 'Lena Larsson / Linda Vendelstrand Gardelin',
                  adress: 'LV 50 / LV60  ',
                },
                {
                  function: 'Område 3',
                  name: 'Björn Töpel',
                  adress: 'Lindåsvägen 116',
                },
                {
                  function: 'Område 4',
                  name: 'Lars Hägnemo',
                  adress: 'Billdals Aspväg 140',
                },
                {
                  function: 'Område 5',
                  name: 'Lars Björklund',
                  adress: 'Billdals Aspväg 86',
                },
                {
                  function: 'Område 6',
                  name: 'Gabriella Barta Söderqvist',
                  adress: 'Billdals Aspväg 70',
                },
                {
                  function: 'Område 7',
                  name: 'Christian Conradi',
                  adress: 'Billdals Aspväg 7',
                },
              ],
            },
          },  
          {
            type: 'article',
            article: <Article> {
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
              `,
            },
          },          
    ]   
}