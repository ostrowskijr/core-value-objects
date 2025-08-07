import { UUID } from './../src/core/uuid.vo';

describe('UUID Value Object', () => {

  it('deve criar um UUID válido sem valor inicial', () => {
    const uuid = new UUID();
    expect(uuid.getValue()).toBeDefined();
    expect(UUID.validate(uuid.getValue())).toBe(true);
  });

  it('deve criar um UUID válido a partir de uma string', () => {
    const validUuid = 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6';
    const uuid = new UUID(validUuid);
    expect(uuid.getValue()).toBe(validUuid);
  });

  it('deve lançar um erro para um UUID inválido', () => {
    const invalidUuid = 'invalid-uuid';
    expect(() => new UUID(invalidUuid)).toThrow('UUID inválido.');
  });

  it('deve comparar dois UUIDs corretamente', () => {
    const uuid1 = new UUID();
    const uuid2 = new UUID(uuid1.getValue());
    const uuid3 = new UUID();

    expect(uuid1.equals(uuid2)).toBe(true);
    expect(uuid1.equals(uuid3)).toBe(false);
  });
});
