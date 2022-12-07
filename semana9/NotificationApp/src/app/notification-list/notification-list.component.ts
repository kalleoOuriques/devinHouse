import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import {notifications} from '../contents/notifications';


@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})


export class NotificationListComponent implements OnInit {
  

  @Output() eventFilterNotify = new EventEmitter<any>();
  @Input() filter : string = '';
  param: string = ''

  all_notify = notifications;
  notify = notifications;

  constructor(){}
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('changes', changes)
    this.param = this.filter
  }
  read(i: number){
    if(this.notify[i].lido){
      this.notify[i].lido = false
      this.all_notify[i].lido = false
    } else {
      this.notify[i].lido = true
      this.all_notify[i].lido = true
    }
  }

  filterEvent(){
    this.eventFilterNotify.emit()
    
    if(this.filter == 'todos'){
      this.notify = this.all_notify
    } else if (this.filter == 'nao-lidos') {

      this.notify = this.all_notify.filter(function(obj){
        return obj.lido == false;
      })
    } else if (this.filter == 'lidos'){

      this.notify = this.all_notify.filter(function(obj){
        return obj.lido == true;
      })
    }
    
  }

  }


