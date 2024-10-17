import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonInput } from "@ionic/angular/standalone";
import { MenuDespegableComponent } from './componentes/menu-despegable/menu-despegable.component';
import { IonicModule, ModalController } from '@ionic/angular';
import { FilterService } from './servicios/filter.service';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import { TooltipsComponent } from "./componentes/tooltips/tooltips.component";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MenuDespegableComponent,
    IonicModule,
    TooltipsComponent
]
})
export class FilterComponent  implements OnInit {

  private modalController = inject(ModalController);
  private filterService = inject(FilterService);

  constructor() { }

  ngOnInit() {}


  updateNombre(event: any) {
    this.filterService.updateNombre(event.detail.value);
  }

  async openCalendar(){

    const calendarioComp = await this.modalController.create({
      component: CalendarioComponent,
      cssClass: 'calendario-filtro-modal',
      backdropDismiss: false,
    });

    calendarioComp.present();
  }

}
