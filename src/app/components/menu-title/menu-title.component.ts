import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css', './menu-title.responsive.component.css']
})
export class MenuTitleComponent implements OnInit {
  @Input()
  Title:string = ""

  contructor(){}

  ngOnInit(): void{

}
}