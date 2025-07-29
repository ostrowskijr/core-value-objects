import { Password } from './../src/core/password.vo';

describe('Password Value Object', () => {

  it('should create a valid password', () => {
    const password = new Password('123456');
    expect(password.getValue()).toBe('123456');
  });

  it('should throw a invalid password', () => {
    expect(() => new Password('12345')).toThrow('A senha deve conter 6 digítos.');
  });

  it('should validate password with options', () => {
    const options = { numberOfDigits: 10, numberOfSpecialCharacters: 1, numberOfUppercase: 1 };
    const password = new Password('Abc123@123', options);
    expect(password.getValue()).toBe('Abc123@123');
  });
  
  it('should validate password with options', () => {
    const options = { numberOfDigits: 10, numberOfSpecialCharacters: 1, numberOfUppercase: 1 };
    expect(() => new Password('1', options)).toThrow();
  });

  it('should throw error for insufficient digits', () => {
    const options = { numberOfDigits: 3 };
    expect(() => new Password('ab', options)).toThrow('A senha deve conter 3 digítos.');
  });
  it('should throw error for insufficient special characters', () => {
    const options = { numberOfSpecialCharacters: 2 };
    expect(() => new Password('abc123', options)).toThrow('A senha deve conter 2 caracteres especiais.');
  });
  it('should throw error for insufficient uppercase characters', () => {
    const options = { numberOfUppercase: 2 };
    expect(() => new Password('abc!@#', options)).toThrow('A senha deve conter 2 caracteres maiúsculos.');
  });
  it('should return true for equal passwords', () => {
    const password1 = new Password('123456');
    const password2 = new Password('123456');
    expect(password1.equals(password2)).toBe(true);
  });
});