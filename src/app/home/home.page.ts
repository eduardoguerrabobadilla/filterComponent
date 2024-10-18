
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import {  IonRangeCalendarModule } from '@googlproxer/ion-range-calendar';
import { IonicModule, ModalController } from '@ionic/angular';
import { ColumnMode, DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterService } from './../filter/servicios/filter.service';
import {  CommonModule, DatePipe } from '@angular/common';
import { addIcons } from 'ionicons';
import { calendarOutline } from 'ionicons/icons';
import { FilterComponent } from "../filter/filter.component";
import { IonButton, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    NgxDatatableModule,
    IonRangeCalendarModule,
    DatePipe,
    IonicModule,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonButton,
    IonTitle,
    FilterComponent],
  providers: [DatePipe]
})
export class HomePage implements OnInit {


  private filterService = inject(FilterService);


  @ViewChild(DatatableComponent) table!: DatatableComponent;
  ColumnMode = ColumnMode;
  loadingIndicator!: boolean;
  temp: any[] = [];
  rows  = this.filterService.getData(); //signal

  constructor() {}



  ngOnInit() {
    this.loadingIndicator = true;

    this.loadingIndicator = false;
     addIcons({ calendarOutline });
  }


  aplicarFiltro() {

    this.filterService.filterData();
  }

  limpiarFiltros(){

    this.filterService.inicializarData();
  }

}
