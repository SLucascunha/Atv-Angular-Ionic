import { Component } from '@angular/core';
import { AlertController, IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge, IonButton } from '@ionic/angular/standalone';
import { DadosService, Acordo } from '../services/dados.service';

@Component({
  selector: 'app-acordos',
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader,
    IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge, IonButton],
  template: `
    <ion-header>
      <ion-toolbar color="primary"><ion-title>ACTs e CCTs</ion-title></ion-toolbar>
    </ion-header>
    <ion-content>
      @for (a of acordos; track a.id) {
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>Vigência: {{ a.vigencia }}</ion-card-subtitle>
            <ion-card-title>{{ a.titulo }}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-badge [color]="a.status === 'Vigente' ? 'success' : 'warning'">{{ a.status }}</ion-badge>
            <br />
            <ion-button size="small" class="ion-margin-top" (click)="verResumo(a)">Ver cláusulas</ion-button>
          </ion-card-content>
        </ion-card>
      }
    </ion-content>
  `,
})
export class AcordosPage {
  acordos: Acordo[];
  constructor(dados: DadosService, private alertCtrl: AlertController) { this.acordos = dados.acordos; }

  async verResumo(a: Acordo) {
    const alert = await this.alertCtrl.create({
      header: a.titulo,
      message: a.clausulas.join('<br>'),
      buttons: ['Fechar'],
    });
    await alert.present();
  }
}
