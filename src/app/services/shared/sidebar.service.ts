import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url:'/dashboard'},
        {titulo: 'ProgressBar', url:'/progress'},
        {titulo: 'Gráficas', url:'/graficas1'},
        {titulo: 'Promesas', url:'/promesas'},
        {titulo: 'RXJS', url:'/rxjs'}
      ]
    }
  ];

  constructor() { }
}
