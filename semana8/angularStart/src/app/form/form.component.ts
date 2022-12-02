import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  nome: string = '';
  horasAula: string = '';
  escola: string = '';

  constructor(private localStorage: LocalStorageService){}

  cadastrar(){

    console.log(this.localStorage.get('cadastros'))
    if (!this.localStorage.get('cadastros')){
      this.localStorage.set('cadastros', [])
    }
  
  let object = {
    nome : this.nome,
    horasAula: this.horasAula,
    escola: this.escola
  }

  console.log(object)
  let cadastros = this.localStorage.get('cadastros')
  cadastros.push(object)

  this.localStorage.set('cadastros', cadastros)
  }
}
