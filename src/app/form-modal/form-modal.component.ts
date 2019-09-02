import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css'],
  template:`

  <div class='container '>
  <div class="modal-header" >
    <h4 class="modal-title">Login</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body" >
   
  <form class="form-inline" [formGroup]="loginForm" (submit)="login()" >

  <div class="form-group mb-2">
    
    <input type="text" class='form-control' placeholder='Email'  formControlName="email"  autofocus>
  </div>
  

  <div class="form-group  mb-2" style='margin-top:15px'>
    
    <input type="password" class="form-control" id="inputPassword2" placeholder="Senha"  formControlName="senha" >
  </div> 

<button type="submit" class="btn btn-primary " style="background-color:green;margin-right:5px;" [disabled]="loginForm.invalid" >Entrar</button>
<button type="submit" class="btn bg-dark" style='color:white;margin-right:50px;' routerLink="../cadastro" (click)="activeModal.close('Close click')">Cadastrar</button>
</form>

  </div>
  <div class="modal-footer " >
  
  </div>
  
  </div>
`,

})
export class FormModalComponent implements OnInit {
  @Input() name;
  loginForm: FormGroup;


  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder,
    private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  
  login(){
    const email = this.loginForm.get('email').value;
    const senha = this.loginForm.get('senha').value;
    this.authService.authenticate(email, senha)
    .subscribe(
      () => this.router.navigateByUrl('telaAdm'),
      err => {
        this.loginForm.reset();
        alert('Email ou senha inválido');
      }
    );
  }

}
