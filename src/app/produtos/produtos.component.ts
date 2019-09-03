import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import {moveIn, fallIn} from '../router.animation';
import { ProdutosService } from '../produtos.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { Produto } from '../produto';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  animations: [moveIn(),fallIn()],
  host: {'[@moveIn]':''}
})
export class ProdutosComponent implements OnInit {
  produtoForm: FormGroup;
  produtos: Array<any>
  constructor(private http: HttpClient, private produtoService: ProdutosService, private formBuilder: FormBuilder) { }
  
  ngOnInit(): void{
      this.produtoForm = this.formBuilder.group({
        nome: ['', Validators.required]
      });
      this.listar();
    }

    listar(){
      this.produtoService.listar().subscribe(dados => {
        console.log(dados)
        this.produtos = dados
      });
      console.log(this.produtos);
    }

    Nome(){
      const nome = this.produtoForm.get('nome').value;
      this.produtoService.listarNome(nome).subscribe(dados => {
        console.log(dados)
        this.produtos = dados
      });
    }

}
