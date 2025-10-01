import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-button',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  template: `
    <button mat-raised-button color="primary" [routerLink]="route">
      Crear Nuevo
    </button>
  `
})
export class CreateButton {
  @Input() route: string = '';
}
