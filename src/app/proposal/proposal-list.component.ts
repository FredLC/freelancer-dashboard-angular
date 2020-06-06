import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	selector: 'proposal-list',
	templateUrl: './proposal-list.component.html'
})

export class ProposalListComponent { 
	proposalOne: Proposal = new Proposal(1, 'ABC Company', 'http://joemambre.com', 'Ruby on Rails', 150, 120, 15, 'joe@example.com')
	proposalTwo: Proposal = new Proposal(2, 'DEF Company', 'http://joemambre.com', 'NodeJS', 150, 120, 15, 'joe@example.com')
	proposalThree: Proposal = new Proposal(3, 'XYZ Company', 'http://joemambre.com', 'Django', 150, 120, 15, 'joe@example.com')

	proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]
}