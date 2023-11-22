import { Routes } from '@angular/router';
import { HomeComponent } from './pages/user/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { PhotoCaptureChoiceComponent } from './pages/user/photo-capture-choice/photo-capture-choice.component';
import { PhotoInformationComponent } from './pages/user/photo-information/photo-information.component';
import { PhotoValidationComponent } from './pages/user/photo-validation/photo-validation.component';
import { ThanksComponent } from './pages/user/thanks/thanks.component';
import { UserInformationComponent } from './pages/user/user-information/user-information.component';
import { connectedGuard } from './shared/guards/connected.guard';
import { GoodPracticeComponent } from './pages/user/good-practice/good-practice.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

export const routes: Routes = [
    {path : "", component : HomeComponent},
    {path : "admin/login", component : LoginComponent},
    {path : "admin/dashboard", component : NavbarComponent}, // canActivate: [connectedGuard]
    {path : "photo-capture-choice", component : PhotoCaptureChoiceComponent},
    {path : "photo-information", component : PhotoInformationComponent},
    {path : "photo-validation", component : PhotoValidationComponent},
    {path : "good-practice", component : GoodPracticeComponent},
    {path : "thanks", component : ThanksComponent},
    {path : "user-information", component : UserInformationComponent},
    {path : "notfound", component : NotFoundComponent},
    { path : "**", redirectTo : "/notfound"},
];
