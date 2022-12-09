import { Component, DoCheck, OnInit, SimpleChanges} from '@angular/core';
import { EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ntap-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements DoCheck {

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

  ngDoCheck(){
    this.eventFilter.emit()
  }


  
}
