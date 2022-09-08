import {Office} from "./office.interface";

export interface Staff {
  id: number;
  name: string;
  jobTitle: string;
  picture: string;
  email: string;
  phone: string;
  gender: string;
  building: string;
  streetAddress: string;
  postcode: string;
  city: string;
  country: string;
  officeId: number;
  office: Office;
}
