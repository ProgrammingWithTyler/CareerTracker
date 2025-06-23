import { Component } from '@angular/core';
import { Shell } from './components/shell/shell';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [RouterModule, Shell],
})
export class App {}
