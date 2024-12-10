import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  
  // Una lista de productos (puedes obtener estos datos de un servicio en el futuro)
  products = [
    {
      name: 'Película 1',
      description: 'Descripción de la película 1',
      price: 100,
    },
    {
      name: 'Película 2',
      description: 'Descripción de la película 2',
      price: 200,
    },
    {
      name: 'Película 3',
      description: 'Descripción del de la película 3',
      price: 300,
    },
  ];
}
