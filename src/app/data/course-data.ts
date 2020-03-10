import { Course } from '../models/course.model';

export class CourseData {
  static courses: Course[] = [
    {
      id: 1,
      name: 'MSCIT',
      code: 'MS',
      fees: 10000,
      subjectId: [1, 2, 3, 4],
      description: 'MSC IT',
      avatar: null,
      displayName: 'MSC-IT',
      duration: {
        month: 3,
        year: 0
      },
      status: 'Active',
      summary: 'Summary',
      tax: 18,
      university: 'Mumbai University',
      branchId: 1
    },
    {
      id: 2,
      name: 'Animation',
      code: 'ANIM',
      fees: 100000,
      subjectId: [1, 2, 3, 4],
      description: 'Animation',
      avatar: null,
      displayName: 'Animation',
      duration: {
        month: 0,
        year: 2
      },
      status: 'Active',
      summary: 'Summary',
      tax: 18,
      university: 'Mumbai University',
      branchId: 1
    },
    {
      id: 3,
      name: 'Personality Development',
      code: 'GROOM',
      fees: 10000,
      subjectId: [1, 2, 3, 4],
      description: 'Personality Development',
      avatar: null,
      displayName: 'Personality Development',
      duration: {
        month: 3,
        year: 0
      },
      status: 'Active',
      summary: 'Summary',
      tax: 18,
      university: 'Mumbai University',
      branchId: 1
    },
    {
      id: 4,
      name: 'SYJC',
      code: 'SYJC',
      fees: 10000,
      subjectId: [1, 2, 3, 4],
      description: 'SYJC',
      avatar: null,
      displayName: 'SYJC',
      duration: {
        month: 3,
        year: 0
      },
      status: 'Active',
      summary: 'Summary',
      tax: 18,
      university: 'Mumbai University',
      branchId: 1
    },
    {
      id: 5,
      name: 'T.Y. B.com',
      code: 'TYBCOM',
      fees: 10000,
      subjectId: [1, 2, 3, 4],
      description: 'TYBCOM',
      avatar: null,
      displayName: 'T.Y. B.com',
      duration: {
        month: 3,
        year: 0
      },
      status: 'Active',
      summary: 'Summary',
      tax: 18,
      university: 'Mumbai University',
      branchId: 1
    }
  ];
}
