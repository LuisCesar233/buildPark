import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:
      [
        {
          path: 'home',
          children:
            [
              {
                path: '',
                loadChildren: '../home/home.module#homePageModule'
              }
            ]
        },
        {
          path: 'lista',
          children:
            [
              {
                path: '',
                loadChildren: '../page/lista/lista.module#listaPageModule'
              }
            ]
        },
        {
          path: 'scanner',
          children:
            [
              {
                path: '',
                loadChildren: '../page/scanner/scanner.module#scannerPageModule'
              }
            ]
        },
        {
          path: 'map',
          children:
            [
              {
                path: '',
                loadChildren: '../page/ruta/ruta.module#rutaPageModule'
              }
            ]
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
