import { Routes } from '@angular/router';
import { MaterialesPage } from './components/materiales/pages/materiales-page/materiales-page';
import { CiudadesPage } from './components/ciudades/pages/ciudades-page/ciudades-page';
import { DepartamentosPage } from './components/departamentos/pages/departamentos-page/departamentos-page';
import { AddMaterial} from './components/materiales/pages/addMaterial/add-material';
import { EditMaterial } from './components/materiales/pages/editMaterial/edit-material';
import { EditCiudad } from './components/ciudades/pages/editCiudad/edit-ciudad';
import { EditDepartamento } from './components/departamentos/pages/editDepartamento/edit-departamento';

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
        path: 'materiales/nuevo',
        component: AddMaterial
    },
    {
        path: 'materiales/editar/:id',
        component: EditMaterial
    },
    {
        path: 'ciudades',
        component: CiudadesPage
    },
    {
        path: 'ciudades/editar/:codigo',
        component: EditCiudad
    },
    {
        path: 'departamentos',
        component: DepartamentosPage
    },
    {
        path: 'departamentos/editar/:codigo',
        component: EditDepartamento
    }
];
