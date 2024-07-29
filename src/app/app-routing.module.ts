import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
// import { LoginComponent } from './page/login/login.component';
// import { ProfileComponent } from './page/profile/profile.component';
// import { SignupComponent } from './page/signup/signup.component';
// import { authGuard } from './guards/auth.guards';

const routes: Routes = [{
  path:'',
  component: HomeComponent,
  title:'Home',
},

{
  path:'toolbar',
  component: ToolbarComponent,
  title:'toolbar',
},

{
  // если неправильный(несуществующий роут) редиректит на HomeComponent
  path:'**', 
  component: HomeComponent,
  redirectTo:''
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
