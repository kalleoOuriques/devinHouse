import { Component,} from '@angular/core';
import { EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent{

    texto: string = "";

    @Output() eventTexto = new EventEmitter<string>();

    consolePai(){
       this.eventTexto.emit(this.texto)
    }

}
