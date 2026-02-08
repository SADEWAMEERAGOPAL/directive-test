import { Component } from '@angular/core';
import { Iplayers } from './const/players';
import { playersdata } from './model/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directive-test';
  serchPlayers: string=""

title1= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore officiis fuga! Explicabo rerum iure, illum, quas harum autem voluptatibus doloribus quasi neque aut at tenetur quo possimus, quae qui.'



playesraArr: Iplayers[]=playersdata
}
