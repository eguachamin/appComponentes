import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Importa el componente standalone
import { HomePage } from './home.page';

// Módulo de enrutamiento específico para la página
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    HomePage  // Asegúrate de que HomePage esté importado, no declarado
  ],
  // Eliminar HomePage de 'declarations'
  declarations: []
})
export class HomePageModule {}

/* import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    HomePage
  ],
  declarations: [HomePage]
})
export class HomePageModule {}*/