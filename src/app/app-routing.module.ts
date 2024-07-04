import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './screens/catalogo/catalogo.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalogo', component: CatalogoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
