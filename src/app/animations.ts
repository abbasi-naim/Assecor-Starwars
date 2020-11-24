import { animation, animate, style } from '@angular/animations';

export const transAnimation = animation([
  style({ opacityIn: '{{opacity}}' }),
  animate('{{ time }}', style({ opacityOut: '{{opacity}}' })),
]);
