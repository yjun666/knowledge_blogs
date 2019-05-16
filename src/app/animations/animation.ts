import {
  trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

const name = ['RxjsPage', 'LodashPage', 'FilterPage'];

const createRepeatAnimate = x => x.map(n => {
  return transition(`* <=> ${n}`, [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%' }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ]);
});

const routeAnimateRepeat = createRepeatAnimate(name);
console.log(routeAnimateRepeat);

// Routable animations
export const slideInAnimation =
  trigger('routeAnimation', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    ...routeAnimateRepeat,
  ]);
