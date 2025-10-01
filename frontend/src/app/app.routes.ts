import { Routes } from '@angular/router';
import {  MaterialsPage } from '../app/materials/pages/materials-page/materials-page'

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'materials',
        pathMatch: 'full'
    },
    {
        path: 'materials',
        component: MaterialsPage
    }
];
