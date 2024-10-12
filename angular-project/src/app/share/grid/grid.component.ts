import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  pagination = true;
  paginationPageSize = 500;
  paginationPageSizeSelector = [200, 500, 1000];

  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: true },
    { make: "Toyota", model: "Corolla", price: 29600, electric: true },
  ];

  colDefs: ColDef[] = [
    { field: "make", sortable: true },
    { field: "model", sortable: true  },
    { field: "price", sortable: true  },
    { field: "electric", sortable: true  }
  ];
}
