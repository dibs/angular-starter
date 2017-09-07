import { Injectable } from '@angular/core';

import { Http, Headers, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Site } from './site';
import { SITES } from './mock-sites';

@Injectable()
export class SitesService {

    private baseUrl = 'http://fabric/rest';

    constructor (private http: Http) {}

    // getSites(): Promise<Site[]> {
    //     return Promise.resolve(SITES);
    // }
    // getSites (): Observable<Site[]> {
    //     return this.http.get(this.sitesUrl)
    //                 .map(res => res.json())
    //                 .catch(this.handleError);
    // }

    getSites(): Observable<Site[]>{
        let sites$ = this.http
            .get(`${this.baseUrl}/sites`, {headers: this.getHeaders()})
            .map((res:Response) => res.json());
        return sites$;
    }

    private getHeaders(){
        let headers = new Headers();
        let username : string = 'denford';
        let password : string = 'Watching Warning';
        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        headers.append('Accept', 'application/json');
        return headers;
    }

    
}
