import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader,
    IonCardTitle, IonCardContent, IonButton],
  template: `
    <ion-header>
      <ion-toolbar color="primary"><ion-title>SINDADOS-BA</ion-title></ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header><ion-card-title>Bem-vindo(a), associado(a)!</ion-card-title></ion-card-header>
        <ion-card-content>
          Acompanhe as notícias da categoria e consulte os Acordos e Convenções Coletivas de Trabalho vigentes.
        </ion-card-content>
      </ion-card>
      <ion-button expand="block" routerLink="/app/noticias">Notícias</ion-button>
      <ion-button expand="block" routerLink="/app/acordos">ACTs e CCTs</ion-button>
    </ion-content>
  `,
})
export class HomePage {}
