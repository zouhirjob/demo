import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiComponentModule } from 'libs/ui-component/src/lib/ui-component.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    UiComponentModule
  ],
  providers: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(AppComponent, {
      injector: this.injector
    });
 
    customElements.define('espace-conseil-app-2', element);
  }
}
