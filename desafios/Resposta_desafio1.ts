
/* Solução 1 */
let employee = {
    code: 10,
    name: 'John'
};

/* Solução 2 */
let employee1: {code: number, name: string} = {
    code: 10,
    name: 'John'
}

/* Soluções 3 e 4 */
interface Employee {
    code: number,
    name: string
}

let employee2: Employee = {
    code: 10,
    name: 'John'
}

const employeeObj = {} as Employee;
employeeObj.code = 10;
employeeObj.name = 'John'

const employeeObj1 : Employee = {
    code: 10,
    name: 'John'
}