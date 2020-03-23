import { Status } from '@enums/status.enum';
import { ExpenseHeader } from '@interfaces/expense-header.interface';

export class ExpenseHeadersData {
  static expenseHeaders: ExpenseHeader[] = [
    {
      id: 1,
      name: 'Rent',
      displayOrder: 1,
      status: Status.Active
    }
  ];
}
