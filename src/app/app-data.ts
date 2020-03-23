import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserProfileData } from './data/user-profile-data';
import { CourseData } from './data/course-data';
import { SubjectData } from './data/subject-data';
import { UniversityData } from './data/university-data';
import { LeadSourcesData } from './data/lead-source-data';
import { ExpenseHeadersData } from './data/expense-header-data';
import { IncomeHeadersData } from './data/income-header-data';

export class AppData implements InMemoryDbService {
  createDb() {
    const userProfiles = UserProfileData.userProfiles;
    const courses = CourseData.courses;
    const subjects = SubjectData.subjects;
    const universities = UniversityData.universities;
    const leadSources = LeadSourcesData.leadSources;
    const expenseHeaders = ExpenseHeadersData.expenseHeaders;
    const incomeHeaders = IncomeHeadersData.incomeHeaders;

    return {
      userProfiles,
      courses,
      subjects,
      universities,
      leadSources,
      expenseHeaders,
      incomeHeaders
    };
  }
}
