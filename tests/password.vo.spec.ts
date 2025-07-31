import { Password } from '../src/core/password.vo';

describe('Password Value Object', () => {
  it('should create a valid password with default options', () => {
    const password = new Password('123456');
    expect(password.getValue()).toBe('123456');
  });

  it('should throw an error for a password that is too short', () => {
    expect(() => new Password('12345')).toThrow('A senha deve conter no mínimo 6 dígitos.');
  });

  it('should create a valid password with custom options', () => {
    const options = { numberOfDigits: 8, numberOfSpecialCharacters: 2, numberOfUppercase: 2 };
    const password = new Password('Abc@123@Def', options);
    expect(password.getValue()).toBe('Abc@123@Def');
  });

  it('should throw an error for insufficient special characters', () => {
    const options = { numberOfSpecialCharacters: 2 };
    expect(() => new Password('ValidPass1!', options)).toThrow('A senha deve conter 2 caracteres especiais.');
  });

  it('should throw an error for insufficient uppercase characters', () => {
    const options = { numberOfUppercase: 2 };
    expect(() => new Password('Validpass1!', options)).toThrow('A senha deve conter 2 caracteres maiúsculos.');
  });

  it('should return true for equal passwords', () => {
    const passwordA = new Password('MySecurePass123!');
    const passwordB = new Password('MySecurePass123!');
    expect(passwordA.equals(passwordB)).toBe(true);
  });

  it('should return false for different passwords', () => {
    const passwordA = new Password('MySecurePass123!');
    const passwordB = new Password('AnotherPass456@');
    expect(passwordA.equals(passwordB)).toBe(false);
  });
});
