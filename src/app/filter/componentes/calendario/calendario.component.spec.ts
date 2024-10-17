import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CalendarioComponent } from './calendario.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ModalController, AngularDelegate, IonicModule } from '@ionic/angular';
import { InjectionToken } from '@angular/core';

describe('CalendarioComponent', () => {
  let component: CalendarioComponent;
  let fixture: ComponentFixture<CalendarioComponent>;

  const USERCONFIG = new InjectionToken('USERCONFIG');

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CalendarioComponent,CommonModule, IonicModule.forRoot()

      ],
      providers : [DatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
