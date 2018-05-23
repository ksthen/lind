import { Page } from '../content.service';
import { Hero } from '../../components/hero/hero.component';
import { FileList, File } from '../../components/file-list/file-list.component';

export const dokumentContent: Page = {
    title: 'Dokument',
    description: 'Dokument, ritningar och infobrev med mera',
    modules: [
      {
        type: 'hero',
        hero: <Hero>{
          top: 'Arkiv',
          header: 'Dokument & ritningar',
          ptemp: 'Här hittar du dokument, ritningar informationsbrev, med mera',
          image: './assets/images/image5.jpg',
          version: 'light',
          size: 'medium',           
        },
      }, 
      {
        type: 'files',
        files: <FileList> {
          header: 'Infobrev',
          path: './assets/documents/',
          files: <File[]>[
            {
              header: 'Välkomstbrev',
              file: 'Information-till-nyinflyttade.pdf'
            },
            {
              header: 'Julbrev 2017',
              file: 'Julbrev-2017.pdf'
            },
            {
              header: 'Sommarbrev 2017',
              file: 'Sommarbrev-2017.pdf'
            }   
          ],
        },
      },        
      {
        type: 'files',
        files: <FileList> {
          header: 'Dokument och ritningar',
          path: './assets/documents/',
          files: <Array<File>>[
            {
              header: 'Anläggningsbeslut',
              text: 'Anläggningsbeslut för samfälligheten',
              file: 'Anläggningsbeslut-Akt-14-ASK-3117.pdf'
            },
            {
              header: 'Fiber AV',
              text: 'Ritning över fibernät Billdals Aspväg',
              file: 'Fiber-Karta-AV.pdf'
            },
            {
              header: 'Fiber LV',
              text: 'Ritning över fibernät Lindåsvägen',
              file: 'Fiber-Karta-LV.pdf'
            }, 
            {
              header: 'Anfallspolicy',
              file: 'Policy_Sophantering_2005_utg3.pdf'
            },  
            {
              header: 'Information om luftvärmepupar',
              file: 'Information-Luftvärmepumpar-Samf-Ö-Lindås-040816.pdf'
            },                
            {
              header: 'Mall motion till stämma',
              file: 'Mall-för-motion-till-stämma_2.doc '
            },                          
          ],
        },
      },           
    ],
}