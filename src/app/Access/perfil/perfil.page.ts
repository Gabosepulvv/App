import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  username: string = '';
  password: string = '';

  constructor(private alertController: AlertController, private router: Router) {}

  async validarLogin() {
    if (!this.username || !this.password) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingrese su nombre de usuario y contraseña.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Inicio Exitoso',
        message: `Bienvenido ${this.username}`,
        buttons: [{
          text: 'OK',
          handler: () => {
            const navigationExtras: NavigationExtras = {
              state: {
                username: this.username
              }
            };
            this.router.navigate(['/viajes'], navigationExtras);
          }
        }]
      });
      await alert.present();
    }
  }
}
