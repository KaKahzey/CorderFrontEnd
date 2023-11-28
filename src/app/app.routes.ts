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
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ValidatedPhotosComponent } from './pages/admin/validated-photos/validated-photos.component';
import { RejectedPhotosComponent } from './pages/admin/rejected-photos/rejected-photos.component';
import { OnHoldPhotosComponent } from './pages/admin/on-hold-photos/on-hold-photos.component';
import { ParticipantsComponent } from './pages/admin/participants/participants.component';
import { StatisticsComponent } from './pages/admin/statistics/statistics.component';
import { PhotoCaptureComponent } from './pages/user/photo-capture/photo-capture.component';

export const routes: Routes = [
    {path : "", component : HomeComponent},
    {path : "admin/login", component : LoginComponent},
    {path : "admin/dashboard", component : DashboardComponent}, // canActivate: [connectedGuard]
    {path : "admin/validated-photos", component : ValidatedPhotosComponent},
    {path : "admin/rejected-photos", component : RejectedPhotosComponent},
    {path : "admin/on-hold-photos", component : OnHoldPhotosComponent},
    {path : "admin/participants", component : ParticipantsComponent},
    {path : "admin/statistics", component : StatisticsComponent},
    {path : "photo-capture", component : PhotoCaptureComponent},
    {path : "photo-capture-choice", component : PhotoCaptureChoiceComponent},
    {path : "photo-information", component : PhotoInformationComponent},
    {path : "photo-validation", component : PhotoValidationComponent},
    {path : "good-practice", component : GoodPracticeComponent},
    {path : "thanks", component : ThanksComponent},
    {path : "user-information", component : UserInformationComponent},
    {path : "notfound", component : NotFoundComponent},
    { path : "**", redirectTo : "/notfound"},
];
