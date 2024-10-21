import { Component, OnInit } from '@angular/core';
import { GridComponent } from '../../share/grid/grid.component';
import { BaseApiService } from '../../services/base-api.service';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  public rowData: any = []
  public colDefs: any = []

  constructor(public baseApi: BaseApiService) {
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.baseApi.GET('http://localhost:3000/products').subscribe((product: any) => {
      this.rowData = product;
      const fields = Object.keys(this.rowData[0]);
      const result = fields.map(field => ({
        field: field,
        sortable: true,
        filter: true,
      }));
      this.colDefs = result;
    })
  }

}
