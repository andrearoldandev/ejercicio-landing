import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  user: string[] = ['name', 'email'];
  isDarkMode: boolean = false;
  svgSrcOscuro: string = 'assets/svg/moon.svg';


  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.svgSrcOscuro = this.svgSrcOscuro === "assets/svg/moon.svg" ? "assets/svg/sun.svg" : "assets/svg/moon.svg";}
}
