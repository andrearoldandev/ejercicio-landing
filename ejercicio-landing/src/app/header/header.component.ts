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

  isFuentePequenia: boolean = false;
  fuentePequenia:string = "var(--fuente-pequenia)";


  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.svgSrcOscuro = this.svgSrcOscuro === "assets/svg/moon.svg" ? "assets/svg/sun.svg" : "assets/svg/moon.svg";
  }

  cambiarFuente() {
    this.isFuentePequenia = !this.isFuentePequenia;
  }

}
