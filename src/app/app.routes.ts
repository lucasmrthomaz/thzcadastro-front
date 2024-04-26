import { Routes } from '@angular/router';

export const routes: Routes = [
    /* This is the default route. A homepage will be displayed. 
       PT-BR: Esta é a rota padrão. Uma página inicial será exibida.*/
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },

    /*The path 'cadastro' will load the CadastroComponent
    PT-BR: A rota 'cadastro' carregará o CadastroComponent*/
    {
        path: 'cliente-cadastro',
        loadComponent: () => import('./cliente-cadastro/cliente-cadastro.component').then(m => m.ClienteCadastroComponent),
    },
    /* Rota de equipamentos de clientes da assistencia tecnica */
    {
        path: 'cliente-equipamento',
        loadComponent: () => import('./cliente-equipamento/cliente-equipamento.component').then(m => m.ClienteEquipamentoComponent),
    },

    /*The path 'configuracao' will load the ConfiguracaoComponent
    PT-BR: A rota 'configuracao' carregará o ConfiguracaoComponent
    */
    //{
        //path: 'configuracao',
        //loadComponent: () => import('./configuracao/configuracao.component').then(m => m.ConfiguracaoComponent),
    //   },
    /*The path 'ajuda' will load the AjudaComponent
    PT-BR : A rota 'ajuda' carregará o AjudaComponent */
    //  {
        //path: 'ajuda',
        //loadComponent: () => import('./ajuda/ajuda.component').then(m => m.AjudaComponent),
    //   } 
];
