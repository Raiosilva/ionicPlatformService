import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResultHttp } from 'src/interfaces/IResultHttp';
import { AlertService } from './alert.service';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private alertCrv: AlertService,
    private spinnerCrv: SpinnerService
  ) { }

  private createHeader(header?: HttpHeaders): HttpHeaders {
    if (!header) {
      header = new HttpHeaders();
    }

    header = header.append('Content-Type', 'application/json');
    header = header.append('Accept', 'application/json');

    let token = localStorage.getItem('platform:token');
    if (token) {
      header = header.append('x-token-access', token);
    }

    return header;
  }

  public get(url: string): Promise<IResultHttp> {
    const header = this.createHeader();
    return new Promise(async (resolve) => {
      try {
        this.spinnerCrv.Show();
        const res = await this.http.get(url, { headers: header }).toPromise();
        resolve({ success: true, data: res, error: undefined });
        this.spinnerCrv.Hide();
      } catch (error) {
        this.spinnerCrv.Hide();
        resolve({ success: false, data: {}, error });
      }
    });
  }

  public post(url: string, model: any): Promise<IResultHttp> {
    const header = this.createHeader();
    return new Promise(async (resolve) => {
      try {
        this.spinnerCrv.Show();
        const res = await this.http.post(url, model, { headers: header }).toPromise();
        resolve({ success: true, data: res, error: undefined });
        this.spinnerCrv.Hide();
      } catch (error) {
        this.spinnerCrv.Hide();
        if (error.status === 400) {
          let errosText = '<url>';
          if (Array.isArray(error.error)) {
            error.error.forEach(element => {
              errosText += `<li style="text-align: left">${ element.message ||element }</li>`;
            });
            errosText += '</ul>';
            this.alertCrv.alert('Atenção', errosText);
          };
        }
        resolve({ success: false, data: {}, error });
      }
    });
  }

  public delete(url: string): Promise<IResultHttp> {
    const header = this.createHeader();
    return new Promise(async (resolve) => {
      try {
        this.spinnerCrv.Show();
        const res = await this.http.delete(url, { headers: header }).toPromise();
        resolve({ success: true, data: res, error: undefined });
        this.spinnerCrv.Hide();
      } catch (error) {
        this.spinnerCrv.Hide();
        resolve({ success: false, data: {}, error });
      }
    });
  }
}
