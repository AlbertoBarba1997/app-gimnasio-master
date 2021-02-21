import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cover-page', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },
  { path: 'cover-page', loadChildren: () => import('./pages/cover-page/cover-page.module').then( m => m.CoverPagePageModule) },
  { path: 'tabs', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
