// Generate Angular service here
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteCadastroService {

  constructor(private http: HttpClient) {  }

  /**
   * Retrieves all cadastros from the server.
   *
   * @return {Observable<any>} An observable containing the response from the server.
   */
  getAllCadastros() {
    return this.http.get('http://localhost:3000/cadastros');
  }

  /**
   * Retrieves a specific cadastro by its ID.
   *
   * @param {string} id - The ID of the cadastro to retrieve.
   * @return {Observable<any>} An observable that emits the retrieved cadastro.
   */
  getCadastro(id:any) {
    return this.http.get('http://localhost:3000/cadastros/' + id);
  }

  /**
   * Adds a new cadastro to the server.
   *
   * @param {any} cadastro - The cadastro object to be added.
   * @return {Observable<any>} An observable that emits the response from the server.
   */
 // addCadastro(cadastro) {
 //   return this.http.post('http://localhost:3000/cadastros/', cadastro);
 // }

  /**
   * Updates a cadastro by its ID.
   *
   * @param {string} id - The ID of the cadastro to update.
   * @param {any} cadastro - The updated cadastro object.
   * @return {Observable<any>} An observable that emits the response from the server.
   */
  //updateCadastro(id, cadastro) {
  //  return this.http.put('http://localhost:3000/cadastros/' + id, cadastro);
 // }

  /**
   * Deletes a cadastro by its ID.
   *
   * @param {string} id - The ID of the cadastro to delete.
   * @return {Observable<any>} An observable that emits the response from the server.
   */
  //deleteCadastro(id) {
  //  return this.http.delete('http://localhost:3000/cadastros/' + id);
  //}

} 