import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ModalComponent, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  public dropdownOpen: boolean = false;
  isModalOpen = false;

  closeModal() {
    this.isModalOpen = false;
  }
}
