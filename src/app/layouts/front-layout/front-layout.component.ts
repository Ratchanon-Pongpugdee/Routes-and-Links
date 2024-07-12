import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../footer/footer.component";


@Component({
  selector: 'app-front-layout',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.css'
})
export class FrontLayoutComponent {

}
