import { Component, Injector} from '@angular/core';
import {moveIn, fallIn} from './router.animation';
import { CategoriaService } from './categoria.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import { SomeComponent } from './some/some.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal/form-modal.component';
import { ProdutosService } from '../app/produtos.service';
import { ProdutosComponent } from '../app/produtos/produtos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [moveIn(),fallIn()],
  host: {'[@moveIn]':''},

})

export class AppComponent {
  produtos: Array<any>;
  categoria: Array<any>
  modalRef: BsModalRef;
  produtosComponent: ProdutosComponent;
  categoriaProduto: string;
  constructor( private produtoService: ProdutosService, private categoriaService: CategoriaService,private modalService: NgbModal){
  }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.categoriaService.listar().subscribe(dados => {
      console.log(dados)
      this.categoria = dados
    });

    console.log(this.categoria);
  }

  images = [1, 2, 3].map(() => `../assets/images/${Math.random()}`);


  open() {
  
    this.modalService.open(FormModalComponent, { size: 'sm' });

  }
}
