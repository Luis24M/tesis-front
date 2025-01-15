import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  isOptionsVisible: boolean = false;
  isDropdownVisible: boolean = false;

  userInfo = {
    codigo: 'T052701420',
    nombre: 'RICARDO MANUEL CASTILLO MUÑOZ',
    email: 't052701420@unitru.edu.pe',
    typeTesis: 'Tesis',
    role: 'Estudiante'
  };

  activeSection: string = 'inicio';

  toggleOptions() {
    this.isOptionsVisible = !this.isOptionsVisible;
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  setActiveSection(section: string) {
    this.activeSection = section;
    this.isOptionsVisible = false;
  }
}