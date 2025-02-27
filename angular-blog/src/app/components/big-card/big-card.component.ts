import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

  photoCover:string ="https://wallpapers.com/images/high/bts-2021-desktop-45ah2uxer05vrgiv.webp"
  cardTitle:string ="BTS O maior da coreia"
  cardDescription:string =""

  constructor() { }

  ngOnInit(): void{  
  }
}
