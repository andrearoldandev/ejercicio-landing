import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDarkMode: boolean = false;
  svgSrcOscuro: string = "assets/svg/moon.svg";

  isFuentePequenia: boolean = false;
  fuentePequenia:string = "var(--fuente-pequenia)";

  tituloPeli: string = "";
  generoPeli: string = "";

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.svgSrcOscuro = this.svgSrcOscuro === "assets/svg/moon.svg" ? "assets/svg/sun.svg" : "assets/svg/moon.svg";
  }

  cambiarFuente() {
    this.isFuentePequenia = !this.isFuentePequenia;
  }

}
