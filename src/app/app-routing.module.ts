import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'allcards',component:AllCardsComponent},
  {path:'practice',component:PracticeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
