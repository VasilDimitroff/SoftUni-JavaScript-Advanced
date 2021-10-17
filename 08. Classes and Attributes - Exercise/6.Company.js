class Company{
    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){
        let arrayInfo = [name, salary, position, department];
        if (arrayInfo.some(x => x === null || x === undefined || x == '')) {
            throw new Error('Invalid input!');
        }

        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        if (this.departments[department] == undefined) {
            this.departments[department] = [];
        }

        let employee = {
            name: name,
            salary: salary,
            position: position,
            department: department,
        };

        this.departments[department].push(employee);
        return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;
    }

    bestDepartment(){
        
        let maxAverageSalary = -1;
        let bestDepartmentName = '';


        Object.entries(this.departments).forEach(x => {
            let sumSalary = 0;
            let currentAverageSalary = 0;

            for (let j = 0; j < x.length; j++) {
                const currentEmployee = x[j];
                sumSalary += currentEmployee.salary;  
            }

            currentAverageSalary = sumSalary / x.length;

            if (maxAverageSalary < currentAverageSalary) {
                maxAverageSalary = currentAverageSalary;
                bestDepartmentName = x;
               
            }
        });

        return;
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());