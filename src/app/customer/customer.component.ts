import { Component, OnInit } from '@angular/core';
import {Customer} from '../Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
custommers: Customer[] = [
  {customerNo: 1, name: 'Nguyen Van A', address: 'Hai Chau', city: 'Da Nang', country: 'Viet Nam', state: 'Mien Trung' },
  {customerNo: 2, name: 'Nguyen Van B', address: 'Thanh Binh', city: 'Da Nang', country: 'Viet Nam', state: 'Mien Trung' },
  {customerNo: 3, name: 'Nguyen Van C', address: 'Thuan Phuoc', city: 'Da Nang', country: 'Viet Nam', state: 'Mien Trung' },
  {customerNo: 4, name: 'Nguyen Van D', address: 'Hai Chau', city: 'Da Nang', country: 'Viet Nam', state: 'Mien Trung' },
];
  constructor() { }

  ngOnInit(): void {
  }

}
