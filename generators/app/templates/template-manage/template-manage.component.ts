import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationDialog } from '@shared/dialogs/confirmation/confirmation-dialog.component';
import { <%= mainTitle %>Service } from '../services/<%= secondaryTitle %>.service';
import { <%= mainModel %> } from '../models/<%= secondaryModel %>.model'



@Component({
  selector: 'app-<%= secondaryTitle %>-manage',
  templateUrl: './<%= secondaryTitle %>-manage.component.html'
})
export class <%= mainTitle %>ManageComponent implements OnInit {

  isLoading: boolean;
  isNew = true;
  id: string;


  <%= secondaryModel %>Form = this.fb.group({
    name: ['', Validators.required],
  });

  environment = environment;

  constructor(private <%= secondaryTitle %>Service: <%= mainTitle %>Service,
              private router: Router,
              private route: ActivatedRoute,
              public snackBar: MatSnackBar,
              private dialog: MatDialog,
              private translateService: TranslateService,
              private fb: FormBuilder
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
    this.<%= secondaryModel %>Form.patchValue(<%= secondaryModel %>);
    this.isNew = false;
    this.id = <%= secondaryModel %>.id.toString();

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params && params.id) {
        this.loadData(params.id);
      }
    });
  }


  save<%= mainModel %>() {
    this.isLoading = true;
    if (this.isNew) {
      this.<%= secondaryTitle %>Service
        .api<%= mainTitle %>Post(this.<%= secondaryModel %>Form.value)
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
        .api<%= mainTitle %>IdPost(this.id, this.<%= secondaryModel %>Form.value)
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

    const dialogRef = this.dialog.open(ConfirmationDialog,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
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
    });

  }



}
