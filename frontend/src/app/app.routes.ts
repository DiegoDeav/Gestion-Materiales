import { Routes } from '@angular/router';
import { MaterialesPage } from './components/materiales/pages/materiales-page/materiales-page';
import { CiudadesPage } from './components/ciudades/pages/ciudades-page/ciudades-page';
import { DepartamentosPage } from './components/departamentos/pages/departamentos-page/departamentos-page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'materiales',
        pathMatch: 'full'
    },
    {
        path: 'materiales',
        component: MaterialesPage
    },
    {
        path: 'ciudades',
        component: CiudadesPage
    },
    {
        path: 'departamentos',
        component: DepartamentosPage
    }
];
