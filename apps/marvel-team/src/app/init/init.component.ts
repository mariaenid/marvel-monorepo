import { Component } from '@angular/core';

@Component({
  selector: 'angular-monorepo-init',
  templateUrl: './init.component.html',
  styleUrl: './init.component.scss',
})
export class InitComponent {
  public readonly tabs = [{
    label: 'Comics'
  }]
}
