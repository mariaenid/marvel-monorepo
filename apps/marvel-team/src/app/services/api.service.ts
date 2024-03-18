import { DOCUMENT } from '@angular/common';
import { HttpBackend, HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ApiService  {
  readonly httpBackendClient: HttpClient;
  defaultHeaders = { headers: { 'Content-type': 'application/json' } };


  constructor(
    httpBackend: HttpBackend,
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient,
  ) {
    this.httpBackendClient = new HttpClient(httpBackend);
  }

  getServicePath(): string {
    return `http://developer.marvel.com`
  }


  getBaseUrl(): string {
    return this.getServicePath();
  }

  getUrl(path: string): string {
    return `${this.getServicePath()}/${path}`
  }

  get<T = any>(path: string, options?: object, bypassInterceptors?: boolean): Observable<T> {
    const url = this.getUrl(path);
    const http: HttpClient = bypassInterceptors ? this.httpBackendClient : this.http;
    return options ? http.get<T>(url, options) : this.http.get<T>(url);
  }

  post<T = any>(
    path: string,
    payload?: any,
    params?: HttpParams,
    bypassInterceptors?: boolean,
    context?: HttpContext,
    headers?: HttpHeaders
  ): Observable<T> {
    const http: HttpClient = bypassInterceptors ? this.httpBackendClient : this.http;
    return http.post<T>(this.getUrl(path), payload ?? null, {
      params,
      headers: headers ?? this.defaultHeaders.headers,
      context,
    });
  }

}
