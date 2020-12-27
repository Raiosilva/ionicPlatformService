import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovaSolicitacaoPerguntasPage } from './nova-solicitacao-perguntas.page';

describe('NovaSolicitacaoPerguntasPage', () => {
  let component: NovaSolicitacaoPerguntasPage;
  let fixture: ComponentFixture<NovaSolicitacaoPerguntasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaSolicitacaoPerguntasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaSolicitacaoPerguntasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
