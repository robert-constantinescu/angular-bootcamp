import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'elements',
    loadChildren:
      () => import('./elements/elements.module')
                .then(theModule => theModule.ElementsModule)
  },
  {path: 'collections',
    loadChildren:
      () => import('./collections/collections.module')
        .then(theModule => theModule.CollectionsModule)
  },
  {path: 'views',
    loadChildren: () => import('./views/views.module')
      .then(theModule => theModule.ViewsModule)},
  {path: 'modal',
    loadChildren: () => import('./mods/mods.module')
      .then(theModule => theModule.ModsModule)},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
