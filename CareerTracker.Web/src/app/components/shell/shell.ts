import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './shell.html',
  // template: `
  //   <mat-toolbar color="primary"> CareerTracker </mat-toolbar>
  //   <main style="padding: 1rem;">
  //     <h1>Welcome to CareerTracker</h1>
  //     <p>This is a placeholder. The real app is coming.</p>
  //   </main>
  // `,
})
export class Shell {}
