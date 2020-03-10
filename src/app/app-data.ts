import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserProfileData } from './data/user-profile-data';
import { CourseData } from './data/course-data';
import { SubjectData } from './data/subject-data';

export class AppData implements InMemoryDbService {
  createDb() {
    const userProfiles = UserProfileData.userProfiles;
    const courses = CourseData.courses;
    const subjects = SubjectData.subjects;
    return {
      userProfiles,
      courses,
      subjects
    };
  }
}
