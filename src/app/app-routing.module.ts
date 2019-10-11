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
import { RutinasComponent } from './components/socios/rutinas/rutinas.component';
import { SucursalComponent } from './components/administracion/sucursal/sucursal.component';
import { AuditoriaComponent } from './components/administracion/auditoria/auditoria.component';
import { AbmempleadosComponent } from './components/empleados/abmempleados/abmempleados.component';
import { HorastrabajadasComponent } from './components/empleados/horastrabajadas/horastrabajadas.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { GestionmarketingComponent } from './components/gestionmarketing/gestionmarketing.component';
import { PotencialesclientesComponent } from './components/gestionmarketing/potencialesclientes/potencialesclientes.component';
import { SeguimientosociosComponent } from './components/gestionmarketing/seguimientosocios/seguimientosocios.component';
import { CentromedicoComponent } from './components/centromedico/centromedico.component';
import { AbmconsultoriosComponent } from './components/centromedico/abmconsultorios/abmconsultorios.component';
import { AbmprofesionalesComponent } from './components/centromedico/abmprofesionales/abmprofesionales.component';
import { BusquedapacienteComponent } from './components/centromedico/busquedapaciente/busquedapaciente.component';
import { GestionestadisticasComponent } from './components/gestionestadisticas/gestionestadisticas.component';
import { ListadosociosComponent } from './components/gestionestadisticas/listadosocios/listadosocios.component';
import { GraficoscuentasComponent } from './components/gestionestadisticas/graficoscuentas/graficoscuentas.component';
import { AbmactividadesComponent } from './components/actividades/abmactividades/abmactividades.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'socios', component: SociosComponent,
    children: [
      {path: 'abm', component: AbmComponent},
      {path: 'modificar', component: ModificarComponent},
      {path: 'cobrar', component: CobrarComponent},
      {path: 'reservar', component: ReservarComponent},
      {path: 'rutinas', component: RutinasComponent}
    ]
  },
  {path: 'empleados', component: EmpleadosComponent,
    children: [
      {path: 'abmempleados', component: AbmempleadosComponent},
      {path: 'horastrabajadas', component: HorastrabajadasComponent}
    ]
  },
  {path: 'administracion', component: AdministracionComponent,
    children: [
      {path: 'altaprov', component: AltaprovComponent},
      {path: 'modificarprov', component: ModificarprovComponent},
      {path: 'pagoprov', component: PagoprovComponent},
      {path: 'abminsumos', component: AbminsumosComponent},
      {path: 'sucursal', component: SucursalComponent},
      {path: 'auditoria', component: AuditoriaComponent}
    ]
  },
  {path: 'actividades', component: ActividadesComponent},
  {path: 'actividades/:id', component: AbmactividadesComponent},

  {path: 'gestionmarketing', component: GestionmarketingComponent,
    children: [
      {path: 'potencialesclientes', component: PotencialesclientesComponent},
      {path: 'seguimientosocios', component: SeguimientosociosComponent}
    ]
  },
  {path: 'centromedico', component: CentromedicoComponent,
    children: [
      {path: 'abmconsultorios', component: AbmconsultoriosComponent},
      {path: 'ambprofesionales', component: AbmprofesionalesComponent},
      {path: 'busquedapaciente', component: BusquedapacienteComponent}
    ]
  },
  {path: 'gestionestadisticas', component: GestionestadisticasComponent,
    children: [
      {path: 'listadosocios', component: ListadosociosComponent},
      {path: 'graficoscuentas', component: GraficoscuentasComponent},
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'principal'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
