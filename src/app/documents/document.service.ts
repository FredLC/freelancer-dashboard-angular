import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';	
import { Document } from './document';

@Injectable()
export class DocumentService {
	private documentsUrl = 'http://localhost:3000/freelance_documents.json';

	constructor (
		private http: HttpClient
	) {}

	getDocuments(): Observable<Document[]> {
		return this.http.get<Document[]>(this.documentsUrl)
      .pipe(
        catchError(this.handleError<Document[]>('documents', []))
      )
	}

	private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }
}