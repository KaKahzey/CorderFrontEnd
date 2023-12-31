import { Routes } from '@angular/router';
import { HomeComponent } from './pages/user/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { PhotoCaptureChoiceComponent } from './pages/user/photo-capture-choice/photo-capture-choice.component';
import { PhotoInformationComponent } from './pages/user/photo-information/photo-information.component';
import { PhotoValidationComponent } from './pages/user/photo-validation/photo-validation.component';
import { ThanksComponent } from './pages/user/thanks/thanks.component';
import { UserInformationComponent } from './pages/user/user-information/user-information.component';
import { CorderGuard } from './shared/guards/corder.guard';
import { GoodPracticeComponent } from './pages/user/good-practice/good-practice.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ParticipantsComponent } from './pages/admin/participants/participants.component';
import { StatisticsComponent } from './pages/admin/statistics/statistics.component';
import { ModifyAccountComponent } from './pages/admin/modify-account/modify-account.component';
import { CycleGuard } from './shared/guards/cycle.guard';
import { PopupValidationComponent } from './shared/components/popup-validation/popup-validation.component';

export const routes: Routes = [
    {path : "", component : HomeComponent},
    {path : "login", component : LoginComponent},
    {path : "admin/dashboard", component : DashboardComponent, canActivate : [CorderGuard]},
    {path : "admin/participants", component : ParticipantsComponent, canActivate : [CycleGuard]},
    {path : "admin/statistics", component : StatisticsComponent, canActivate : [CorderGuard]},
    { path : "admin", redirectTo : "/admin/dashboard"},
    {path : "modify-account", component : ModifyAccountComponent, canActivate : [CycleGuard]},
    {path : "popup-validation", component : PopupValidationComponent, canActivate : [CycleGuard]},
    {path : "photo-capture-choice", component : PhotoCaptureChoiceComponent},
    {path : "photo-information", component : PhotoInformationComponent},
    {path : "photo-validation", component : PhotoValidationComponent},
    {path : "good-practice", component : GoodPracticeComponent},
    {path : "thanks", component : ThanksComponent},
    {path : "user-information", component : UserInformationComponent},
    {path : "popup-validation", component : PopupValidationComponent},
    {path : "notfound", component : NotFoundComponent},
    { path : "**", redirectTo : "/notfound"},
];
