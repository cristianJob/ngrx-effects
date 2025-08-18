import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private route: Router) {}

  isUsuario(id: string) {
    if (!id) {
      return;
    }

    this.route.navigate(['/usuarios', id]);
  }
}
