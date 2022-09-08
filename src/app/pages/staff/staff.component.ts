import {Component, OnInit} from '@angular/core';
import {Staff} from "../../models/staff.interface";
import {Router, ActivatedRoute} from '@angular/router';
import { StaffService } from '../../services/staff.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  staff: Observable<Staff>;

  constructor(private _activateRoute: ActivatedRoute,
              private _router: Router,
              private _staffService: StaffService) {
  }

  ngOnInit() {
    this._activateRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.staff = this._staffService.getStaff(id);
    });
  }
}
