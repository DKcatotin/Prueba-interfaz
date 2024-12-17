import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  form = {
    nombre: '',
    correo: '',
    numero: ''
  };

  onSubmit() {
    console.log("Formulario Enviado", this.form);
    // Aquí puedes manejar el envío del formulario
  }

  onCancel() {
    this.form = { nombre: '', correo: '', numero: '' };
    console.log("Formulario Cancelado");
  }
}
