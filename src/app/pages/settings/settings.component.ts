import {Component, OnInit} from '@angular/core';
import {Staff} from "../../models/staff.interface";
import {Router, ActivatedRoute} from '@angular/router';
import {StaffService} from '../../services/staff.service';
import {Observable} from "rxjs";
import {AuthService} from "@auth0/auth0-angular";
import {FormControl, FormGroup} from "@angular/forms";
import {Office} from "../../models/office.interface";

@Component({
  selector: 'app-user',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  staff: Staff;
  offices: Observable<Office[]>;
  settingsFormGroup: FormGroup = new FormGroup({});

  productTypes = ['Los Angeles', 'Cape Town', 'London'];

  constructor(public auth: AuthService,
              private _activateRoute: ActivatedRoute,
              private _router: Router,
              private _staffService: StaffService,
              private router: Router) {
  }

  ngOnInit() {
    this.settingsFormGroup = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      jobTitle: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      gender: new FormControl(''),
      building: new FormControl(''),
      streetAddress: new FormControl(''),
      postcode: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
      officeId: new FormControl(''),
    });

    this.offices = this._staffService.getOffices();

    this.auth.user$.subscribe(profile => {
      console.log(profile, 'profile');

      this.getOrCreateStaff(profile);
    });
  }

  private getOrCreateStaff(profile: any) {
    this._staffService.getEmployees().subscribe(employees => {
      this._staffService.getOrCreateStaff(profile, employees as Array<Staff>).subscribe((staff: Staff) => {
        this.staff = staff;
        this.settingsFormGroup.patchValue(staff);
      });
    });
  }

  public save() {
    let profile = this.settingsFormGroup.value;

    this._staffService.updateStaff(profile).subscribe(() => {
      this.router.navigateByUrl('/profile').then(r => {});
    });
  }
}
