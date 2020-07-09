import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/onboard/onboard.module').then( m => m.OnboardPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'claims',
    loadChildren: () => import('./pages/claims/claims.module').then( m => m.ClaimsPageModule)
  },
  {
    path: 'benefits',
    loadChildren: () => import('./pages/benefits/benefits.module').then( m => m.BenefitsPageModule)
  },
  {
    path: 'providers',
    loadChildren: () => import('./pages/providers/providers.module').then( m => m.ProvidersPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'rewards',
    loadChildren: () => import('./pages/rewards/rewards.module').then( m => m.RewardsPageModule)
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('./auth/walkthrough/walkthrough.module').then( m => m.WalkthroughPageModule)
  },
  {
    path: 'fingerprint',
    loadChildren: () => import('./auth/fingerprint/fingerprint.module').then( m => m.FingerprintPageModule)
  },
  {
    path: 'onboard',
    loadChildren: () => import('./auth/onboard/onboard.module').then( m => m.OnboardPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
