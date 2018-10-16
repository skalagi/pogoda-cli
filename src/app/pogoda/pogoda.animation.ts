import { trigger, style, state, animate, transition } from '@angular/animations';

export const slideTrigger = trigger('slide', [
    state('void', style({ height: 0 })),

    transition(':leave', [
      animate('.4s cubic-bezier(0.4, 0.0, 0.2, 1)', style({ height: 0 }))
    ]),

    transition(':enter', [
      animate('.4s cubic-bezier(0.4, 0.0, 0.2, 1)', style({ height: '*' })),
    ]),
]);
