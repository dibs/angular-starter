import { Component } from '@angular/core';
import {SitesComponent } from '../sites';
@Component({
  selector: 'topbar',
  styleUrls: ['./topbar.component.scss'],
  template: `
  <div id="topbar">
    <a [routerLink]=" ['./'] "><h1>Fabric</h1></a>
    <nav>
        <ul>
            <li>
                <a [routerLink]=" ['./home'] ">graph</a>
            </li>
            <li>
                <a [routerLink]=" ['./sites'] ">sites</a>
            </li>
            <li>
                <a [routerLink]=" ['./about'] ">history</a>
            </li>
        </ul>
    </nav>
    
  </div>
  `
})
export class TopbarComponent {
  localState: any;
  
}
