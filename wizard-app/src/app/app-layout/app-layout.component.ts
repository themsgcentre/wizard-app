import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  imports: [IonRouterOutlet],
})
export class AppLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
