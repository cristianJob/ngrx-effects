// store/effects/usuarios.effects.ts
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, tap, catchError } from 'rxjs/operators';

import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from '../actions/usuarios.actions';
import { UsuarioService } from '../../services/usuario-service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {

    actions$ = inject(Actions);
    usuarioService = inject(UsuarioService)

    cargarUsuarios$ = createEffect(() =>
        this.actions$.pipe(
            ofType(cargarUsuarios),
            mergeMap(() =>
                this.usuarioService.getUser().pipe(
                    map(users => cargarUsuariosSuccess({ usuarios: users })),
                    catchError(err => of(cargarUsuariosError({ payload: err })))
                )
            )
        )
    );
}
