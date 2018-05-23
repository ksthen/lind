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
          header: 'Dokument',
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
              header: 'Mall för motion till stämma',
              file: 'Mall-för-motion-till-stämma_2.doc '
            },                          
          ],
        },
      },  
      {
        type: 'files',
        files: <FileList> {
          header: 'Ritningar',
          path: './assets/ritningar/',
          files: <Array<File>>[               
            {
              header: 'Atriumhus Mått - Litt A20-Litt',
              file: 'Atriumhus Mått - Litt A20-Litt.pdf'
            }, 
            {
              header: 'Atriumhus Mått A20',
              file: 'Atriumhus Mått A20.pdf'
            }, 
            {
              header: 'Fasader 13',
              file: 'Fasader 13.pdf'
            }, 
            {
              header: 'Förstärkning av befintligt takstag SK01',
              file: 'Förstärkning av befintligt takstag SK01.pdf'
            },  
            {
              header: 'Garage fasader 05',
              file: 'Garage fasader 05.pdf'
            }, 
            {
              header: 'Garage plintar 04',
              file: 'Garage plintar 04.pdf'
            }, 
            {
              header: 'Grundläggning hus 1-50 K5',
              file: 'Grundläggning hus 1-50 K5.pdf'
            }, 
            {
              header: 'Grundläggning hus 51-102 K6',
              file: 'Grundläggning hus 51-102 K6.pdf'
            }, 
            {
              header: 'Grundläggning hus 103-135 K7',
              file: 'Grundläggning hus 103-135 K7.pdf'
            }, 
            {
              header: 'Grundsektion typ A K8',
              file: 'Grundsektion typ A K8.pdf'
            }, 
            {
              header: 'Grundsektion typ A K9',
              file: 'Grundsektion typ A K9.pdf'
            }, 
            {
              header: 'Kabel-TV Lv norr 03',
              file: 'Kabel-TV Lv norr 03.pdf'
            },  
            {
              header: 'Kort presentation av Askim skommun 07',
              file: 'Kort presentation av Askim skommun 07.pdf'
            }, 
            {
              header: 'Kortfatad byggnadsbeskrivning 06',
              file: 'Kortfatad byggnadsbeskrivning 06.pdf'
            }, 
            {
              header: 'Plan och fasad A2',
              file: 'Plan och fasad A2.pdf'
            }, 
            {
              header: 'Planförslag C C2',
              file: 'Planförslag C C2.pdf'
            }, 
            {
              header: 'Planförslag C C3',
              file: 'Planförslag C C3.pdf'
            }, 
            {
              header: 'Planförslag C C5',
              file: 'Planförslag C C5.pdf'
            }, 
            {
              header: 'Planförslag D D2',
              file: 'Planförslag D D2.pdf'
            }, 
            {
              header: 'Planförslag D D4',
              file: 'Planförslag D D4.pdf'
            },  
            {
              header: 'Plank K32',
              file: 'Plank K32.pdf'
            }, 
            {
              header: 'Plank mitt A07',
              file: 'Plank mitt A07.pdf'
            }, 
            {
              header: 'Plank norr A06',
              file: 'Plank norr A06.pdf'
            }, 
            {
              header: 'Plank söder A08',
              file: 'Plank söder A08.pdf'
            }, 
            {
              header: 'Planlösning 12',
              file: 'Planlösning 12.pdf'
            }, 
            {
              header: 'Principförslag VA A4',
              file: 'Principförslag VA A4.pdf'
            }, 
            {
              header: 'Pålat hus 104,120,121,126,128,131 K13',
              file: 'Pålat hus 104,120,121,126,128,131 K13.pdf'
            }, 
            {
              header: 'Pålat hus bjälklag armering K10',
              file: 'Pålat hus bjälklag armering K10.pdf'
            },  
            {
              header: 'Pålat hus grundbjälklag K11',
              file: 'Pålat hus grundbjälklag K11.pdf'
            }, 
            {
              header: 'Pålat hus grundbjälklag K12',
              file: 'Pålat hus grundbjälklag K12.pdf'
            }, 
            {
              header: 'Pålat hus sektioner K3',
              file: 'Pålat hus sektioner K3.pdf'
            }, 
            {
              header: 'Pålplan hus 10,15,16, 29-31  K1',
              file: 'Pålplan hus 10,15,16, 29-31  K1.pdf'
            },     
            {
              header: 'Pålplan hus 64-66, 133-135, 109,110,115,116 K2',
              file: 'Pålplan hus 64-66, 133-135, 109,110,115,116 K2.pdf'
            }, 
            {
              header: 'Spolbrunn och dränering VA4',
              file: 'Spolbrunn och dränering VA4.pdf'
            }, 
            {
              header: 'Spont vid hus 1 o 2 K4',
              file: 'Spont vid hus 1 o 2 K4.pdf'
            }, 
            {
              header: 'Spont vid hus 76 K14',
              file: 'Spont vid hus 76 K14.pdf'
            }, 
            {
              header: 'Takplan K24',
              file: 'Takplan K24.pdf'
            }, 
            {
              header: 'Takstol K25',
              file: 'Takstol K25.pdf'
            },     
            {
              header: 'VA Av norr 01',
              file: 'VA Av norr 01.pdf'
            }, 
            {
              header: 'VA Av söder 02',
              file: 'VA Av söder 02.pdf'
            }, 
            {
              header: 'Vatten och avloppsledningar Av norr VA1',
              file: 'Vatten och avloppsledningar Av norr VA1.pdf'
            }, 
            {
              header: 'Vatten och avloppsledningar Av söder - Lv norr VA2',
              file: 'Vatten och avloppsledningar Av söder - Lv norr VA2.pdf'
            },  
            {
              header: 'Vatten och avloppsledningar LV söder VA3',
              file: 'Vatten och avloppsledningar LV söder VA3.pdf'
            }, 
            {
              header: 'Väggar K21',
              file: 'Väggar K21.pdf'
            },     
            {
              header: 'Väggsektioner K22',
              file: 'Väggsektioner K22.pdf'
            }, 
            {
              header: 'Väggsektioner K23',
              file: 'Väggsektioner K23.pdf'
            }, 
            {
              header: 'Översikt Av norr 15',
              file: 'Översikt Av norr 15.pdf'
            }, 
            {
              header: 'Översikt Av söder 09',
              file: 'Översikt Av söder 09.pdf'
            }, 
            {
              header: 'Översikt hela området A10',
              file: 'Översikt hela området A10.pdf'
            }, 
            {
              header: 'Översikt mitt 1',
              file: 'Översikt mitt 1.pdf'
            },     
            {
              header: 'Översikt mitt A02',
              file: 'Översikt mitt A02.pdf'
            }, 
            {
              header: 'Översikt norr 2',
              file: 'Översikt norr 2.pdf'
            }, 
            {
              header: 'Översikt norr A01',
              file: 'Översikt norr A01.pdf'
            }, 
            {
              header: 'Översikt söder 3',
              file: 'Översikt söder 3.pdf'
            }, 
            {
              header: 'Översikt söder A03',
              file: 'Översikt söder A03.pdf'
            },                                                                                                                                                                                      
          ],
        },
      },                
    ],
}