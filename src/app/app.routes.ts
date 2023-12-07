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
import { ValidatedPhotosComponent } from './pages/admin/validated-photos/validated-photos.component';
import { RejectedPhotosComponent } from './pages/admin/rejected-photos/rejected-photos.component';
import { OnHoldPhotosComponent } from './pages/admin/on-hold-photos/on-hold-photos.component';
import { ParticipantsComponent } from './pages/admin/participants/participants.component';
import { StatisticsComponent } from './pages/admin/statistics/statistics.component';
import { ModifyAccountComponent } from './pages/admin/modify-account/modify-account.component';
import { CycleGuard } from './shared/guards/cycle.guard';

export const routes: Routes = [
    {path : "", component : HomeComponent},
    {path : "login", component : LoginComponent},
    {path : "admin/dashboard", component : DashboardComponent, canActivate : [CorderGuard]},
    {path : "admin/validated-photos", component : ValidatedPhotosComponent, canActivate : [CycleGuard]},
    {path : "admin/rejected-photos", component : RejectedPhotosComponent, canActivate : [CorderGuard]},
    {path : "admin/on-hold-photos", component : OnHoldPhotosComponent, canActivate : [CorderGuard]},
    {path : "admin/participants", component : ParticipantsComponent, canActivate : [CorderGuard]},
    {path : "admin/statistics", component : StatisticsComponent},
    {path : "admin/modify-account", component : ModifyAccountComponent, /*canActivate : [CycleGuard]*/},
    {path : "photo-capture-choice", component : PhotoCaptureChoiceComponent},
    {path : "photo-information", component : PhotoInformationComponent},
    {path : "photo-validation", component : PhotoValidationComponent},
    {path : "good-practice", component : GoodPracticeComponent},
    {path : "thanks", component : ThanksComponent},
    {path : "user-information", component : UserInformationComponent},
    {path : "notfound", component : NotFoundComponent},
    { path : "**", redirectTo : "/notfound"},
];
