import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cards',
  styleUrl: './cards.css',
  templateUrl: './cards.html',
})
export class Cards {
  
  @Input() imagePathCard: string = '';
  @Input() tituloCard: string = '';
  @Input() textoCorpo: string = '';
  @Input() textoBotao: string = '';

}
