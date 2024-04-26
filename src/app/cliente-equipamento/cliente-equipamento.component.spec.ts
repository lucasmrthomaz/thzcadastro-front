import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEquipamentoComponent } from './cliente-equipamento.component';

describe('ClienteEquipamentoComponent', () => {
  let component: ClienteEquipamentoComponent;
  let fixture: ComponentFixture<ClienteEquipamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteEquipamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
