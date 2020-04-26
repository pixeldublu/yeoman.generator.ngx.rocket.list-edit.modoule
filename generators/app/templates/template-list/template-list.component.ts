import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { <%= mainTitle %>Service } from '../services/<%= secondaryTitle %>.service';
import { <%= mainModel %> } from '../models/<%= secondaryModel %>.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-<%= secondaryTitle %>-list',
  templateUrl: './<%= secondaryTitle %>-list.component.html',
  styleUrls: ['./<%= secondaryTitle %>-list.component.scss']
})
export class <%= mainTitle %>ListComponent implements OnInit {

  isLoading: boolean;
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private <%= secondaryTitle %>Service: <%= mainTitle %>Service) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.isLoading = true;
    this.<%= secondaryTitle %>Service.api<%= mainTitle %>Get()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((value: <%= mainModel %>) => {
        this.dataSource.data = <Object[]> value; });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
