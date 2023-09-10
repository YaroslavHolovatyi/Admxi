import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdertisersService } from 'src/app/services/adertisers.service';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-advertisers',
  templateUrl: './advertisers.component.html',
  styleUrls: ['./advertisers.component.scss'],
})
export class AdvertisersComponent implements AfterViewInit {
  constructor(private advertService: AdertisersService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog:MatDialog) { }

  @ViewChild(MatSort) sort!: MatSort;
  chosenAdvertiser:any;

  displayedColumns: string[] = ['advertiserID', 'name', 'profit'];
  advertisersSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  ngOnInit() {
    this.getTheData();
      this.advertisersSource.filterPredicate = function(data, filter: string): boolean {
        return data.name.toLowerCase().includes(filter);
    };
  }

  getTheData(){
    this.advertService.searchForAdvertisers()
      .subscribe(response => {
        this.advertisersSource.data = response;
      });
  }

  ngAfterViewInit() {
    this.advertisersSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.advertisersSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(event:string){
    this.dialog.open(DialogComponent, {
      data: {message: event}
    })
  }
}


