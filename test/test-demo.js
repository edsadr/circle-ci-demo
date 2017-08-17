process.env.NODE_ENV = 'test';

//Require the dev-dependencies
const assert = require('assert');

//Our parent block
describe('Demo', () => {
  it('It should pass',function(){
    assert(Array.isArray('a,b,c'.split(',')));
  })
});
