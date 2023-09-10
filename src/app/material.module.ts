import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from'@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule
    
  ],
  exports: [
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule
    
  ]
})
export class MaterialModule { }