import { DatePipe } from '@angular/common';
import { effect, Injectable, signal, inject, Inject } from '@angular/core';
import { RangoFechas } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class FilterService {

  private data             = signal<any[]>([]); //signal datos
  private nombreTexto      = signal<string>(''); //signal nombre caja de texto
  private rangoFechas      = signal<RangoFechas>({fechaInicio:'',fechaFin:''});
  private categoriaSelec   = signal<string>(''); //signal categoria Seleccionada
  private fechaFormateada  = signal<string>(''); //signal categoria Seleccionada
  private pipe             = inject(DatePipe);
  private Initdata         = [
    { id: 1, nombre: 'Coca cola', categoria: 'Refrescos', fecha: this.pipe.transform(new Date('2024-10-10T00:00:00'), 'YYYY-MM-dd') },
    { id: 2, nombre: 'Pepsi cola', categoria: 'Refrescos', fecha: this.pipe.transform(new Date('2024-10-10T00:00:00'), 'YYYY-MM-dd') },
    { id: 3, nombre: 'Doritos', categoria: 'Botanas', fecha: this.pipe.transform(new Date('2024-10-10T00:00:00'), 'YYYY-MM-dd') },
    { id: 4, nombre: 'Leche', categoria: 'Lacteos', fecha: this.pipe.transform(new Date('2024-10-11T00:00:00'), 'YYYY-MM-dd') },
    { id: 5, nombre: 'Coca cola', categoria: 'Refrescos', fecha: this.pipe.transform(new Date('2024-10-10T00:00:00'), 'YYYY-MM-dd') },
    { id: 6, nombre: 'Pepsi cola', categoria: 'Refrescos', fecha: this.pipe.transform(new Date('2024-10-10T00:00:00'), 'YYYY-MM-dd') },
    { id: 7, nombre: 'Doritos', categoria: 'Botanas', fecha: this.pipe.transform(new Date('2024-10-12T00:00:00'), 'YYYY-MM-dd') },
    { id: 8, nombre: 'Leche light', categoria: 'Lacteos', fecha: this.pipe.transform(new Date('2024-10-10T00:00:00'), 'YYYY-MM-dd') },
    { id: 9, nombre: 'Pepsi cola', categoria: 'Refrescos', fecha: this.pipe.transform(new Date('2024-10-10T00:00:00'), 'YYYY-MM-dd') },
    { id: 10, nombre: 'Doritos', categoria: 'Botanas', fecha: this.pipe.transform(new Date('2024-10-25T00:00:00'), 'YYYY-MM-dd') },
    { id: 11, nombre: 'Leche', categoria: 'Lacteos', fecha: this.pipe.transform(new Date('2024-10-10T00:00:00'), 'YYYY-MM-dd') },
    { id: 12, nombre: 'Coca cola', categoria: 'Refrescos', fecha: this.pipe.transform(new Date('2024-10-10T00:00:00'), 'YYYY-MM-dd') },
  ]

  constructor() {

     this.inicializarData();

   }

filterData() {
    this.data.update(value =>  {

        const startDate = new Date(this.rangoFechas().fechaInicio).setHours(0, 0, 0, 0);
        const endDate = new Date(this.rangoFechas().fechaFin).setHours(0, 0, 0, 0);


        return value.filter(item => {
          const matchesName = this.nombreTexto() && this.nombreTexto().trim() !== ''  ? item.nombre.toLowerCase().includes(this.nombreTexto().toLowerCase()) : true; // Filtro nombre
          const matchesGender = this.categoriaSelec() ? item.categoria.toLowerCase() === (this.categoriaSelec().toLowerCase()) : true; // Filtro categoria
          const itemDate = new Date(item.fecha).setHours(0, 0, 0, 0);
          const matchesStartDate = startDate ? itemDate >= startDate : true; // Filtro fecha Inicial
          const matchesEndDate = endDate ? itemDate <= endDate : true; // Filtro fecha Final

          return matchesName && matchesGender && matchesStartDate && matchesEndDate;
        });


        });

}

updateFecha(rangoFecha:RangoFechas){

   this.rangoFechas.set(rangoFecha);

}

updateCategoria(categoriaSeleccionada:string){

  this.categoriaSelec.set(categoriaSeleccionada);

}

updateNombre(nombre:string){

  this.nombreTexto.set(nombre);

}

inicializarData(){

  this.data.set(this.Initdata);
  this.fechaFormateada.set('');
  this.categoriaSelec.set('');
  this.rangoFechas.set({fechaInicio:'',fechaFin:''})

}

getData(){
  return this.data;
}

getCAtegoria(){
 return this.categoriaSelec;
}

getFechaFormateada(){
  if(this.rangoFechas().fechaFin.trim() !== ''){
    const fecha    = this.pipe.transform(new Date(this.rangoFechas().fechaInicio+'T00:00:00'), 'dd  MMM');
    const fechaFin = this.pipe.transform(new Date(this.rangoFechas().fechaFin+'T00:00:00'), 'dd  MMM');
    const fechaFormateada = 'Del ' + fecha + ' Al ' + fechaFin;
    this.fechaFormateada.set(fechaFormateada);
  }

  return this.fechaFormateada;
}




}
