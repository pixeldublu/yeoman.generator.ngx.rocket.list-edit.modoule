import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { <%= mainTitle %>Service } from '@app/core/services/api/<%= secondaryTitle %>.service';
import { <%= mainModel %> } from '@app/core/models/<%= secondaryModel %>';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-<%= secondaryTitle %>-list',
  templateUrl: './<%= secondaryTitle %>-list.component.html'
})
export class <%= mainTitle %>ListComponent implements OnInit {

  isLoading: boolean;
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private <%= secondaryTitle %>Service: <%= mainTitle %>Service) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.isLoading = true;
    this.<%= secondaryTitle %>Service.api<%= mainTitle %>Get()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((value: <%= mainModel %>) => {
        this.dataSource.data = <Object[]> value; });
  }
}
