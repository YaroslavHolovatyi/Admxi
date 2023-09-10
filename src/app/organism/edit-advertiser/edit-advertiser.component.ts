import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { AdertisersService } from 'src/app/services/adertisers.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-advertiser',
  templateUrl: './edit-advertiser.component.html',
  styleUrls: ['./edit-advertiser.component.scss']
})
export class EditAdvertiserComponent implements OnChanges{

  @Input() advertiser: any; // Assuming the type of advertiser is 'any'

  @Output() cancel= new EventEmitter<any>();
  @Output() resString= new EventEmitter<any>();
  changeAdvertiserForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private _advertServise: AdertisersService) {
    this.createChangeAdvertiserForm();
  }

  ngOnChanges() {
    if (this.advertiser) {
      this.updateFormControls();
    }
  }

  createChangeAdvertiserForm() {
    this.changeAdvertiserForm = this.formBuilder.group({
      advertiserId: new FormControl({ value: '', disabled: true }),
      campaignCount: new FormControl({ value: '', disabled: true }),
      country: new FormControl({ value: '', disabled: true }),
      impressions: new FormControl({ value: '', disabled: true }),
      name: new FormControl({ value: '', disabled: true }),
      profit: new FormControl()
    });
  }

  updateFormControls() {
    this.changeAdvertiserForm.patchValue(this.advertiser);
  }

  save() {
    const changeAdvertiserForm = this.changeAdvertiserForm;
  
    if (changeAdvertiserForm !== null) {
      const updated = {
        "userId": 283,
        "advertiserId": changeAdvertiserForm.get('advertiserId')?.value,
        "profit": +changeAdvertiserForm.get('profit')?.value
      };
  
      if (updated.advertiserId !== null && updated.profit !== null) {
        this._advertServise.saveChangedAdvertiser(updated)
          .subscribe(response => {
            return this.resString.emit(response)
          });
      }
    }
  }
  cancelAll(){
    this.cancel.emit()
  }
  
}
