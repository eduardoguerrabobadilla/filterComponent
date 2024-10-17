
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { IonRangeCalendarComponent, IonRangeCalendarModule } from '@googlproxer/ion-range-calendar';
import { ModalController } from '@ionic/angular';
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
  IonInput, IonIcon, IonBadge, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ColumnMode, DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarioComponent } from '../filter/componentes/calendario/calendario.component';
import { FilterService } from './../filter/servicios/filter.service';
import { CommonModule, DatePipe } from '@angular/common';
import { MenuDespegableComponent } from './../filter/componentes/menu-despegable/menu-despegable.component';
import { addIcons } from 'ionicons';
import { calendarOutline } from 'ionicons/icons';
import { FilterComponent } from "../filter/filter.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonBadge, IonIcon,
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
    IonItem,
    IonLabel,
    NgxDatatableModule,
    IonRangeCalendarModule,
    DatePipe,
    MenuDespegableComponent,
    CommonModule, FilterComponent],
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
