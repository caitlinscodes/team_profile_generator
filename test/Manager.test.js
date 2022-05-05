const Manager = require('../lib/Manager');
const manager = new Manager('Caitlin Stevenson', 'caitlinscodes@gmail.com', '1', '13');

describe('Manager', () => {
  describe('name', () => {
    it('should retrieve name', () => {
      expect(manager.name).toEqual('Caitlin Stevenson');
    });
  });

  describe('email', () => {
    it('should retrieve email', () => {
      expect(manager.email).toEqual('caitlinscodes@gmail.com');
    });
  });

  describe('id', () => {
    it('should retrieve id', () => {
      expect(manager.id).toEqual('1');
    });
  });

  describe('officeNumber', () => {
    it('should retrieve office number', () => {
      expect(manager.officeNumber).toEqual('13');
    });
  });

  describe('getName', () => {
    it('should retrieve name', () => {
      expect(manager.getName()).toEqual('Caitlin Stevenson');
    });
  });

  describe('getEmail', () => {
    it('should retrieve email', () => {
      expect(manager.getEmail()).toEqual('caitlinscodes@gmail.com');
    });
  });

  describe('getId', () => {
    it('should retrieve id', () => {
      expect(manager.getId()).toEqual('1');
    });
  });

  describe('getOfficeNumber', () => {
    it('should retrieve office number', () => {
      expect(manager.getOfficeNumber()).toEqual('13');
    });
  });

  describe('getRole', () => {
    it('should retrieve role', () => {
      expect(manager.getRole()).toEqual('Manager');
    });
  });
})