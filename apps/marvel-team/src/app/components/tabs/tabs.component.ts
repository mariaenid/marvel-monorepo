import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-monorepo-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  @Input() tabs: any = []
}
