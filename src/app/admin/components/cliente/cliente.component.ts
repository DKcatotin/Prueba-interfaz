import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {
  images: string[] = [
    'https://th.bing.com/th/id/OIP.yXoVN-GSIqX3mpr3JjPNBgHaE7?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.rISH08AyO2se4QifjwnRHQHaEK?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.t6vVPxD-ClITWvNioHktbAHaE_?rs=1&pid=ImgDetMain'
  ];
  cards = [
    {
      header: 'Card 1',
      subheader: 'imagen de quito',
      image: 'https://lp-cms-production.imgix.net/2019-06/77186995.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
      description: 'Mira qué hermoso paisaje '
    },
    {
        header: 'Card 2',
        subheader: 'Iglesia de Quito',
        image: 'https://th.bing.com/th/id/OIP.tDoXiqCw5JPu1u8KnF3avgHaFj?w=236&h=180&c=7&r=0&o=5&pid=1.7',
        description: 'La Iglesia de San Francisco es una basílica católica que se levanta en medio del centro histórico de Quito, frente a la plaza del mismo nombre'
      },
      {
        header: 'Card 3',
        subheader: 'titulo del card ',
        image: 'https://th.bing.com/th/id/R.e9a906e6be5c5507e1f39c306ecf570c?rik=a%2bOycQUekn2AHw&pid=ImgRaw&r=0',
        description: 'La Basílica del Voto Nacional es un edificio religioso de estilo neogótico en el centro histórico de Quito, Ecuador. Es la obra neogótica más importante del país'
      }

  ]
}
