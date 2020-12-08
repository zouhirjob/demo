import { Component, ViewEncapsulation } from '@angular/core';
import { CustomIconService } from './services/custom-icon.service';

@Component({
  selector: 'espace-conseil-app1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'espace-conseil-app1';
  constructor(
    private customIconService: CustomIconService
  ) {
    // using service to register custom icon
    this.customIconService.init();
  }
}
