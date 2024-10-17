import { ModalController, IonicModule } from '@ionic/angular';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { CommonModule, DatePipe } from '@angular/common';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import { By } from '@angular/platform-browser';
import { FilterService } from './servicios/filter.service';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let filterServiceSpy: jasmine.SpyObj<FilterService>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FilterComponent,CommonModule, IonicModule.forRoot(), CalendarioComponent],
      providers : [DatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});


