// This file contains the test cases for the exampleKata implementation.

import { hello } from '../../src/kata/exampleKata';
import { test, expect, describe } from "bun:test";

describe('Example Kata Tests', () => {
    test('should return expected result for input 1', () => {
        expect(hello("1")).toBe('Hello, 1!');
    });
});