import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html'
})
export class DocumentsComponent { 
	documents: Document[] = [
		{
			title: 'My Great Doc 1',
			description: 'asdf',
			file_url: 'http://google.com',
			image_url: 'http://google.com',
			updated_at: '6/6/20'
		},
		{
			title: 'My Great Doc 2',
			description: 'asdf',
			file_url: 'http://google.com',
			image_url: 'http://google.com',
			updated_at: '6/6/20'
		},
		{
			title: 'My Great Doc 3',
			description: 'asdf',
			file_url: 'http://google.com',
			image_url: 'http://google.com',
			updated_at: '6/6/20'
		}
	]
}