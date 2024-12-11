import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(private http: HttpClient) { }

  public GET(url: string, headers?: { [key: string]: string }[], params?: { [key: string]: string }[]) {
    const options = this.createOptions(headers, params);
    if (options) return this.http.get(url, options);
    else return this.http.get(url);
  }

  public POST(url: string, data: any, headers?: { [key: string]: string }[], params?: { [key: string]: string }[]) {
    const options = this.createOptions(headers, params);
    if (options) return this.http.post(url, data, options);
    else return this.http.post(url, data);
  }
  public PATCH(url: string, data: any, headers?: { [key: string]: string }[], params?: { [key: string]: string }[]) {
    const options = this.createOptions(headers, params);
    if (options) return this.http.patch(url, data, options);
    else return this.http.patch(url, data);
  }

  public DELETE(url: string, id?: any, headers?: { [key: string]: string }[], params?: { [key: string]: string }[]) {
    const options = this.createOptions(headers, params);
    if (options) return this.http.delete(url, options);
    else return this.http.delete(url);
  }

  private createOptions(headers?: { [key: string]: string }[], params?: { [key: string]: string }[]) {
    let httpHeaders = new HttpHeaders();
    let httpParams = new HttpParams();

    if (headers)
      headers.forEach((key: any, value: any) => {
        httpHeaders = httpHeaders.set(key, value);
      });

    if (params)
      params.forEach((key: any, value: any) => {
        httpParams = httpParams.set(key, value);
      });

    return { headers: httpHeaders, params: httpParams };
  }
}
