import { Component, OnInit } from '@angular/core';
import { GridComponent } from '../../share/grid/grid.component';
import { BaseApiService } from '../../services/base-api.service';
import { ModalComponent } from '../../share/modal/modal.component';
import { GridApi } from 'ag-grid-community';
import * as XLSX from 'xlsx'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [GridComponent, ModalComponent, ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  public rowData: any = []
  public colDefs: any = []
  public isShowModalAdd = false;
  private gridApi!: GridApi
  public selectedProdouct = [];
  public form!: FormGroup;

  constructor(public baseApi: BaseApiService) {
  }

  ngOnInit() {
    this.initForm();
    this.getProduct();
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      image: new FormControl('https://via.placeholder.com/150'),
    })
  }

  public getProduct() {
    this.baseApi.GET('http://localhost:3000/products').subscribe((product: any) => {
      this.rowData = product;

      const fields = Object.keys(this.rowData[0]);

      const result: any = fields.map((field, index) => (
        {
          field: field,
          sortable: true,
          filter: true,
          editable: true,
          checkboxSelection: index === 0 ? true : false,
          headerCheckbox: true,
          headerCheckboxSelection: index === 0 ? true : false,
          ...(index === 3 && {
            cellRenderer: (params: any) => {
              return params.value.toLocaleString('fa-IR', { style: 'currency', currency: 'IRR' });
            },
          }),
        }
      ));
      result.push(
        {
          checkboxSelection: false,
          field: "",
          filter: false,
          headerCheckbox: false,
          headerCheckboxSelection: false,
          sortable: false,
          cellRenderer: function (params: any) {
            return `<button class="delete-icon" $(click)=deleteRow(${params})">️🗑️</button>`;
          },
        });

      this.colDefs = result
    })
  }

  public ShowModalAdd() {
    this.isShowModalAdd = !this.isShowModalAdd;
  }

  public onGridReady(api: any) {
    this.gridApi = api;
  }

  public selectedData(e: any) {
    this.selectedProdouct = e;
  }

  public Delete() {
    this.selectedProdouct.forEach((_: any) => {
      console.log(_.id);
      this.baseApi.DELETE(`http://localhost:3000/products/${_.id}`,).subscribe((product: any) => {
        this.rowData = this.rowData.filter((item: any) => item.id != _.id)
        this.gridApi.setGridOption("rowData", this.rowData);
      })
    })
  }

  public onCellValueChanged(e: any) {
    this.baseApi.PATCH(`http://localhost:3000/products/${e.data.id}`, e.data).subscribe((product: any) => {
      console.log(product);
      this.gridApi.setGridOption("rowData", this.rowData);
    })
  }

  public onBtExport() {
    const worksheet = XLSX.utils.json_to_sheet(this.selectedProdouct);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet,
      'Sheet1');
    XLSX.writeFile(workbook, 'export.xlsx');
  }

  public closeModal() {
    this.isShowModalAdd = !this.isShowModalAdd;
  }

  public addProduct(data: any) {
    this.isShowModalAdd = true;
    this.baseApi.POST('http://localhost:3000/products', data).subscribe((product: any) => {
      this.rowData.push(product);
      this.gridApi.setGridOption("rowData", this.rowData);
    })
  }

  public submit() {
    if (this.form.valid) {
      this.addProduct(this.form.value)
      this.isShowModalAdd = false;
    }
  }
}
