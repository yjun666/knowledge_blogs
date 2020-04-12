import {
  trigger, animateChild, group,
  transition, animate, style, query, state
} from '@angular/animations';

// Routable animations
export const slideInAnimation = trigger('routeAnimation', [
  transition('*=>HomePage', [
    style({ transform: 'translateY(100%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
  ]),
  transition('HomePage=>*', [
    style({ transform: 'translateY(0%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
  ]),


  transition('*=>AboutPage', [
    style({ transform: 'translateY(100%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
  ]),
  transition('AboutPage=>*', [
    style({ transform: 'translateY(0%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
  ]),


  transition('*=>RxjsPage', [
    style({ transform: 'translateY(100%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
  ]),
  transition('RxjsPage=>*', [
    style({ transform: 'translateY(0%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
  ]),


  transition('*=>LodashPage', [
    style({ transform: 'translateY(100%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
  ]),
  transition('LodashPage=>*', [
    style({ transform: 'translateY(0%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
  ]),


  transition('*=>FilterPage', [
    style({ transform: 'translateY(100%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
  ]),
  transition('FilterPage=>*', [
    style({ transform: 'translateY(0%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
  ]),

  transition('*=>HeroPage', [
    style({ transform: 'translateY(100%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
  ]),
  transition('HeroPage=>*', [
    style({ transform: 'translateY(0%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
  ]),

  transition('*=>DemoPage', [
    style({ transform: 'translateY(100%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
  ]),
  transition('DemoPage=>*', [
    style({ transform: 'translateY(0%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
  ])
]);
