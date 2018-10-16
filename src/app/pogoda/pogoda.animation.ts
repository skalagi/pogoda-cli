import { trigger, style, state, animate, transition } from '@angular/animations';

export const slideTrigger = trigger('slide', [
    state('closed', style({
        height: 0,
    })),

    state('void', style({
        height: 0,
    })),

    state('open, *', style({
        height: '*',
    })),

    transition('* <=> *', [
        animate('.4s cubic-bezier(0.4, 0.0, 0.2, 1)'),
    ]),
]);
