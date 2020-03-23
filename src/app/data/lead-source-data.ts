import { Status } from '@enums/status.enum';
import { LeadSource } from '@interfaces/lead-source.interface';

export class LeadSourcesData {
  static leadSources : LeadSource[] = [
    {
      id: 1,
      name: 'Just Dial',
      displayOrder: 1,
      status: Status.Active
    }
  ];
}
