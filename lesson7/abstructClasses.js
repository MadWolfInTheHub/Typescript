// Abstruct Classes
/* class Employee {
  public id: number;
  public name: string;

  printDetails() {
    console.log(Number(value: `id: ${this.id}, name ${this.name}`));
  }
}

class Manager {
  public id: number;
  public name: string;
  public Employee: Employee[];
  printDetails() {
    console.log(`id: ${this.id}, name ${this.name}, employeeCount: ${this.Employee.length}`)
  }
} */
class AbstructEmployee {
    printDetails() {
        console.log(this.getDetails());
    }
}
class NewEmployee extends AbstructEmployee {
    getDetails() {
        return `id ${this.id}, name: ${this.name}`;
    }
}
class NewManager extends NewEmployee {
    getDetails() {
        return super.getDetails() + `, Employee Count ${this.Employees.length}`;
    }
}
let employee = new NewEmployee();
employee.id = 1;
employee.name = "Serhii";
employee.printDetails();
let manager = new NewManager();
manager.id = 2;
manager.name = 'Serhii Kryvenko';
manager.Employees = new Array();
manager.printDetails();
