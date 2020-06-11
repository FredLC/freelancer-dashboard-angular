import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';	
import { Proposal } from './proposal';

@Injectable()
export class ProposalService {
	private proposalsUrl = 'http://localhost:3001/proposals.json';

	constructor (
		private http: HttpClient
	) {}

	getProposals(): Observable<Proposal[]> {
		return this.http.get<Proposal[]>(this.proposalsUrl)
      .pipe(
        catchError(this.handleError<Proposal[]>('proposals', []))
      )
	}

	private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }
}