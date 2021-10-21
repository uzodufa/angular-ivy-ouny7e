import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OrganizationService {
  private currentOrg = new BehaviorSubject<any>(null);
  currentOrg$ = this.currentOrg.asObservable();

  constructor() {}

  setOrg(value: any) {
    this.currentOrg.next(value);
  }
}

const ORGANIZATIONS: any[] = [
  {
    orgId: '2',
    logoUrl: '/assets/mocks/ufc.png',
    orgName: 'UFC',
    primaryColor: '#D20B0B',
    appName: 'UFC Funds',
    donateBtnText: 'uFund',
    campaignTerm: 'fights',
    banner: {
      headline: 'Ultimate Fighting Championship',
      description:
        'Enjoy the latest breaking news, fights, behind-the-scenes access and more. Unlock MORE of your inner combat sports fan with UFC Fight!',
      images: ['/assets/mocks/ufc-banner-1.webp', '/assets/mocks/ufc-banner-2.jpg'],
      buttonText: 'Buy Tickets'
    }
  },
  {
    orgId: '22',
    logoUrl: '/assets/mocks/pdp.png',
    orgName: 'PDP',
    primaryColor: '#00652C',
    appName: 'PDP Fundraising',
    donateBtnText: 'donate',
    campaignTerm: 'Events',
    banner: {
      headline: '',
      description: '',
      images: ['', ''],
      buttonText: 'Support Us'
    }
  },
  {
    orgId: '52',
    logoUrl: '',
    orgName: 'UFC',
    primaryColor: '#3333',
    appName: 'UFC Funds',
    donateBtnText: 'uFund',
    campaignTerm: 'fights',
    banner: {
      headline: '',
      description: '',
      images: ['', '']
    }
  },
  {
    orgId: '72',
    logoUrl: '',
    orgName: 'UFC',
    primaryColor: '#3333',
    appName: 'UFC Funds',
    donateBtnText: 'uFund',
    campaignTerm: 'fights',
    banner: {
      headline: '',
      description: '',
      images: ['', '']
    }
  }
];