import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {

  @Input() hasHeader:boolean;
  //@Input() hasFooter:boolean;

  @Input() createdAt: string;
  @Input() note: string;
  @Input() status: string;
  @Input() updatedAt: string;
  @Input() iconName: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {}

}
