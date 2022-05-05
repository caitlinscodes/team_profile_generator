
const Employee = require('../lib/Employee');
const employee = new Employee('Caitlin Stevenson', 'caitlinscodes@gmail.com', '1');

describe('Employee', () => {
  describe('name', () => {
    it('should retrieve name', () => {
      expect(employee.name).toEqual('Caitlin Stevenson');
    });
  });

  describe('email', () => {
    it('should retrieve email', () => {
      expect(employee.email).toEqual('caitlinscodes@gmail.com');
    });
  });

  describe('id', () => {
    it('should retrieve id', () => {
      expect(employee.id).toEqual('1');
    });
  });

  describe('getName', () => {
    it('should retrieve name', () => {
      expect(employee.getName()).toEqual('Caitlin Stevenson');
    });
  });

  describe('getEmail', () => {
    it('should retrieve email', () => {
      expect(employee.getEmail()).toEqual('caitlinscodes@gmail.com');
    });
  });

  describe('getId', () => {
    it('should retrieve id', () => {
      expect(employee.getId()).toEqual('1');
    });
  });

  describe('getRole', () => {
    it('should retrieve role', () => {
      expect(employee.getRole()).toEqual('Employee');
    });
  });

})