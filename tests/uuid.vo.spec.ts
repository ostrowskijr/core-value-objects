import { UUID } from './../src/core/uuid.vo';

describe('unit Test for my uuid value object', () => {

  it('should create a valid UUID', () => {
    const uuid = new UUID();
    expect(uuid.getValue()).toBeDefined();
  });

  it('should validate unequal UUIDs', () => {
    const uuid1 = new UUID();
    const uuid2 = new UUID();
    expect(uuid1.equals(uuid1)).toBe(true);
    expect(uuid1.equals(uuid2)).toBe(false);
  });
});