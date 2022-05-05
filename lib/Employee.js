
// Set up Employee Class
class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.id = Math.floor(Math.random() * 99) + 1;
  }

  // Call Methods
  getName() {
    return this.name;
  }
  
  getEmail() {
    return this.email;
  }

  getId() {
    return this.id;
  }
  
  getRole() {
    return 'Employee';
  }
  
}

module.exports = Employee;