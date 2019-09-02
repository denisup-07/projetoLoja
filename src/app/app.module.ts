import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{MaterialModule} from './material.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { LoginComponent } from './login/login.component';
import{ProdutosService} from './produtos.service';
import{CategoriaService} from './categoria.service';
import{DialogoComponent} from './dialogo/dialogo.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormModalComponent } from './form-modal/form-modal.component';
import { SomeComponent } from './some/some.component';
import { UploadComponent } from './upload/upload.component';
import { ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { TelaAdmComponent } from './tela-adm/tela-adm.component';
import { FormProdutoComponent } from './form-produto/form-produto.component';



@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CadastroFormComponent,
    LoginComponent,
    DialogoComponent,
    UsuariosComponent,
    SomeComponent,
    UploadComponent,
    TelaAdmComponent,
    FormModalComponent,
    FormProdutoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [ProdutosService,CategoriaService,  FormModalComponent
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    SomeComponent,
    FormModalComponent
  ]
})
export class AppModule { }
