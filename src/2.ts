class Employee {
  public name: string;
  private department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    // Викликаємо конструктор батьківського класу Employee та збільшуємо salary на 10000
    super(name, department, salary + 10000);
  }
}

export {};