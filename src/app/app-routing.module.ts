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
import { LoginComponent } from './components/shared/login/login.component';
import { ListaComponent } from './components/socios/lista/lista.component';
import { ListadoempleadosComponent } from './components/empleados/listadoempleados/listadoempleados.component';
import { ModificarempleadoComponent } from './components/empleados/modificarempleado/modificarempleado.component';
import { ListadoproveedoresComponent } from './components/administracion/listadoproveedores/listadoproveedores.component';
import { UsuariosComponent } from './components/administracion/usuarios/usuarios.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { EditaractividadComponent } from './components/actividades/editaractividad/editaractividad.component';
import { ListadoactComponent } from './components/actividades/listadoact/listadoact.component';
import { ListadoconsulComponent } from './components/centromedico/listadoconsul/listadoconsul.component';
import { ListadoprofesionalesComponent } from './components/centromedico/listadoprofesionales/listadoprofesionales.component';
import { AsistenciasComponent } from './components/gestionestadisticas/asistencias/asistencias.component';
import { BoxesComponent } from './components/gestionestadisticas/boxes/boxes.component';
import { CajaComponent } from './components/gestionestadisticas/caja/caja.component';
import { SociosActividadComponent } from './components/gestionestadisticas/socios-actividad/socios-actividad.component';
import { PrintLayoutComponent } from './components/impresiones/print-layout/print-layout.component';
import { ImpresionactsComponent } from './components/impresiones/impresionacts/impresionacts.component';
import { CajagymComponent } from './components/cajagym/cajagym.component';
import { SacarturnoComponent } from './components/sacarturno/sacarturno.component';
import { BuscadorrutinasComponent } from './components/buscadorrutinas/buscadorrutinas.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'buscadorrutinas', component: BuscadorrutinasComponent},
  {path: 'cajagym', component: CajagymComponent},
  {path: 'sacarturno', component: SacarturnoComponent},
  { path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice/:invoiceIds', component: ImpresionactsComponent }
    ]
  },
  {path: 'socios', component: SociosComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'lista'},
      {path: 'lista', component: ListaComponent},
      {path: 'abm', component: AbmComponent},
      {path: 'modificar', component: ModificarComponent},
      {path: 'cobrar', component: CobrarComponent},
      {path: 'reservar', component: ReservarComponent}
    ]
  },
  {path: 'socios/:id', component: ModificarComponent},
  {path: 'socios/cobrar/:id', component: CobrarComponent},
  {path: 'socios/reservar/:id', component: ReservarComponent},
  {path: 'socios/rutinas/:id', component: RutinasComponent},
  {path: 'empleados', component: EmpleadosComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'listadoempleados'},
      {path: 'listadoempleados', component: ListadoempleadosComponent},
      {path: 'abmempleados', component: AbmempleadosComponent},
      {path: 'horastrabajadas', component: HorastrabajadasComponent}
    ]
  },
  {path: 'empleados/:id', component: ModificarempleadoComponent},
  {path: 'empleados/horastrabajadas/:id', component: HorastrabajadasComponent},
  {path: 'administracion', component: AdministracionComponent,
    children: [
      {path: 'altaprov', component: AltaprovComponent},
      {path: 'modificarprov', component: ModificarprovComponent},
      {path: 'pagoprov', component: PagoprovComponent},
      {path: 'abminsumos', component: AbminsumosComponent},
      {path: 'sucursal', component: SucursalComponent},
      {path: 'auditoria', component: AuditoriaComponent},
      {path: 'listadoproveedores', component: ListadoproveedoresComponent},
      {path: 'usuarios', component: UsuariosComponent}
    ]
  },
  {path: 'actividades', component: ActividadesComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'listadoact'},
      {path: 'listadoact', component: ListadoactComponent},
      {path: 'abmactividades', component: AbmactividadesComponent}
    ]
  },
  {path: 'actividades/:id', component: EditaractividadComponent},

  {path: 'gestionmarketing', component: GestionmarketingComponent,
    children: [
      {path: 'potencialesclientes', component: PotencialesclientesComponent},
      {path: 'seguimientosocios', component: SeguimientosociosComponent}
    ]
  },
  {path: 'centromedico', component: CentromedicoComponent,
    children: [
      {path: 'listadoconsul', component: ListadoconsulComponent},
      {path: 'listadoprofesionales', component: ListadoprofesionalesComponent},
      {path: 'abmconsultorios', component: AbmconsultoriosComponent},
      {path: 'abmprofesionales', component: AbmprofesionalesComponent},
      {path: 'busquedapaciente', component: BusquedapacienteComponent}
    ]
  },
  {path: 'gestionestadisticas', component: GestionestadisticasComponent,
    children: [
      {path: 'listadosocios', component: ListadosociosComponent},
      {path: 'graficoscuentas', component: GraficoscuentasComponent},
      {path: 'asistencias', component: AsistenciasComponent},
      {path: 'boxes', component: BoxesComponent},
      {path: 'caja', component: CajaComponent},
      {path: 'sociosAct', component: SociosActividadComponent},
    ]
  },
  {path: 'entrada', component: EntradaComponent},
  { path: 'login', component: LoginComponent,  pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'principal'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
