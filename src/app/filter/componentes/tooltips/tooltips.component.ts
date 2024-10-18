import { Component, inject, OnInit } from '@angular/core';
import { FilterService } from '../../servicios/filter.service';
import {IonBadge } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule,IonBadge]
})
export class TooltipsComponent  implements OnInit {

  private filterService = inject(FilterService);
  fecha = this.filterService.getFechaFormateada();
  categoria = this.filterService.getCAtegoria();
  constructor() { }

  ngOnInit() {}

}
