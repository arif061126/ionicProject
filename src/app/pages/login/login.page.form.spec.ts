import {ComponentFixture, fakeAsync, TestBed, waitForAsync} from "@angular/core/testing";
import {Router} from "@angular/router";
import {IonicModule} from "@ionic/angular";
import {AppRoutingModule} from "../../app-routing.module";
import {LoginPageForm} from "./login.page.form";
import {FormBuilder, FormGroup} from "@angular/forms";


describe('LoginPageForm', () => {
  //let component: LoginPageForm;
  //let fixture: ComponentFixture<LoginPageForm>;
  let router:Router;

  let loginForm: LoginPageForm;
  let form:FormGroup;

  /*beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageForm ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageForm);

    router= TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));*/

  beforeEach(()=>{
    loginForm = new LoginPageForm(new FormBuilder());
    form = loginForm.createForm();
  })

  it('should create form', fakeAsync(()=>{

    //spyOn(router,'navigate');
    //component.pickupCalls();
    expect(form).not.toBeNull();
    expect(form.get('email')).not.toBeNull();
    expect(form.get('email').value).toEqual('');
    expect(form.get('email').valid).toBeFalsy();

    expect(form.get('password')).not.toBeNull();
    expect(form.get('password').value).toEqual('');
    expect(form.get('password').valid).toBeFalsy();
  }));

  it('should have email invalid if email is not valid', fakeAsync(()=>{
    form.get('email').setValue('invalid email');
    expect(form.get('email').valid).toBeFalsy();
  }));

  it('should have email valid if email is valid', fakeAsync(()=>{
    form.get('email').setValue('valid@email.com');
    expect(form.get('email').valid).toBeTruthy();
  }));

  it('should have valid form', fakeAsync(()=>{
    form.get('email').setValue('valid@email.com');
    form.get('password').setValue('anyPassword');
    expect(form.valid).toBeTruthy();
  }));

})
