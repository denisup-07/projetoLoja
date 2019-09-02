import { Component, OnInit } from '@angular/core';
import {moveIn, fallIn} from '../router.animation';
import { FormGroup, FormControl, FormBuilder, Validators,  } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import {Router } from '@angular/router';
import { Usuario} from "../usuario";

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css'],
  animations: [moveIn(),fallIn()],
  host: {'[@moveIn]':''}
})
export class CadastroFormComponent implements OnInit {

private usuario: Usuario= new Usuario();
    
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService,
    private router: Router) {
  }

  ngOnInit() {
  }

  salvar(){
    this.usuarioService.criar(this.usuario).subscribe(
      () => alert('Cadastro realizado com sucesso.'),
      err => {
        alert('Ocorreu algum erro no seu cadastro.');
      }
    )
  }
}
