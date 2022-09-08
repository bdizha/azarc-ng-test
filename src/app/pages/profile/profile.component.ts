import {Component, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {Observable, of} from "rxjs";
import {Staff} from "../../models/staff.interface";
import {StaffService} from "../../services/staff.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  staff: Observable<Staff>;

  constructor(public auth: AuthService, private _staffService: StaffService) {
  }

  ngOnInit() {
    this.auth.user$.subscribe(profile => {
      this.getOrCreateStaff(profile);
    });
  }

  private getOrCreateStaff(profile: any) {
    this._staffService.getEmployees().subscribe(employees => {
      this._staffService.getOrCreateStaff(profile, employees as Array<Staff>).subscribe((staff: Staff) => {
        this.staff = of(staff);
      });
    });
  }
}
