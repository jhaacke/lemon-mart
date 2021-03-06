import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <mat-toolbar color="primary">
    <button mat-icon-button><mat-icon>menu</mat-icon></button>
    <mat-icon svgIcon="lemon"></mat-icon>
    <a mat-button routerLink="/home"><h1>LemonMart</h1></a>
    <span class="flex-spacer"></span>
    <button mat-icon-button><mat-icon>account_circle</mat-icon></button>
  </mat-toolbar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lemon-mart';

  constructor(iconRegistry: MatIconRegistry, sanitizor: DomSanitizer) {
    iconRegistry.addSvgIcon('lemon', sanitizor.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg'));
  }
}
