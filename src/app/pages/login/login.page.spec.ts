import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import {Router} from "@angular/router";
import {AppRoutingModule} from "../../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router:Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);

    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home page', fakeAsync(()=>{
    spyOn(router,'navigate');

    //component.ngOnInit();
    component.login();

    //tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['home']);

    //expect(false).toBeFalsy(); //always true
  }));

  it('should go to register page', fakeAsync(()=>{
    spyOn(router,'navigate');

    //component.ngOnInit();
    component.register();

    //tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['register']);

    //expect(false).toBeFalsy(); //always true
  }));

  it('should create form oninit', () => {
    component.ngOnInit();
    //expect(component).toBeTruthy();
    expect(component.form).not.toBeUndefined();
  });
});
