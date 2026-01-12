import { Component } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';
import { AppLayoutComponent } from "./app-layout/app-layout.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, AppLayoutComponent],
})
export class AppComponent {
  constructor() {}
}
