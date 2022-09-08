import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Staff} from "../../models/staff.interface";
import {StaffService} from "../../services/staff.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  employees: Staff[];
  searchText: any;

  constructor(private http: HttpClient, private _staffService: StaffService) {
    this.employees = [];
    this.getEmployees();
  }

  ngOnInit() {
  }

  getEmployees() {
    this._staffService.getEmployees().subscribe((data: {}) => {
      this.employees = data as Staff[];
    });
  }

  search($event: any) {
    console.log('this.searchText');
    console.log(this.searchText);

    this._staffService.searchStaff(this.searchText).subscribe((data: {}) => {
      this.employees = data as Staff[];
    });
  }
}
