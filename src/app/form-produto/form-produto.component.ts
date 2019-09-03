import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProdutosService } from '../produtos.service';
import { Router } from '@angular/router';
import { Produto } from '../produto';
import { moveIn, fallIn } from '../router.animation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css'],
  animations: [moveIn(),fallIn()],
  host: {'[@moveIn]':''}
})
export class FormProdutoComponent implements OnInit {

  private produto: Produto= new Produto();
  private resp: Object;
  constructor(private formBuilder: FormBuilder, private produtosService: ProdutosService,
    private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  salvar(){
    this.produtosService.criar(this.produto).subscribe(
     data => {alert('Cadastro realizado com sucesso.'),
      this.resp = data},
      err => {
       alert('Ocorreu algum erro no seu cadastro.');
      }
    );
  }
}
