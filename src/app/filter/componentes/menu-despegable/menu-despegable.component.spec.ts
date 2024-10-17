import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuDespegableComponent } from './menu-despegable.component';
import { DatePipe } from '@angular/common';

describe('MenuDespegableComponent', () => {
  let component: MenuDespegableComponent;
  let fixture: ComponentFixture<MenuDespegableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MenuDespegableComponent],
      providers : [DatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuDespegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
