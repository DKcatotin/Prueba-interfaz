import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {
  images: string[] = [
    'data:image/jpeg;base64,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',
    'https://i.pinimg.com/736x/5b/96/fc/5b96fc52b7335609fc12940bc20596c6.jpg',
    'https://i.pinimg.com/736x/c8/ef/49/c8ef49b7b2e5314d1132c06c295b4b0d.jpg'
  ];
  cards = [
    {
      header: 'Card 1',
      subheader: '1',
      image: 'https://lp-cms-production.imgix.net/2019-06/77186995.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
      description: 'Mira qué hermoso paisaje 1'
    },
    {
        header: 'Card 2',
        subheader: 'quito guapo',
        image: 'https://lp-cms-production.imgix.net/2019-06/77186995.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
        description: 'Mira qué hermoso paisaje 2'
      },
      {
        header: 'Card 3',
        subheader: 'titulo del card ',
        image: 'https://lp-cms-production.imgix.net/2019-06/77186995.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
        description: 'Mira qué hermoso paisaje 3'
      }

  ]
}
