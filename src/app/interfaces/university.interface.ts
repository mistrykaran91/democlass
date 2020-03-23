import { Status } from '@enums/status.enum';

export interface University {
  id: number;
  name: string;
  displayOrder: number;
  status: Status;
  avatar: any;
}
