import { Component, Input, SimpleChanges } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  @Input() rowData: any = [];
  @Input() colDefs: any = [];

  pagination = true;
  paginationPageSize = 500;
  paginationPageSizeSelector = [200, 500, 1000];


  ngOnChanges(changes: SimpleChanges) {

  }
}
