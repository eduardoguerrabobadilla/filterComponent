import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TooltipsComponent } from './tooltips.component';

import { IonBadge } from '@ionic/angular/standalone';
import { CommonModule, DatePipe } from '@angular/common';


describe('TooltipsComponent', () => {
  let component: TooltipsComponent;
  let fixture: ComponentFixture<TooltipsComponent>;


  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [TooltipsComponent, IonBadge, CommonModule],
      providers: [
        DatePipe,
      ]
    }).compileComponents();

     fixture = TestBed.createComponent(TooltipsComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
