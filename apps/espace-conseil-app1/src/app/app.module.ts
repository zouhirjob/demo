import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiComponentModule } from 'libs/ui-component/src/lib/ui-component.module';
import { CustomIconService } from './services/custom-icon.service';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiComponentModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [CustomIconService],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

 ngDoBootstrap() {
   const element = createCustomElement(AppComponent, {
     injector: this.injector
   });

   customElements.define('espace-conseil-app-1', element);
 }
}
