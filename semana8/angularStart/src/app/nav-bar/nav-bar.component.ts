import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() eventFormSchool = new EventEmitter<boolean>();

  @Output() eventSerieCard = new EventEmitter<boolean>();

  @Output() eventBusca = new EventEmitter<boolean>();

  navSchoolForm(){
    this.eventFormSchool.emit(false)
    this.eventSerieCard.emit(true)
    this.eventBusca.emit(true)
  }

  navSerieCard(){
    this.eventFormSchool.emit(true)
    this.eventSerieCard.emit(false)
    this.eventBusca.emit(true)
  }

  navBusca(){
    this.eventFormSchool.emit(true)
    this.eventSerieCard.emit(true)
    this.eventBusca.emit(false)
  }

  ngOnInit(): void {
    this.eventFormSchool.emit(true)
    this.eventSerieCard.emit(true)
    this.eventBusca.emit(true)
  }
}
