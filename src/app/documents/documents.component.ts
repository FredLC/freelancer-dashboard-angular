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
			image_url: 'https://images.unsplash.com/photo-1517028267-bcc3eba7474c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
			updated_at: '6/6/20'
		},
		{
			title: 'My Great Doc 2',
			description: 'asdf',
			file_url: 'http://google.com',
			image_url: 'https://images.unsplash.com/photo-1517028267-bcc3eba7474c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
			updated_at: '6/6/20'
		},
		{
			title: 'My Great Doc 3',
			description: 'asdf',
			file_url: 'http://google.com',
			image_url: 'https://images.unsplash.com/photo-1517028267-bcc3eba7474c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
			updated_at: '6/6/20'
		}
	]
}