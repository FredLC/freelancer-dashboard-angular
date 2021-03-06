import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
	selector: 'proposal-show',
	templateUrl: './proposal-show.component.html',
	providers: [ProposalService]
})

export class ProposalShowComponent implements OnInit {

	constructor(
		private http: HttpClient,
		private route: ActivatedRoute,
		private proposalService: ProposalService
	) {}

	@Input()
	proposal: Proposal;


	ngOnInit(): void {
		let proposalRequest = this.route.params.pipe(
		flatMap((params: Params) => this.proposalService.getProposal(+params['id'])));
		proposalRequest.subscribe(response => this.proposal = response);
	}
}