import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialsPage } from "./materials/pages/materials-page/materials-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialsPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
