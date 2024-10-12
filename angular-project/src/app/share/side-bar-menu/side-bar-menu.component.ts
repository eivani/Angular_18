import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar-menu.component.html',
  styleUrl: './side-bar-menu.component.scss'
})
export class SideBarMenuComponent {
  public isShowSideBar: boolean = true;

}
