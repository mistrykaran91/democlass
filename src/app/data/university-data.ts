import { University } from '@interfaces/university.interface';
import { Status } from '@enums/status.enum';

export class UniversityData {
  static universities : University[] = [
    {
      id: 1,
      name: 'Mumbai',
      displayOrder: 1,
      status: Status.Active,
      avatar: null
    }
  ];
}
