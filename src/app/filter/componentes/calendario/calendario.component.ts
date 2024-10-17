
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DayConfig, DefaultDate, IonRangeCalendarComponent, IonRangeCalendarModule, PickMode } from '@googlproxer/ion-range-calendar';
import { IonicModule, ModalController } from '@ionic/angular';


import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonButton,
  IonInput,
} from '@ionic/angular/standalone';
import { ColumnMode, DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterService } from './../../servicios/filter.service';
import { RangoFechas } from '../../interfaces/interface';



@Component({
  selector: 'app-calendar',
  templateUrl: 'calendario.component.html',
  styleUrls: ['calendario.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonInput,
    NgxDatatableModule,
    IonRangeCalendarModule,
    CommonModule,
    IonicModule,
    FormsModule

  ],
})
export class CalendarioComponent implements OnInit {

  dateRange!: { from: string; to: string; };

  private modalController = inject(ModalController);
  private filterService = inject(FilterService);

  yearPrior = new Date(new Date()).setFullYear(new Date().getFullYear() - 1);
  monthsStyle: Array<string> =  ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
  calendarAMostrar: 'single' | 'range' = 'single';

  optionsCalendarRange: CalendarComponentOptions = {
    pickMode: 'range',
    from: this.yearPrior,
    showToggleButtons: true,
    monthPickerFormat: this.monthsStyle,
    color: 'primary',
  };


  constructor() {}

  ngOnInit() {

  }

  aceptarFiltros() {
       this.modalController.dismiss(this.dateRange, 'range');

       const fechaUpdaate : RangoFechas = {
              fechaInicio : this.dateRange.from,
              fechaFin    : this.dateRange.to
       }
       this.filterService.updateFecha(fechaUpdaate);
       this.filterService.getFechaFormateada();
       this.modalController.dismiss();
  }

  cancelar(){
    this.modalController.dismiss();
  }


  }



export interface CalendarOptions {
  from?: Date | number;
  to?: Date | number;
  pickMode?: PickMode;
  weekStart?: number;
  disableWeeks?: Array<number>;
  weekdays?: Array<string>;
  monthFormat?: string;
  color?: string;
  defaultTitle?: string;
  defaultSubtitle?: string;
  daysConfig?: Array<DayConfig>;
  /**
   * show last month & next month days fill six weeks
   */
  showAdjacentMonthDay?: boolean;
}
export interface CalendarModalOptions extends CalendarOptions {
  autoDone?: boolean;
  format?: string;
  cssClass?: string;
  isSaveHistory?: boolean;
  closeLabel?: string;
  doneLabel?: string;
  clearLabel?: string;
  closeIcon?: boolean;
  doneIcon?: boolean;
  clearIcon?: boolean;
  closeTitle?: string;
  doneTitle?: string;
  clearTitle?: string;
  canBackwardsSelected?: boolean;
  title?: string;
  defaultScrollTo?: Date;
  defaultDate?: DefaultDate;
  defaultDates?: DefaultDate[];
  defaultDateRange?: {
      from: DefaultDate;
      to?: DefaultDate;
  } | null;
  step?: number;
  defaultEndDateToStartDate?: boolean;
  maxRange?: number;
}
export interface CalendarComponentOptions extends CalendarOptions {
  showToggleButtons?: boolean;
  showMonthPicker?: boolean;
  monthPickerFormat?: string[];
}
