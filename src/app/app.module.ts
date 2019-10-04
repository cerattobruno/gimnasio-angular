import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SociosComponent } from './components/socios/socios.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { IngresoComponent } from './components/shared/ingreso/ingreso.component';
import { AbmComponent } from './components/socios/abm/abm.component';

import { FormsModule} from '@angular/forms';
import { ModificarComponent } from './components/socios/modificar/modificar.component';
import { ReservarComponent } from './components/socios/reservar/reservar.component';
import { CobrarComponent } from './components/socios/cobrar/cobrar.component';
import { AltaprovComponent } from './components/administracion/altaprov/altaprov.component';
import { ModificarprovComponent } from './components/administracion/modificarprov/modificarprov.component';
import { PagoprovComponent } from './components/administracion/pagoprov/pagoprov.component';
import { AbminsumosComponent } from './components/administracion/abminsumos/abminsumos.component';
import { RutinasComponent } from './components/socios/rutinas/rutinas.component';
import { SucursalComponent } from './components/administracion/sucursal/sucursal.component';
import { AuditoriaComponent } from './components/administracion/auditoria/auditoria.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { AbmempleadosComponent } from './components/empleados/abmempleados/abmempleados.component';
import { HorastrabajadasComponent } from './components/empleados/horastrabajadas/horastrabajadas.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { AbmactividadesComponent } from './components/actividades/abmactividades/abmactividades.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PrincipalComponent,
    SociosComponent,
    AdministracionComponent,
    IngresoComponent,
    AbmComponent,
    ModificarComponent,
    ReservarComponent,
    CobrarComponent,
    AltaprovComponent,
    ModificarprovComponent,
    PagoprovComponent,
    AbminsumosComponent,
    RutinasComponent,
    SucursalComponent,
    AuditoriaComponent,
    EmpleadosComponent,
    AbmempleadosComponent,
    HorastrabajadasComponent,
    ActividadesComponent,
    AbmactividadesComponent,
    GestionmarketingComponent,
    PotencialesclientesComponent,
    SeguimientosociosComponent,
    CentromedicoComponent,
    AbmconsultoriosComponent,
    AbmprofesionalesComponent,
    BusquedapacienteComponent,
    GestionestadisticasComponent,
    ListadosociosComponent,
    GraficoscuentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
