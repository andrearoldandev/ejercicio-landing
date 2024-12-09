import { Component } from '@angular/core';

@Component({
  selector: 'app-about', // El nombre que usas en HTML
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input() user: { name: string; email: string };
  // Aquí va la lógica de tu componente
}
