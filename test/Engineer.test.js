const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Caitlin Stevenson', 'caitlinscodes@gmail.com', '1', 'https://github.com/caitlinscodes');

describe('Engineer', () => {
  describe('name', () => {
    it('should retrieve name', () => {
      expect(engineer.name).toEqual('Caitlin Stevenson');
    });
  });

  describe('email', () => {
    it('should retrieve email', () => {
      expect(engineer.email).toEqual('caitlinscodes@gmail.com');
    });
  });

  describe('id', () => {
    it('should retrieve id', () => {
      expect(engineer.id).toEqual('1');
    });
  });

  describe('github', () => {
    it('should retrieve GitHub URL', () => {
      expect(engineer.github).toEqual('https://github.com/caitlinscodes');
    });
  });

  describe('getName', () => {
    it('should retrieve name', () => {
      expect(engineer.getName()).toEqual('Caitlin Stevenson');
    });
  });

  describe('getEmail', () => {
    it('should retrieve email', () => {
      expect(engineer.getEmail()).toEqual('caitlinscodes@gmail.com');
    });
  });

  describe('getId', () => {
    it('should retrieve id', () => {
      expect(engineer.getId()).toEqual('1');
    });
  });

  describe('getGithub', () => {
    it('should retrieve GitHub URL', () => {
      expect(engineer.getGithub()).toEqual('https://github.com/caitlinscodes');
    });
  });

  describe('getRole', () => {
    it('should retrieve role', () => {
      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
})