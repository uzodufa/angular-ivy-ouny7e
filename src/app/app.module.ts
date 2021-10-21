import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {
  AppInitializerFactory,
  InitializerService,
} from './app-initializer.service';
import { OrganizationService } from './organization.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: AppInitializerFactory,
      deps: [InitializerService],
      multi: true,
    },
    OrganizationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
