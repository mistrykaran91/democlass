import { Status } from '@enums/status.enum';
import { IncomeHeader } from '@interfaces/income-header.interface';

export class IncomeHeadersData {
  static incomeHeaders: IncomeHeader[] = [
    {
      id: 1,
      name: 'Sales',
      displayOrder: 1,
      status: Status.Active
    }
  ];
}
