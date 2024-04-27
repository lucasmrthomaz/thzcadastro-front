import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteOrdemServicoComponent } from './cliente-ordemservico.component';

describe('ClienteOrdemservicoComponent', () => {
  let component: ClienteOrdemServicoComponent;
  let fixture: ComponentFixture<ClienteOrdemServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteOrdemServicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
