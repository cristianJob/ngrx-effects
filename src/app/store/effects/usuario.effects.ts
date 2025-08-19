// store/effects/usuarios.effects.ts
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from '../actions';
import { UsuarioService } from '../../services/usuario-service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {

    actions$ = inject(Actions);
    usuarioService = inject(UsuarioService)

    cargarUsuario$ = createEffect(() =>
        this.actions$.pipe(
            ofType(cargarUsuario),
            mergeMap((action) =>
                this.usuarioService.getUserById(action.id).pipe(
                    map(user => cargarUsuarioSuccess({ usuario: user })),
                    catchError(err => of(cargarUsuarioError({ payload: err })))
                )
            )
        )
    );
}
