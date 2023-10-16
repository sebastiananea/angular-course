import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls:[ './main-page.component.css']
})

export class MainPageComponent {
  public characters: Character[] = [{name:"Goku", power:12.000}, {name:"Krilin", power:1300}];
}
