import { Component } from '@angular/core';
import { ClienteCadastroService } from '../cliente-cadastro.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-clientecadastro',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './cliente-cadastro.component.html',
  styleUrl: './cliente-cadastro.component.scss',
  providers: [ClienteCadastroService, HttpClient],
})

export class ClienteCadastroComponent {
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    const clienteCadastroService = new ClienteCadastroService(this.http);
    clienteCadastroService.getAllCadastros().subscribe((cadastros) => {
      console.log(cadastros);
    })
  }

}
