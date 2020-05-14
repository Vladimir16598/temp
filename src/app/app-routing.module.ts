import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';


const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "app",
    component: SecondComponent
  },
  {
    path: "tarif",
    component: ThirdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
