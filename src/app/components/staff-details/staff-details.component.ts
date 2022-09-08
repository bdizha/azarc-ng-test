import {Component, Input, OnInit} from '@angular/core';
import {Staff} from "../../models/staff.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {
  constructor() {
  }

  @Input() staff: Observable<Staff>;

  ngOnInit() {
  }

}
