import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
	selector: 'proposal-list',
	templateUrl: './proposal-list.component.html',
	styleUrls: ['./proposal-list.component.css'],
	providers: [ProposalService]
})

export class ProposalListComponent implements OnInit { 
	proposals: Proposal[];
	errorMessage: string;
	mode = "Observable";

	constructor(
		private proposalService: ProposalService
	) {}

	ngOnInit() {
		let proposalsTimer = timer(0, 5000);
		proposalsTimer.subscribe(() => this.getProposals());
	}

	getProposals() {
		this.proposalService.getProposals()
		.subscribe(
			proposals => this.proposals = proposals,
			error => this.errorMessage = <any>error
		);
	}
}