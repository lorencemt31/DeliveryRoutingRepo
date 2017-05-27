/* angular components */
import {
  NgModule,
} from '@angular/core';
import {
  RouterOutlet
} from '@angular/router';
import {
  BrowserModule
}  from '@angular/platform-browser';
import {
  FormsModule
} from '@angular/forms';
/* Components */
import {
  AppComponent
} from './app.component';
import {
  IndexComponent
} from './components/index/index.component';
import {
  PageNotFoundComponent
} from './components/page.not.found.component';

/* routing */
import {
  rootRouting
} from './components/root.route.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    rootRouting,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBayzvtJ6Vt4R6gX3iRuFS40nh9rgeKxhY'
    })
  ],
  exports: [],
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  consstructor() {
  }
}
