import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Añadir FormsModule
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from "./product/product.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from "./contact/contact.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsModule, ProductComponent, AboutComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio-landing';
}
