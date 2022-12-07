import { Component, OnInit, SimpleChanges} from '@angular/core';
import { EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ntap-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  check: any = {
    todos: false,
    nao_lidos: false,
    lidos: false
  }


  @Input() filter: string = '';

  @Output() eventFilter = new EventEmitter<any>();
  change(){
    this.eventFilter.emit()
  }

  ngOnInit(): void {
      console.log('ontinitfilter', this.filter)
      this.changeCheck()
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('changes filter', changes)
    this.changeCheck()
  }
  ngDoCheck(){
    this.eventFilter.emit()
  }

  changeCheck(){
    if (this.filter == 'todos'){

        this.check.todos = true
        this.check.nao_lidos = false
        this.check.lidos = false

    } else if (this.filter == 'nao-lidos'){

      this.check.todos = false
      this.check.nao_lidos = true
      this.check.lidos = false

    } else if (this.filter == 'lidos') {

      this.check.todos = false
      this.check.nao_lidos = false
      this.check.lidos = true
    }
  }

  
}
