import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product/list/index.component';
import { ProductAddComponent } from './components/product/add/index.component';
import { ProductEditComponent } from './components/product/edit/index.component';

const routes: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'index', component: ProductListComponent},
    {path: 'add', component: ProductAddComponent},
    {path: 'edit/:id', component: ProductEditComponent}
]

export const routing = RouterModule.forRoot(routes);