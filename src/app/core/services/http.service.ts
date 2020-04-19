import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { API } from 'src/environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Http {

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {  }

  /**
     * Função de requisição HTTP Get
     * 
     * @param {{}} url URL ser acessada
     * @param {{}} TypeGet Tipo do objeto a ser retornado Ex.: Usuário
     * @param {{}} cache se pode armazenar cache de requisição a ser acessada
     * 
     *  
     */

  public get<T>(url: string, options?): Observable<any> {
    
      const _url: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(API() + url);
      const _securityUrl: string = this.sanitizer.sanitize(5, _url);
      return this.http.get<T>(_securityUrl, options).pipe(take(1));
 
  }

  public getExternal<T>(url: string): Observable<T> {
    const _safeResourceUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    const _safeUrl: string = this.sanitizer.sanitize(5, _safeResourceUrl);
    return this.http.get<T>(_safeUrl);
  }



  public getText<T>(url: string, options?): Observable<any> {
    const _safeResourceUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(API() + url);
    const _safeUrl: string = this.sanitizer.sanitize(5, _safeResourceUrl);
    let obj: any = {};
    if (options) {
      obj = options;
      obj.responseType = 'text' as 'json';
    }
    else
      obj = { responseType: 'text' as 'json' };

    return this.http.get<T>(_safeUrl, obj);
  }

  public getBlob<T>(url: string, options?): Observable<any> {
    const _safeResourceUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(API() + url);
    const _safeUrl: string = this.sanitizer.sanitize(5, _safeResourceUrl);

    let obj: any = {};
    if (options) {
      obj = options;
      obj.responseType = 'text' as 'blob';
    }
    else
      obj = { responseType: 'text' as 'blob' };

    return this.http.get<T>(_safeUrl, obj);
  }


  /**
     * Função de requisição HTTP post
     * 
     * @param {{}} url URL ser acessada
     * @param {{}} data Objeto a ser enviado
     * @param {{}} SendType Tipo do objeto a ser enviado Ex.: AuthLogin
     * @param {{}} ReturnType Tipo do objeto a ser retornado Ex.: AuthReturn
     *  
     */
  public post<SendType, ReturnType>(url: string, data: SendType, returnText?: boolean): Observable<ReturnType> {
    let _responseType = returnText ? 'text' as 'json' : 'json';

    const _safeResourceUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(API() + url);
    const _safeUrl: string = this.sanitizer.sanitize(4, _safeResourceUrl);
    return this.http.post<ReturnType>(_safeUrl, data, { responseType: _responseType });
  }
  /**
     * Função de requisição HTTP Put
     * 
     * @param {{}} url URL ser acessada
     * @param {{}} SendType Tipo do objeto a ser enviado Ex.: Usuário
     *  
     */
  public put<SendType, ReturnType>(url: string, data: SendType, options?): Observable<any> {
    const _safeResourceUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(API() + url);
    const _safeUrl: string = this.sanitizer.sanitize(4, _safeResourceUrl);
    return this.http.put<ReturnType>(_safeUrl, data, options);
  }
  /**
     * Função de requisição HTTP Delete
     * 
     * @param {{}} url URL ser acessada
     *  
     */
  public delete(url: string): Observable<boolean> {
    const _safeResourceUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(API() + url);
    const _safeUrl: string = this.sanitizer.sanitize(4, _safeResourceUrl);
    return this.http.delete<boolean>(_safeUrl);
  }


  /**
    * Função de requisição HTTP dinâmica
    * 
    * @param {string} method Qual metodo :  'Get' | 'Post' | 'Put' | 'Delete'.
    * @param {string} route rota ser acessada.
    * @param {{}} data Objeto a ser enviado caso precise.
    *  
    */


  public execute<TType>(method: 'Get' | 'Post' | 'Put' | 'Delete', route: string, data?: any): Observable<TType | boolean> {

    switch (method) {
      case "Get": return this.get<TType>('/' + route);
      case "Post": return this.post('/' + route, data);
      case "Put": return this.put('/' + route, data);
      case "Delete": return this.delete('/' + route);
    }
  }
}
