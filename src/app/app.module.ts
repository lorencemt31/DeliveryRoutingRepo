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

/* Api */
import {
  DeliveryApi
} from './shared/api/delivery';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    rootRouting,
  ],
  exports: [],
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotFoundComponent
  ],
  providers: [DeliveryApi],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
