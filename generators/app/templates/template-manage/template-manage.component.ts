import { Component, OnInit } from '@angular/core';
import { <%= mainTitle %>Service } from '../services/<%= secondaryTitle %>.service';
import { <%= mainModel %> } from '../models/<%= secondaryModel %>.model'
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TranslateService } from '@ngx-translate/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-<%= secondaryTitle %>-manage',
  templateUrl: './<%= secondaryTitle %>-manage.component.html'
})
export class <%= mainTitle %>ManageComponent implements OnInit {

  isLoading: boolean;
  isNew = true;
  id: string;

  <%= secondaryModel %>: <%= mainModel %> = {

  };

  environment = environment;

  constructor(private <%= secondaryTitle %>Service: <%= mainTitle %>Service,
              private router: Router,
              private route: ActivatedRoute,
              public snackBar: MatSnackBar,
              private translateService: TranslateService
) {}

  loadData(id: string) {
    this.isLoading = true;
    this.<%= secondaryTitle %>Service.api<%= mainTitle %>IdGet(id, 'body')
      .subscribe((value: <%= mainModel %>) => {
        this.setData(value[0]);
      });
  }

  setData(<%= secondaryModel %>: <%= mainModel %>) {
    this.isLoading = false;
    this.<%= secondaryModel %> = <%= secondaryModel %>;
    this.isNew = false;
    this.id = this.<%= secondaryModel %>.id.toString();

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params && params.id) {
        this.loadData(params.id);
      }
    });
  }


  save<%= mainModel %>(valid: any) {
    this.isLoading = true;
    if (this.isNew) {
      this.<%= secondaryTitle %>Service
        .api<%= mainTitle %>Post(this.<%= secondaryModel %>)
        .subscribe((data) => {
          this.isLoading = false;
          setTimeout(() => {
            this.translateService
            .get('<%= mainModel %> created')
            .subscribe(result => this.snackBar.open(result, '', {duration: 500, verticalPosition: 'top'}));
            this.router.navigate(['/<%= secondaryTitle %>/manage/' + data.id]);
          }, 100);
        });
    } else {
      this.<%= secondaryTitle %>Service
        .api<%= mainTitle %>IdPost(this.id, this.<%= secondaryModel %>)
        .subscribe((data: any) => {
          this.isLoading = false;
          setTimeout(() => {
          this.translateService
          .get('<%= mainModel %> updated')
          .subscribe(result => this.snackBar.open(result, '', {duration: 500, verticalPosition: 'top'}));
          }, 100);
        });
    }
  };

  delete<%= mainModel %>() {
    this.isLoading = true;
    this.<%= secondaryTitle %>Service
    .api<%= mainTitle %>IdDelete(this.id)
    .subscribe((data: any) => {
      this.isLoading = false;
      setTimeout(() => {
      this.translateService
      .get('<%= mainModel %> deleted')
      .subscribe(result => this.snackBar.open(result, '', {duration: 500, verticalPosition: 'top'}));
        this.router.navigate(['/<%= secondaryTitle %>']);
      }, 100);
    });
  }




}
