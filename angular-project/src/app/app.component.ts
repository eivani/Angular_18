import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarMenuComponent } from './share/side-bar-menu/side-bar-menu.component';
import { NavBarComponent } from './share/nav-bar/nav-bar.component';
import { GridComponent } from './share/grid/grid.component';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SideBarMenuComponent,
    NavBarComponent,
    GridComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'anpular-project';

  constructor(public swUpdate: SwUpdate) {

  }

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((event) => {
        if (event.type === "VERSION_READY") {
          window.location.reload();
        }
      });

    }
  }

}
