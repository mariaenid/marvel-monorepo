import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { InitComponent } from './init/init.component';


@NgModule({
  declarations: [
    InitComponent
  ],
  exports: [
    InitComponent
  ],
  imports: [
    ComponentsModule,
  ],
})
export class PagesModule { }
