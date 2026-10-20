import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-eventos',
  styleUrl: './eventos.css',
  templateUrl: './eventos.html',
})
export class Eventos {
  nome: string = '';
  curso: string = '';
  usuarios: any[] = [];
  salvar() {
    console.log("Disparou");
    this.usuarios.push({

      nome: this.nome,
      curso: this.curso

    });

  }

}
