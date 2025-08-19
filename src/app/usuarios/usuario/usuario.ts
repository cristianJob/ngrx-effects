import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuario } from '../../store/actions';
import { Usuario as user } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css'
})
export class Usuario {

  usuario!: user;
  loading: boolean = false;
  error: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState> ) {}

  ngOnInit() {

    this.store.select(state => state.usuario).subscribe(({user, error, loading}) => {
      this.usuario = user;
      this.loading = loading;
      this.error = error;
    })

    this.router.params.subscribe(({id}) => {
      this.store.dispatch(cargarUsuario({id: id}))
    });
  }

}
