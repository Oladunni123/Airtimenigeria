import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items = [
    {id:1, name: 'MTN Airtime', regular: '2% Discount', agent:'2.5% Dscount', dealer:'3% Discount'},
    {id:1, name: 'Airtel Airtime', regular: '2% Discount', agent:'2.5% Dscount', dealer:'3% Discount'},
    {id:1, name: 'Globalcom Airtime', regular: '2% Discount', agent:'2.5% Dscount', dealer:'3% Discount'},
    {id:1, name: '9Mobile Airtime', regular: '2% Discount', agent:'2.5% Dscount', dealer:'3% Discount'},
    {id:1, name: 'MTN Airtime', regular: '2% Discount', agent:'2.5% Dscount', dealer:'3% Discount'}
    ]
    subscribtion = [
      {id:1, name: 'MTN 500MB|SME|30days', regular: 'N140', agent:'N130', dealer:'N120'},
      {id:1, name: 'MTN 1GB|SME|30days', regular: 'N250', agent:'N235', dealer:'N225'},
      {id:1, name: 'MTN 2GB|SME|30days', regular: 'N500', agent:'N470', dealer:'N450'},
      {id:1, name: 'MTN 3GB|SME|30days', regular: 'N750', agent:'705', dealer:'N675'},
      {id:1, name: 'MTN 5GB|SME|30days', regular: 'N1,250', agent:'N1,175', dealer:'N1,125'}
    ]
}
