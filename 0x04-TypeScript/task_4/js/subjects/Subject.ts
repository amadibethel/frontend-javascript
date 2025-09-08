import { Teacher } from './Teacher';

export abstract class Subject {
  teacher!: Teacher; // definite assignment assertion

  abstract getRequirements(): string;
  abstract getAvailableTeacher(): string;
}
