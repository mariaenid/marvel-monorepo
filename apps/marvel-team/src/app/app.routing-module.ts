import { Route, RouterModule } from '@angular/router';
import { InitComponent } from './init/init.component';
import { NgModule } from '@angular/core';

export const appRoutes: Route[] = [
  {
    path: '',
    component: InitComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
