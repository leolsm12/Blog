import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  @Input()
  Title1:string = ""
  @Input()
  Title2:string = ""
  @Input()
  Title3:string = ""
  @Input()
  Link1:string = ""
  @Input()
  Link2:string = ""
  @Input()
  Link3:string = ""


  contructor(){}

  ngOnInit(): void{

}
}
