import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemProdutoComponent } from './imagem-produto.component';

describe('ImagemProdutoComponent', () => {
  let component: ImagemProdutoComponent;
  let fixture: ComponentFixture<ImagemProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagemProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
