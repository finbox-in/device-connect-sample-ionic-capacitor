import { Component } from '@angular/core';
import { IonicRiskSdk } from 'ionic-risk-sdk';

const API_KEY = 'I9G9Js79et7ykyLCnFp279XxsJH85Jpu3d5E2Log';
const CUSTOMER_ID = 'demo_lender_213653';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  /**
   * createUser
   */
  async createUser() {
    console.log('Api Key', API_KEY);
    const token = await IonicRiskSdk.createUser({ apiKey: API_KEY, customerId: CUSTOMER_ID });
    console.log('Access Token', token.token);
    IonicRiskSdk.startPeriodicSync();
  }

}
