import { Component } from '@angular/core';
import { Shell } from './components/shell/shell';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [RouterModule, MatToolbarModule, MatButtonModule, Shell],
})
export class App {}
