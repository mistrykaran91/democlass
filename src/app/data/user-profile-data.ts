import { Gender } from '../enums/gender.enum';
import { UserProfile } from '../interfaces/user-profile.interface';

export class UserProfileData {
  static userProfiles: UserProfile[] = [
    {
      id: 1,
      firstName: 'Rajesh',
      lastName: 'Jakotiya',
      email: 'r@r.com',
      password: '1234',
      mobile: 'mobile',
      gender: Gender.Male,
      dob: new Date(1991, 1, 25),
      contactDetails: {
        addressLine1: 'addressLine1',
        addressLine2: 'addressLine2',
        landmark: 'landmark',
        city: 'city',
        state: 'MAH',
        country: 'India',
        pincode: '401101'
      },
      branchId: 1,
      displayPhoto: null,
      profileDescription: `Hi, I am Rajesh Jakotiya. How are you doing.`,
      roleId: 1
    }
  ];
}
