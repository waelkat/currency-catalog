import { Component, OnInit, Input } from '@angular/core';
import { ICurrencie } from '../currencie.model';

@Component({
  selector: 'app-currencies-item',
  templateUrl: './currencies-item.component.html',
  styleUrls: ['./currencies-item.component.css']
})
export class CurrenciesItemComponent implements OnInit {

  @Input() currencie : ICurrencie;

  constructor() { }

  ngOnInit() {
    console.log(this.currencie);
  }

}