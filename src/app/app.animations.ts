import { 
    trigger, 
    state, 
    style, 
    transition, 
    animate, 
    query,
    stagger,
    group, 
    animateChild} from '@angular/animations';

export const slideInAnimation = 
trigger('slideIn', [
  transition('* => *', [
    query(
      '.slide-in-bottom', 
      style({ opacity: 0, transform: 'translate(0px, 40px)' }), 
      { optional: true },
    ),

    query(
      '.slide-in-bottom', 
      stagger('40ms', [
        animate(
          '400ms 100ms ease', 
          style({ opacity: 1, transform: 'translateX(0)' }),
        ),
      ]),
      { optional: true },
    ),

    query(
      '.slide-in-bottom', [animate(100, style('*'))],
      { optional: true },
    ),
  ]),
]);


export const heroAnimations = 
  trigger('heroAnimation', [
    transition('* => *', [
      group([
        query(
          '.top', 
          style({ opacity: 0, transform: 'translateY(20px)' }),
          { optional: true },
        ),

        query(
          '.top', 
          animate('400ms 0ms ease', style('*')),  
          { optional: true },
        ),

        query(
          '.heading', 
          style({ opacity: 0, transform: 'translateY(20px)' }),
          { optional: true },
        ),

        query(
          '.heading', 
          animate('400ms 100ms ease', style('*')),
        ),

        query(
          '.paragraph', 
          style({ opacity: 0, transform: 'translateY(20px)' }),
          { optional: true },
        ),

        query(
          '.paragraph',
          animate('400ms 200ms ease', style('*')), 
          { optional: true },
        ),

        query(
          '.btn', 
          style({ opacity: 0, transform: 'translateY(40px)' }),
          { optional: true },
        ),

        query(
          '.btn', 
          stagger('50ms', [
            animate('200ms ease', style('*')),
          ]),
          { optional: true },
        ),

        query(
          '.scroll-container', 
          style({ opacity: 0, bottom: '80px' }),
          { optional: true },
        ),

        query(
          '.scroll-container',
          animate('400ms 1000ms', style('*')),
          { optional: true },
        ), 
      ]),
    ]),
  ]);

export const staggerFade = 
  trigger('animate', [
    transition('* => *', [
      query(
        '.animate',
        style({ opacity: 0 }),
        { optional: true },
      ),
      query(
        '.animate', 
        stagger('200ms', [
          animate('400ms', style('*')),
        ]),
        { optional: true },
      ),
    ]),    
  ]);


export const staggerSlideFade = 
  trigger('animate', [
    transition('* => *', [
      query(
        '.animate',
        style({ opacity: 0, transform: 'translateX(10px)' }),
        { optional: true },
      ),
      query(
        '.animate', 
        stagger('200ms', [
          animate('400ms', style('*')),    
        ]),
        { optional: true },
      ),
    ]),    
  ]);
