import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ntap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  param: string = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
      
    this.change();
  }

  change(){
    this.param = this.route.snapshot.paramMap.get('check') || '';
    console.log('change-home', this.param)
  }
} 
