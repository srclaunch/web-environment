import test from 'ava';
import { getEnvironment } from '../index.js';



test('returns development environment', (t) => {
  global.window = {
    // @ts-expect-error
    location: {
      hostname: 'localhost',
    },
  };

  const environment = getEnvironment();

  t.is(environment.id, 'dev');
})

test('returns production environment', (t) => {
  global.window = {
    // @ts-expect-error
    location: {
      hostname: 'applab.com',
    },
  };

  const environment = getEnvironment();

  t.is(environment.id, 'production');
})

// test('bar is being tested', async (t) => {
//   const bar = Promise.resolve('bar');
//   t.is(await bar, 'bar');
// });
// test('sum of 2 numbers', t => {
//   t.plan(2);
//   t.pass('this assertion passed');
//   t.is(sum(1, 2), 3);
// })