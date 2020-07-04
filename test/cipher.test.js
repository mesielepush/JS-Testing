import cipher from '../src/cipher';

test('some large code', () => {
  const result = cipher.encrypt("this is a test you don't suposse to read this", 1);
  expect(result).toBe('uijt;jt;b;uftu;zpv;epo(u;tvqpttf;up;sfbe;uijt');
});

test('keeping the same case', () => {
  const result = cipher.encrypt('PoPoTiTo', 15);
  expect(result).toBe('EdEdIxId');
});

test('encrypting punctuation', () => {
  const result = cipher.encrypt('._,-/', 666);
  expect(result).toBe('XUVWY');
});
