import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LayoutComponent } from './layout/layout.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { CategoriaService } from './inventario/services/categoria.service';
import { TableModule } from 'primeng/table';
import { InventarioModule } from './inventario/inventario.module';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ClienteComponent,
    
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppLayoutModule,
    TableModule,
    CarouselModule,
    CardModule,
    ButtonModule
  ],
  providers:[
    CategoriaService
  ]
})
export class AdminModule { }
