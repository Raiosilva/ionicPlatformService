import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovaSolicitacaoSubCategoriaPage } from './nova-solicitacao-sub-categoria.page';

describe('NovaSolicitacaoSubCategoriaPage', () => {
  let component: NovaSolicitacaoSubCategoriaPage;
  let fixture: ComponentFixture<NovaSolicitacaoSubCategoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaSolicitacaoSubCategoriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaSolicitacaoSubCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
