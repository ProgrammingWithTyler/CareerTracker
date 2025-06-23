import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ct-shell',
  standalone: true,
  imports: [ButtonModule, RouterOutlet, RouterModule],
  templateUrl: './shell.html',
  styleUrls: ['./shell.scss'],
})
export class Shell {}
