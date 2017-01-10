import { Routes, RouterModule }   from '@angular/router';

// Copmonents
import { ExampleComponent }  from './components/example.component';
import { NotFoundComponent } from './components/not-found.component';

// Resolvers
import { ExampleResolver } from './resolvers/example.resolver';


const routes: Routes = [

  { path: '', resolve: { value: ExampleResolver }, component: ExampleComponent },

  { path: '**', component: NotFoundComponent }

];

export const routingProviders: any[] = [
  ExampleResolver
];

export const routing = RouterModule.forRoot(routes);
