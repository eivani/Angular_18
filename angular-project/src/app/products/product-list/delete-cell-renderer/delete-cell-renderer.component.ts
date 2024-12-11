import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-delete-cell-renderer',
  standalone: true,
  imports: [],
  templateUrl: './delete-cell-renderer.component.html',
  styleUrl: './delete-cell-renderer.component.scss'
})
export class DeleteCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  @Input() data: any;


  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return params
  }

  onDeleteClick() {
    // در اینجا عملیات حذف را انجام دهید
    console.log('سطر با شناسه', this.data.id, 'حذف شد.');
    // ... کد حذف از سرور یا آرایه داده
  }
}
