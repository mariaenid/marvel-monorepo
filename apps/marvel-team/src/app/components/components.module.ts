import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  imports: [
    TabViewModule,
  ],
  declarations: [
    TabsComponent,
  ],
  exports: [
    TabsComponent
  ]
})
export class ComponentsModule { }
