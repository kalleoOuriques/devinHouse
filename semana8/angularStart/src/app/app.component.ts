import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Ex1'

  schoolForm: boolean = true;
  serieCard: boolean = true;
  busca: boolean = true;
  texto: string = '';

  appSchoolForm(update: boolean){
    this.schoolForm = update
  }

  appSerieCard(update: boolean){
    this.serieCard = update
  }

  appBusca(update: boolean){
    this.busca = update
  }

  appTexto(update: string){
    
    console.log(update)
  }

  p: any = {
    nome: 'Tyron Lannister',
    imagem: "../../assets/images/tyronLannister.jpg",
    nomeAtor: 'Peter Dinklage',
    descricao:
      'Peter Hayden Dinklage (Morristown, 11 de junho de 1969) é um premiado e aclamado ator americano. Mais conhecido por interpretar Tyrion Lannister na série de Fantasia da HBO Game of Thrones e já atuou em filmes como The Station Agent, Elf, Underdog, Find Me Guilty e The Chronicles of Narnia: Prince Caspian.',
  };
}
