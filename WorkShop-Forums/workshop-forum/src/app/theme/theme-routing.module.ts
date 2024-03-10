import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewThemeComponent } from "./new-theme/new-theme.component";
import { ThemesListComponent } from "./themes-list/themes-list.component";


const routes: Routes = [
    { path: 'new-theme', component: NewThemeComponent },
    { path: 'themes', component: ThemesListComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ThemeRoutingModule {

}