import { Gender } from '../enums/gender.enum';

export interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
  gender: Gender;
  dob: Date;
  contactDetails: {
    addressLine1: string;
    addressLine2: string;
    landmark: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
  roleId: number;
  branchId: number;
  displayPhoto: any;
  profileDescription: string;
}
