import { expect, test } from 'bun:test';
import { hello } from '../kata1.js'; 

test('should return expected result for input 1', () => {
    const result = hello("world");
    const expected = "Hello world";
    expect(result).toBe(expected);
});