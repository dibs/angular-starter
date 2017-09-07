import { Component } from '@angular/core';
import { AppState } from '../app.service';
import { Site } from './site';
import { SitesService } from './sites.service';

@Component({
  selector: 'sites-page',
  styleUrls: ['./sites.component.scss'],
  templateUrl: './sites-page.component.html',
  providers: [SitesService]
})
export class SitesPageComponent {
  localState: any;
  title = "Sites lister";
  sites: Site[];
  showingSites: Boolean = false;
  selectedSite: Site;

  constructor(public appState: AppState, private sitesService: SitesService) {

  }

  getSites(): void {
    this.sitesService.getSites().subscribe(sites => this.sites = sites);
  }

  ngOnInit() {
    console.log('hello `Sites` component');
    this.getSites();
  }

  onSelect(site: Site): void {
    this.selectedSite = site;
    console.log("Site selected: "+site.name);
  }

  showSites(){
    if (this.showingSites) {
      this.showingSites = false;
      console.log("hide sites");
    } else {
      this.showingSites = true;
      console.log("show sites");
    }
  }
}
