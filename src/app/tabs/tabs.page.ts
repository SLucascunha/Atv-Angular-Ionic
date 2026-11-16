import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, newspaperOutline, documentTextOutline, logOutOutline } from 'ionicons/icons';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home"><ion-icon name="home-outline"></ion-icon><ion-label>Home</ion-label></ion-tab-button>
        <ion-tab-button tab="noticias"><ion-icon name="newspaper-outline"></ion-icon><ion-label>Notícias</ion-label></ion-tab-button>
        <ion-tab-button tab="acordos"><ion-icon name="document-text-outline"></ion-icon><ion-label>ACTs/CCTs</ion-label></ion-tab-button>
        <ion-tab-button (click)="sair()"><ion-icon name="log-out-outline"></ion-icon><ion-label>Sair</ion-label></ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
})
export class TabsPage {
  constructor(private dados: DadosService, private router: Router) {
    addIcons({ homeOutline, newspaperOutline, documentTextOutline, logOutOutline });
  }
  sair() {
    this.dados.logout();
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
