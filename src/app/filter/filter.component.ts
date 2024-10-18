import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MenuDespegableComponent } from './componentes/menu-despegable/menu-despegable.component';
import { IonicModule } from '@ionic/angular';
import { FilterService } from './servicios/filter.service';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import { TooltipsComponent } from "./componentes/tooltips/tooltips.component";
import { IonButton, IonInput, IonIcon, ModalController} from '@ionic/angular/standalone';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MenuDespegableComponent,
    IonicModule,
    TooltipsComponent,
    IonButton,
    IonInput,
    IonIcon,
    CalendarioComponent,

],
providers : [ModalController],
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
