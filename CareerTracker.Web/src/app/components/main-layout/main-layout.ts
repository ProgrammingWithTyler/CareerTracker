import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ct-main-layout',
  standalone: true,
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss'],
  imports: [
    RouterModule,
    RouterOutlet,
    MenubarModule,
    PanelMenuModule,
    SidebarModule,
  ],
})
export class MainLayout {
  menuItems: MenuItem[] = [];
  showSidebar = false;

  ngOnInit() {
    this.menuItems = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
      { label: 'Jobs', icon: 'pi pi-briefcase', routerLink: '/jobs' },
      { label: 'Reports', icon: 'pi pi-chart-line', routerLink: '/reports' },
      {
        label: 'User',
        icon: 'pi pi-user',
        items: [
          { label: 'Profile', icon: 'pi pi-id-card', routerLink: '/profile' },
          { label: 'Settings', icon: 'pi pi-cog', routerLink: '/settings' },
          { separator: true },
          { label: 'Logout', icon: 'pi pi-sign-out' },
        ],
      },
    ];
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }
  // toggleDarkMode() {
  //   document.body.classList.toggle('dark-mode');
  // }
}
