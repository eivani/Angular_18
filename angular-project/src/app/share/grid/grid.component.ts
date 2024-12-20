import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi } from 'ag-grid-community';

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
  @Input() rowSelection: 'multiple' | 'single' = 'multiple';
  @Input() paginationPageSize: number = 500;
  @Output() gridReady1 = new EventEmitter<GridApi>();
  @Output() selectedData = new EventEmitter<GridApi>();
  @Output() onCellValueChange = new EventEmitter<GridApi>();

  pagination = true;
  paginationPageSizeSelector = [2, 5, 10, 20];
  private gridApi!: GridApi;


  ngOnChanges(changes: SimpleChanges) {
  }

  onRowClicked(event: any) { console.log('row', event); }
  onCellClicked(event: any) { console.log('cell', event); }
  onSelectionChanged(event: any) {
    const selectedNodes = event.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => node.data);
    this.selectedData.emit(selectedData)
  }

  onGridReady(params: any) {
    this.gridApi = params.api; // To access the grids API
    this.gridReady1.next(this.gridApi);
  }

  onCellValueChanged(e: any) {
    this.onCellValueChange.emit(e)
  }

}
