import {ComponentFixture, fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import {Router} from "@angular/router";
import {AppRoutingModule} from "../../app-routing.module";

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router:Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    router= TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home page', fakeAsync(()=>{
    spyOn(router,'navigate');

    //component.ngOnInit();
    component.register();

    //tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['home']);

    //expect(false).toBeFalsy(); //always true
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
