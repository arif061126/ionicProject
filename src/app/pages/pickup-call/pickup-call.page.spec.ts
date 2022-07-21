import {ComponentFixture, fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickupCallPage } from './pickup-call.page';
import {Router} from "@angular/router";
import {AppRoutingModule} from "../../app-routing.module";

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupCallPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupCallPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home page', fakeAsync(()=>{
    spyOn(router,'navigate');

    //component.ngOnInit();
    component.goToHome();

    //tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['home']);

    //expect(false).toBeFalsy(); //always true
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
