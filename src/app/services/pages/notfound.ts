import { Page } from '../content.service';
import { Hero } from '../../components/hero/hero.component';

export const notFoundContent: Page = {
        title: '404 - Sidan hittades inte',
        description: 'Sidan hittades inte',
        modules: [
            {
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
                    disableScrollDown: true,       
                },
            }, 
        ],
}