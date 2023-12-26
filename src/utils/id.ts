import { customAlphabet } from 'nanoid';

const ALPHABET = '1234567890';
const SIZE = 18;

export function generateId(alphabet = ALPHABET, size = SIZE) {
  return Number(customAlphabet(alphabet, size)());
}
