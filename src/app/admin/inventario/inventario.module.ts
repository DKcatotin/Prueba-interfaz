import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './components/producto/producto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToolbarModule} from 'primeng/toolbar'
import { FileUploadModule } from 'primeng/fileupload';
import { RatingModule } from 'primeng/rating';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria'; 
@NgModule({
  declarations: [
    ProductoComponent,
    CategoriaComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    ToolbarModule,
    FileUploadModule,
    RatingModule,
    FormsModule,
    CardModule,
    GalleriaModule 
  ]
})
export class InventarioModule { }
