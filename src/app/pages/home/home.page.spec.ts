import {ComponentFixture, fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import {Router} from "@angular/router";
import {AppRoutingModule} from "../../app-routing.module";

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router:Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);

    router= TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to pickup-call page', fakeAsync(()=>{
    spyOn(router,'navigate');

    //component.ngOnInit();
    component.pickupCall();

    //tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);

    //expect(false).toBeFalsy(); //always true
  }));

  it('should go to pickup-calls page', fakeAsync(()=>{
    spyOn(router,'navigate');

    //component.ngOnInit();
    component.pickupCalls();

    //tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);

    //expect(false).toBeFalsy(); //always true
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
