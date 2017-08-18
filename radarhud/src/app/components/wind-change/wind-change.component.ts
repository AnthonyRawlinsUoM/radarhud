import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wind-change',
  templateUrl: './wind-change.component.html',
  styleUrls: ['./wind-change.component.css']
})
export class WindChangeComponent implements OnInit {


  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
