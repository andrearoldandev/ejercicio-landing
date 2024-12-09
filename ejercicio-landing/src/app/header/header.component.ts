import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDarkMode: boolean = false;
  svgSrcOscuro: string = "assets/svg/moon.svg";
  svgSrcClaro: string = "assets/svg/sun-svg";

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.svgSrcOscuro === this.svgSrcOscuro ? this.svgSrcOscuro : this.svgSrcClaro;
  }

}
