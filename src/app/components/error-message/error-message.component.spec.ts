import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';
import {FormControl, FormGroup} from "@angular/forms";

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  }));

  it('should show error message when the field is touched and error present!', () => {
    //component.filed = new FormGroup({email:new FormControl()});
    component.filed = new FormGroup({anyField:new FormControl()});
    component.filed.markAsTouched();
    component.filed.setErrors({anyError:true})
    //component.filed.setErrors({required:true})
    //component.error = "required";
    component.error = "anyError";
    expect(component.shouldShow()).toBeTruthy();
  });

  it('should hide error message when the field is not touched!', () => {
    //component.filed = new FormGroup({email:new FormControl()});
    component.filed = new FormGroup({anyField:new FormControl()});
    //component.filed.markAsTouched();
    component.filed.setErrors({anyError:true})
    component.error = "anyError";
    expect(component.shouldShow()).toBeFalsy();
  });

  it('should hide error message on field touched but no error present!', () => {
    //component.filed = new FormGroup({email:new FormControl()});
    component.filed = new FormGroup({anyField:new FormControl()});
    component.filed.markAsTouched();
    //component.filed.setErrors({anyError:true})
    component.error = "anyError";
    expect(component.shouldShow()).toBeFalsy();
  });

  it('should hide error message on field touched and has error, but has different error!', () => {
    //component.filed = new FormGroup({email:new FormControl()});
    component.filed = new FormGroup({anyField:new FormControl()});
    component.filed.markAsTouched();
    //component.filed.setErrors({anyError:true})
    component.error = "anotherError";
    expect(component.shouldShow()).toBeFalsy();
  });

  /*it('should show error message when the field is touched and email error present!', () => {
    component.filed = new FormGroup({email:new FormControl()});
    component.filed.markAsTouched();
    component.filed.setErrors({email:true})
    component.error="email";
    expect(component.shouldShow()).toBeTruthy();
  });*/



});
