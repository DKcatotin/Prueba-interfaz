import { Component, CUSTOM_ELEMENTS_SCHEMA,OnInit, inject } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

interface Categoria{
  id: number;
  nombre: string;
  detalle: string
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss',
  
})
export class CategoriaComponent {
  images: any[];
  responsiveOptions: any[];
  activeIndex: number = 0;

  constructor() {
    // Definir las imágenes para la galería
    this.images = [
      {
        itemImageSrc: 'https://via.placeholder.com/600x400',
        thumbnailImageSrc: 'https://via.placeholder.com/100x100'
      },
      {
        itemImageSrc: 'https://via.placeholder.com/600x400/ff5733',
        thumbnailImageSrc: 'https://via.placeholder.com/100x100/ff5733'
      },
      {
        itemImageSrc: 'https://via.placeholder.com/600x400/33c4ff',
        thumbnailImageSrc: 'https://via.placeholder.com/100x100/33c4ff'
      },
      {
        itemImageSrc: 'https://via.placeholder.com/600x400/ffb833',
        thumbnailImageSrc: 'https://via.placeholder.com/100x100/ffb833'
      },
      {
        itemImageSrc: 'https://via.placeholder.com/600x400/8cff33',
        thumbnailImageSrc: 'https://via.placeholder.com/100x100/8cff33'
      }
    ];

    // Opciones para el comportamiento responsivo
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  // Función para ir al siguiente elemento
  next() {
    if (this.activeIndex < this.images.length - 1) {
      this.activeIndex++;
    }
  }

  // Función para ir al anterior elemento
  prev() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }
}
