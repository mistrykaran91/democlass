import { Status } from '../types/status.type';

export class Course {
  id: number;
  name: string;
  displayName: string;

  code: string;
  duration: {
    year: number;
    month: number;
  };
  branchId: number;
  fees: number;
  tax: number;
  status: Status;
  subjectId: number[];
  university: string;
  avatar: any;
  description: string;
  summary: string;
}
