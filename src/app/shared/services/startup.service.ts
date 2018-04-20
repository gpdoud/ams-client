import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable'
import { HttpClient } from '@angular/common/http';

const settingsfile = './settings.json';

@Injectable()
export class StartupService {
  public settings: any;
  constructor(private http: HttpClient) {}

  getSettings(): Promise<any> {
    return this.http.get(settingsfile)
    .toPromise()
    .then((data: any) => this.settings = data);
  }

}