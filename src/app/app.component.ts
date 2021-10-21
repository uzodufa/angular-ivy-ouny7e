import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizationService } from './organization.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  org$: Observable<any>;

  constructor(private orgService: OrganizationService) {}
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    this.org$ = this.orgService.currentOrg$;
  }
}
