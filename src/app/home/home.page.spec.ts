import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { CommonModule, DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {

    TestBed.configureTestingModule({
      imports: [HomePage,CommonModule, IonicModule.forRoot()],
      providers: [DatePipe]
    }).compileComponents();
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería contener 12 datos iniciales en un arreglo de datos en rows proporcionado por el servicio', () => {
    // Act: obtener los datos de rows
    const rowsData = component.rows();

    // Assert: verificar que rows contenga los datos simulados
    expect(rowsData.length).toBe(12);
    expect(rowsData[0].nombre).toBe('Coca cola');
    expect(rowsData[1].nombre).toBe('Pepsi cola');
  });


});
