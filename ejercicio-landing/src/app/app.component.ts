import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Añadir FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrowserModule, Component, Input, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio-landing';
}
