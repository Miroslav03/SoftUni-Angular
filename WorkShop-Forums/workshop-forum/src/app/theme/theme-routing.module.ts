import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewThemeComponent } from "./new-theme/new-theme.component";
import { MainComponent } from "./main/main.component";
import { AuthActivate } from "../guards/auth.activate";
import { ThemeContentComponent } from "./theme-content/theme-content.component";


const routes: Routes = [
    { path: 'new-theme', component: NewThemeComponent, canActivate: [AuthActivate], },
    { path: 'themes', component: MainComponent },
    { path: 'themes/:id', component: ThemeContentComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ThemeRoutingModule {

}