const Intern = require('../lib/Intern');
const intern = new Intern('Caitlin Stevenson', 'caitlinscodes@gmail.com', '1', 'Texas A&M');

describe('Intern', () => {
  describe('name', () => {
    it('should retrieve name', () => {
      expect(intern.name).toEqual('Caitlin Stevenson');
    });
  });

  describe('email', () => {
    it('should retrieve email', () => {
      expect(intern.email).toEqual('caitlinscodes@gmail.com');
    });
  });

  describe('id', () => {
    it('should retrieve id', () => {
      expect(intern.id).toEqual('1');
    });
  });

  describe('school', () => {
    it('should retrieve school', () => {
      expect(intern.school).toEqual('Texas A&M');
    });
  });

  describe('getName', () => {
    it('should retrieve name', () => {
      expect(intern.getName()).toEqual('Caitlin Stevenson');
    });
  });

  describe('getEmail', () => {
    it('should retrieve email', () => {
      expect(intern.getEmail()).toEqual('caitlinscodes@gmail.com');
    });
  });

  describe('getId', () => {
    it('should retrieve id', () => {
      expect(intern.getId()).toEqual('1');
    });
  });

  describe('getSchool', () => {
    it('should retrieve school', () => {
      expect(intern.getSchool()).toEqual('Texas A&M');
    });
  });

  describe('getRole', () => {
    it('should retrieve role', () => {
      expect(intern.getRole()).toEqual('Intern');
    });
  });
})