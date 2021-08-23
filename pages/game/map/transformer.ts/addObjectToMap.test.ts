import { expect } from 'chai';
import addObjectToMap from './addObjectToMap';
import basicMap from '../basicMap';

it('addObjectToMap should be a function', () => {
  expect(addObjectToMap).to.be.a('function')
})

it('addObjectToMap empty map receive a object at position 2/1', () => {
  expect(
    addObjectToMap(
      basicMap,
      { name: 'Player', group: 'ally', blockPass: true, keyReference: '1' },
      2, 1)
  ).to.deep.equal({
    name: 'map',
    tiles: [
      [{ type: 'floor' }, { type: 'floor' }, { type: 'floor' }],
      [{ type: 'floor' }, { type: 'floor' }, { type: 'floor' }],
      [
        { type: 'floor' },
        { type: 'floor', objectIn: { name: 'Player', group: 'ally', blockPass: true, keyReference: '1' } },
        { type: 'floor'},
      ]
    ]
  })
})