import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './student/component/sidebar/sidebar.component';
//informacion de general del componente
@Component({ //La configuración que voy a mostar al exterior
  selector: 'app-root', //la forma en que voy a llamar el componente en otro lado
  imports: [RouterOutlet,SidebarComponent],//Los modulos que voy a importar
  templateUrl: './app.component.html', //La plantilla que voy a mostar
})
export class AppComponent { //Codigo dentro de la plantilla
  title = 'tesis-front'; //el titulo del componente
  count = 0; //el contador del componente
  increment = () => this.count++; //el metodo que voy a llamar
}
