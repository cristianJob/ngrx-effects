import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {
  usuario: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select(state => state.usuarios).subscribe(({users, loading, error}) => {
      this.usuario = users;
      this.loading = loading;
      this.error = error;
    } )

    this.store.dispatch(cargarUsuarios())
  }

}
