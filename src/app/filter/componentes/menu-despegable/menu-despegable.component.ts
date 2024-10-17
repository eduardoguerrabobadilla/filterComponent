import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DayConfig, DefaultDate, IonRangeCalendarComponent, IonRangeCalendarModule, PickMode } from '@googlproxer/ion-range-calendar';
import { IonicModule, ModalController } from '@ionic/angular';
import { menuOutline } from 'ionicons/icons';

import { FilterService } from '../../servicios/filter.service';
import { addIcons } from 'ionicons';

@Component({
  selector: 'menu-despegable',
  templateUrl: 'menu-despegable.component.html',
  styleUrls: ['menu-despegable.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class MenuDespegableComponent implements OnInit {

  private filterService = inject(FilterService);

  public categorias =  [
    { id: 1, gender: 'Male'},
    { id: 2, gender: 'Male'},
    { id: 3, gender: 'Female' },

  ]

  constructor() {}

  ngOnInit() {
    addIcons({ menuOutline });
  }

  categoriaSeleccionada(categoria:string){
    this.filterService.updateCategoria(categoria);

  }



  }

