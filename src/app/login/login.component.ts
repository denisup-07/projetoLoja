import { Component, OnInit } from '@angular/core';
import {moveIn, fallIn} from '../router.animation';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService } from '../core/auth.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn(),fallIn()],
  host: {'[@moveIn]':''}, 
 
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService, private router: Router){
  }

  ngOnInit(): void{
    
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
