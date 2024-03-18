import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    TabViewModule,
    PanelModule,
  ],
  declarations: [
    TabsComponent,
  ],
  exports: [
    TabsComponent
  ]
})
export class ComponentsModule { }
