import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProdutosService } from '../produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css']
})
export class FormProdutoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private produtosService: ProdutosService,
    private router: Router) { }

  ngOnInit() {
  }

}
