import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CanadaPostApiService {
  readonly url: string = 'https://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Find/v2.10/json3.ws';

  constructor(private http: HttpClient) { }

  getAddress(searchTerm: string) {
    const params = new HttpParams()
      .set('Key', 'Your-Api-Here')
      .set('SearchTerm', searchTerm)
      .set('SearchFor', 'PostalCodes')
      .set('Country', 'CAN')
      .set('LanguagePreference', 'EN')
      .set('maxSuggestions', '7')
      .set('maxResults', '7');

    const header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url, params.toString(), { headers: header });
  }
}
