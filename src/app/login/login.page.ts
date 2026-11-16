import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonContent, IonHeader, IonToolbar, IonTitle, IonItem,
  IonInput, IonButton, IonText } from '@ionic/angular/standalone';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, IonContent, IonHeader, IonToolbar, IonTitle, IonItem, IonInput, IonButton, IonText],
  template: `
    <ion-header>
      <ion-toolbar color="primary"><ion-title>SINDADOS-BA</ion-title></ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h2 class="ion-text-center">Área do Associado</h2>
      <ion-item>
        <ion-input label="E-mail ou Matrícula/CPF" labelPlacement="floating"
          [(ngModel)]="usuario" type="text"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="Senha" labelPlacement="floating"
          [(ngModel)]="senha" type="password"></ion-input>
      </ion-item>
      @if (erro) { <ion-text color="danger"><p class="ion-padding-start">{{ erro }}</p></ion-text> }
      <ion-button expand="block" class="ion-margin-top" (click)="entrar()">Entrar</ion-button>
      <p class="ion-text-center"><small>Teste: associado@sindados.org.br / 123456</small></p>
    </ion-content>
  `,
})
export class LoginPage {
  usuario = '';
  senha = '';
  erro = '';

  constructor(private dados: DadosService, private router: Router, private alertCtrl: AlertController) {}

  async entrar() {
    this.erro = '';
    if (!this.usuario.trim() || !this.senha) {
      this.erro = 'Preencha todos os campos.';
      return;
    }
    if (this.dados.login(this.usuario, this.senha)) {
      this.senha = '';
      this.router.navigate(['/app/home'], { replaceUrl: true });
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Erro de login', message: 'Credenciais inválidas.', buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
