import { Component, Input, OnInit } from '@angular/core';
import {notifications} from '../contents/notifications';


@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})


export class NotificationListComponent {
  
  notify = notifications;

  check: Boolean = false;

  constructor(){}

  read(i: number){
    if(this.notify[i].lido){
      this.notify[i].lido = false
    } else {
      this.notify[i].lido = true
    }
  }
  }


