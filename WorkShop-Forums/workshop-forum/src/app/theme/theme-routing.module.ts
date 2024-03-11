import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewThemeComponent } from "./new-theme/new-theme.component";
import { MainComponent } from "./main/main.component";
import { AuthActivate } from "../guards/auth.activate";


const routes: Routes = [
    { path: 'new-theme', component: NewThemeComponent, canActivate: [AuthActivate], },
    { path: 'themes', component: MainComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ThemeRoutingModule {

}