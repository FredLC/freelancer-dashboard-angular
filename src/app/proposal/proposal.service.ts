import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';	
import { Proposal } from './proposal';

@Injectable()
export class ProposalService {
	private proposalsUrl = 'http://localhost:3001/proposals';

	constructor (
		private http: HttpClient
	) {}

	getProposals(): Observable<Proposal[]> {
		return this.http.get<Proposal[]>(this.proposalsUrl + '.json')
      .pipe(
        catchError(this.handleError<Proposal[]>('proposals', []))
      )
	}

	getProposal(id: number): Observable<Proposal> {
		return this.http.get<Proposal>(this.proposalsUrl + '/' + id + '.json')
	}

	private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }
}