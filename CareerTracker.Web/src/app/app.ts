import { Component } from '@angular/core';
import { Shell } from './components/shell/shell';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <app-shell /> `,
  imports: [Shell],
})
export class App {}
