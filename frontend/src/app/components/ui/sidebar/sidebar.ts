import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

interface MenuItem {
  label: string;
  icon?: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, MatIconModule, MatListModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  menuItems: MenuItem[] = [
    { label: 'Ciudades', icon: 'location_city', route: '/ciudades' },
    { label: 'Materiales', icon: 'inventory_2', route: '/materiales' },
    { label: 'Departamentos', icon: 'apartment', route: '/departamentos' }
  ];
}
