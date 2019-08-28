import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { SociosComponent } from './components/socios/socios.component';
import { AdministracionComponent } from './components/administracion/administracion.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'socios', component: SociosComponent},
  {path: 'administracion', component: AdministracionComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'principal'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
