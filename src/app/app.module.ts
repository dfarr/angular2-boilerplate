
// System modules
import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { HttpModule }                       from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Application components
import { AppComponent }      from './app.component';
import { ExampleComponent }  from './components/example.component';
import { NotFoundComponent } from './components/not-found.component';

// Application services
import { API } from './api';

// Routing component
import { routing, routingProviders } from './app.routing';

// Vendor
import { PopoverModule } from 'ng2-popover';

// Favicon
// import '../assets/images/favicon.ico';

// App libraries
import '../../node_modules/jquery/dist/jquery.js';
import '../../node_modules/tether/dist/js/tether.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';

// App stylesheet
import '../assets/styles/app.scss';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    PopoverModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    ExampleComponent,
    NotFoundComponent
  ],
  providers: [
    API,
    routingProviders
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
