import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  esModoOscuro: boolean = false;

  cambiarModo() {
    this.esModoOscuro = !this.esModoOscuro;
  }
}
