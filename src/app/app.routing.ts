import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { RoomComponent } from './room/room.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartPageComponent
  },
  {
    path: 'room/:id',
    component: RoomComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
