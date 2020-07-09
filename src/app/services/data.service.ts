import { Injectable } from '@angular/core';
import { Claim } from '../models/claim.model';
import { Quote } from '../models/quote.model';
import { ClaimsData } from '../mocks/claims';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  claim: Claim;
  claims: Claim[] = ClaimsData;
  quote: Quote;
  quotes: Quote[];

  constructor(private http: HttpClient) { }

  // Claims Logic
  getClaims(): Observable<Claim[]> {
    return of(this.claims);
  }

  getClaim(id): Observable<Claim> {
    return of(this.claims.find(claim => claim._id === id));
  }

  submitClaim(claim) {

  }

  // Quotes Logic
  getQuotes(): Observable<Quote[]> {
    return of(this.quotes);
  }

  getQuote(id): Observable<Claim> {
    return;
  }

  
}
