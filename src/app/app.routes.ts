import { Routes } from '@angular/router';
import { HomeComponent } from './pages/user/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { PhotoCaptureChoiceComponent } from './pages/user/photo-capture-choice/photo-capture-choice.component';
import { PhotoInformationComponent } from './pages/user/photo-information/photo-information.component';
import { PhotoValidationComponent } from './pages/user/photo-validation/photo-validation.component';
import { ThanksComponent } from './pages/user/thanks/thanks.component';
import { UserInformationComponent } from './pages/user/user-information/user-information.component';
import { ListComponent } from './pages/admin/list/list.component';
import { connectedGuard } from './shared/guards/connected.guard';

export const routes: Routes = [
    {path : "", component : HomeComponent},
    {path : "admin/login", component : LoginComponent},
    {path : "admin/list", component : ListComponent, canActivate: [connectedGuard]},
    {path : "admin", redirectTo : "/admin/login"},
    {path : "photo-capture-choice", component : PhotoCaptureChoiceComponent},
    {path : "photo-information", component : PhotoInformationComponent},
    {path : "photo-validation", component : PhotoValidationComponent},
    {path : "thanks", component : ThanksComponent},
    {path : "user-information", component : UserInformationComponent},
    {path : "notfound", component : NotFoundComponent},
    { path : "**", redirectTo : "/notfound"},
];
