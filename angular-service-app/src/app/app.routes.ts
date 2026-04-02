// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { List } from './components/list/list';

export const routes: Routes = [
  { path: '', component: List }   // 👈 default route
];