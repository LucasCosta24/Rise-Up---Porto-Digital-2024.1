import { RouterModule, Routes} from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { Router } from 'express';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { ChipsComponent } from './components/chips/chips.component';
import { InputTextComponent } from './components/inputtext/inputtext.component';
import { InputbuttonComponent } from './components/inputbutton/inputbutton.component';
import { ButtonComponentPage } from './pages/button-page/button-page.component';
import { SelectComponent } from './components/select/select.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { ModaisComponent } from './components/modais/modais.component';
import { InputPageComponent } from './pages/input-page/input-page.component';
import { InputButtonPageComponent } from './pages/inputbutton-page/inputbutton-page.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { ExpandinggridComponent } from './components/expandinggrid/expandinggrid.component';
import { ExpandinggridPageComponent } from './pages/expandinggrid-page/expandinggrid-page.component';




export const routes: Routes = [
    { path: 'button', component: ButtonComponentPage},
    { path: 'card', component: CardPageComponent},
    { path: 'chip', component: ChipsComponent},
    { path: 'text-input', component: InputPageComponent},
    { path: 'button-input', component: InputButtonPageComponent},
    { path: 'list', component: ListPageComponent},
    { path: 'modal', component: ModaisComponent},
    { path: 'select', component: SelectComponent},
    { path: 'table', component: TablePageComponent},
    { path: 'expandinggrid', component: ExpandinggridPageComponent},
    { path: '', component: DefaultPageComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }