import { RouterModule, Routes} from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { Router } from 'express';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { ChipsComponent } from './components/chips/chips.component';


export const routes: Routes = [
    // { path: 'button', component: ButtonComponent},
    { path: 'card', component: CardComponent},
    { path: 'chip', component: ChipsComponent},
    // { path: 'text-input', component: TableComponent},
    // { path: 'button-input', component: TableComponent},
    { path: 'list', component: ListComponent},
    // { path: 'modal', component: TableComponent},
    // { path: 'select', component: TableComponent},
    { path: 'table', component: TableComponent},
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }