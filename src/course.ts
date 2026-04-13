export class Course {
  name: string;
  label: string;
  year: number;
  description: string;

  constructor(name: string, label: string, year: number, description: string) {
    this.name = name;
    this.label = label;
    this.year = year;
    this.description = description;
  }
}