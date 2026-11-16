import { Component } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { DadosService, Noticia } from '../services/dados.service';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader,
    IonCardTitle, IonCardSubtitle, IonCardContent],
  template: `
    <ion-header>
      <ion-toolbar color="primary"><ion-title>Notícias</ion-title></ion-toolbar>
    </ion-header>
    <ion-content>
      @for (n of noticias; track n.id) {
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>{{ n.data }}</ion-card-subtitle>
            <ion-card-title>{{ n.titulo }}</ion-card-title>
          </ion-card-header>
          <ion-card-content>{{ n.resumo }}</ion-card-content>
        </ion-card>
      }
    </ion-content>
  `,
})
export class NoticiasPage {
  noticias: Noticia[];
  constructor(dados: DadosService) { this.noticias = dados.noticias; }
}
