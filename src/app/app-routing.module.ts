import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ProdutosComponent} from './produtos/produtos.component';
import{CadastroFormComponent} from './cadastro-form/cadastro-form.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UploadComponent } from './upload/upload.component';
import { TelaAdmComponent } from './tela-adm/tela-adm.component';
import { FormProdutoComponent } from './form-produto/form-produto.component';
import { ImagemProdutoComponent } from './imagem-produto/imagem-produto.component';


const routes: Routes = [
  { path: '', redirectTo: 'categoria', pathMatch: 'full' },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'cadastro', component: CadastroFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'telaAdm', component: TelaAdmComponent },
  { path: 'novoProduto', component: FormProdutoComponent },
  { path: 'imagemProduto', component: ImagemProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
