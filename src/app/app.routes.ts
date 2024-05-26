import { RouterModule, Routes} from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { Router } from 'express';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { ChipsComponent } from './components/chips/chips.component';
import { InputTextComponent } from './components/inputtext/inputtext.component';
import { InputbuttonComponent } from './components/inputbutton/inputbutton.component';
import { ButtonComponent } from './pages/button-page/button-page.component';
import { SelectComponent } from './components/select/select.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { ModaisComponent } from './components/modais/modais.component';
import { InputPageComponent } from './pages/input-page/input-page.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';


export const routes: Routes = [
    { path: 'button', component: ButtonComponent},
    { path: 'card', component: CardPageComponent},
    { path: 'chip', component: ChipsComponent},
    { path: 'text-input', component: InputPageComponent},
    { path: 'button-input', component: InputbuttonComponent},
    { path: 'list', component: ListComponent},
    { path: 'modal', component: ModaisComponent},
    { path: 'select', component: SelectComponent},
    { path: 'table', component: TableComponent},
    { path: 'default', component: DefaultPageComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }