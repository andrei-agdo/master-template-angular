import { Observable } from 'rxjs';
import { Http } from '../../core/services/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  protected endpoint: string;

  constructor(protected http: Http) {
  }

  get(): Observable<any[]> {
    return this.http.get(this.endpoint);
  }

  getById(document: any) {
    return this.http.get(this.endpoint + document._id);
  }

  getByFilter(filter: any): Observable<any[]> {
    return this.http.post(this.endpoint + 'find', filter);
  }

  getOneByFilter(filter: any): Observable<any[]> {
    return this.http.post(this.endpoint + 'find-one', filter);
  }

  post(document: any) {
    return this.http.post(this.endpoint, document);
  }

  put(obj: any) {
    return this.http.put(this.endpoint + obj._id, obj);
  }
}
