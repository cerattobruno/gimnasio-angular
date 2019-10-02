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
    AbminsumosComponent
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
