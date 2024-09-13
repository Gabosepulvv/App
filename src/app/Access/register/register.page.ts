import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';
  telefono: string = '';
  marcaAuto: string = '';
  modeloAuto: string = '';
  anioAuto: string = '';
  recordarContrasena: boolean = false;

  constructor(private alertController: AlertController) {}

  async validarRegistro() {
    if (!this.nombre || !this.correo || !this.contrasena || !this.telefono || !this.marcaAuto || !this.modeloAuto || !this.anioAuto) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Registro Exitoso',
        message: 'La información ha sido guardada correctamente.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
