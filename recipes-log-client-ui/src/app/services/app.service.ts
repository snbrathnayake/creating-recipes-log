import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { AppDefinition } from '../../resources/application/AppDefinition';
import { RecipeModel } from './../models/recipe-model';

@Injectable()
export class AppService {

  private readonly localUrlApplication = 'resources/application/application.json';
  private readonly localUrlVersion = 'resources/version.txt';
  private _def: AppDefinition;

  constructor(public readonly http: HttpClient) { }

  /**
   * GET SERVICE
   * @param url 
   */
  getService<T>(url: string): Observable<any> {
    return this.http.get<any>(url)
      .map((e: HttpResponse<any>) => e)
  }
  /**
   * POST service
   * @param url 
   * @param body 
   */
  postService<T>(url: string, body: RecipeModel): Observable<any> {
    return this.http.post(url, body)
      .map((e: HttpResponse<any>) => e)
  }

  // define the backend base-api url with application
  init(): Observable<void> {
    const { http } = this;
    const result = new Subject<void>();

    http.get<AppDefinition>(this.localUrlApplication)
      .subscribe((def: AppDefinition) => {
        this._def = def;
        result.next();
      });

    return result;
  }

  private get def(): AppDefinition {
    return this._def ? this._def : {} as AppDefinition;
  }

  gitVersion(): Observable<string> {
    return this.http.get(this.localUrlVersion, { responseType: 'text' });
  }

  get apiURL(): string {
    const { def } = this;

    return def.api && def.api.url ? def.api.url : '';
  }

  urlWithApiVersion(context: string, suffix?: string): string {
    const { def } = this;
    let result = `${this.def.api.url}/${context}`;

    if (suffix !== undefined) {
      result += 'TODO';
    }
    if (def.useVersioning) {
      result += `/${suffix}`;
    }

    console.log('URL :' + result)
    return result;
  }

}
