import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Staff} from "../models/staff.interface";
import {Observable, of, Subscription, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {filter, mergeMap} from "rxjs/operators";
import {faker} from "@faker-js/faker";
import {Office} from "../models/office.interface";

// @ts-ignore
@Injectable({
  providedIn: 'root',
})
export class StaffService {
  apiURL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public getOffices(): Observable<Office[]> {
    return this.httpClient.get<Office[]>(this.apiURL + '/offices');
  }

  public getEmployees(): Observable<Staff[]> {
    return this.httpClient.get<Staff[]>(this.apiURL + '/staff?_expand=office');
  }

  public searchStaff(queryText): Observable<Staff[]> {
    return this.httpClient.get<Staff[]>(this.apiURL + '/staff?_expand=office&q=' + queryText);
  }

  public getStaff(id): Observable<Staff> {
    return this.httpClient.get<Staff>(this.apiURL + '/staff/' + id + '?_expand=office');
  }

  public getOrCreateStaff(profile: any, employees: Array<any>): Observable<Staff> {
    let staff = employees.find((item) => {
      return item.email === profile.email;
    });

    if (staff == undefined) {
      const newStaff = {
        name: profile.given_name + ' ' + profile.family_name,
        picture: profile.picture,
        email: profile.email,
        phone: faker.phone.number(),
        building: faker.address.buildingNumber(),
        streetAddress: faker.address.streetAddress(),
        postcode: faker.address.zipCode(),
        city: faker.address.city(),
        country: faker.address.country(),
        jobTitle: faker.name.jobTitle(),
        gender: faker.name.sex(),
        officeId: 1,
      };

      return this.createStaff(newStaff);
    }
    else {
      return of(staff);
    }
  }

  public createStaff(data): Observable<Staff> {
    return this.httpClient.post<Staff>(this.apiURL + '/staff?_expand=office', data);
  }

  public updateStaff(data) {
    return this.httpClient.patch(this.apiURL + '/staff/' + data.id, data);
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
