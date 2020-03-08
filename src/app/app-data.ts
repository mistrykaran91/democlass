import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserProfileData } from './data/user-profile-data';

export class AppData implements InMemoryDbService {
  createDb() {
    const userProfiles = UserProfileData.userProfiles;

    return {
      userProfiles
    };
  }
}
