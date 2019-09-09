import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { SociosComponent } from './components/socios/socios.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { AbmComponent } from './components/socios/abm/abm.component';
import { ModificarComponent } from './components/socios/modificar/modificar.component';
import { CobrarComponent } from './components/socios/cobrar/cobrar.component';
import { ReservarComponent } from './components/socios/reservar/reservar.component';
import { PagoprovComponent } from './components/administracion/pagoprov/pagoprov.component';
import { ModificarprovComponent } from './components/administracion/modificarprov/modificarprov.component';
import { AbminsumosComponent } from './components/administracion/abminsumos/abminsumos.component';
import { AltaprovComponent } from './components/administracion/altaprov/altaprov.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'socios', component: SociosComponent,
    children: [
      {path: 'abm', component: AbmComponent},
      {path: 'modificar', component: ModificarComponent},
      {path: 'cobrar', component: CobrarComponent},
      {path: 'reservar', component: ReservarComponent},
    ]
  },
  {path: 'administracion', component: AdministracionComponent,
    children: [
      {path: 'altaprov', component: AltaprovComponent},
      {path: 'modificarprov', component: ModificarprovComponent},
      {path: 'pagoprov', component: PagoprovComponent},
      {path: 'abminsumos', component: AbminsumosComponent},
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'principal'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
