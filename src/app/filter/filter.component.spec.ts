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
  let modalControllerSpy: jasmine.SpyObj<ModalController>;
  let filterServiceSpy: jasmine.SpyObj<FilterService>;


  beforeEach(waitForAsync(() => {
    const modalSpy = jasmine.createSpyObj('ModalController', ['create']);
    filterServiceSpy = jasmine.createSpyObj('FilterService', ['updateNombre']);
    TestBed.configureTestingModule({
      imports: [FilterComponent,CommonModule, IonicModule.forRoot(), CalendarioComponent],
      providers : [DatePipe, { provide: FilterService, useValue: filterServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('debería llamar a openCalendar al hacer clic  en boton calendario', () => {
    spyOn(component, 'openCalendar');

    // Act: Simula el clic en el ícono de calendario
    const calendarButton = fixture.debugElement.query(By.css('ion-button'));
    calendarButton.triggerEventHandler('click', null);

    // Assert: Verifica que el método openCalendar haya sido llamado
    expect(component.openCalendar).toHaveBeenCalled();
  });


});


