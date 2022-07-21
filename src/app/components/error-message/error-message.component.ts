import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {

  @Input()
  message: string;

  @Input()
  filed: FormGroup;

  @Input()
  error:string;

  constructor() { }

  ngOnInit() {}

  shouldShow() {
    //*ngIf="form.get('email').touched && form.get('email').errors ?.required
    if(this.filed.touched && this.filed.errors?.[this.error]){
      return true;
    } else {
      return false;
    }
  }
}
