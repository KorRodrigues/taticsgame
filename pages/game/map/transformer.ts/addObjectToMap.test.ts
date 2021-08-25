import { expect, fail } from 'chai';
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

it('addObjectToMap add an object to a position that already have an object should fail', () => {
  const newMapWithObject = addObjectToMap(basicMap, { name: 'Player', group: 'ally', blockPass: true, keyReference: '1' }, 2, 1)
  expect(() => (
    addObjectToMap(
      newMapWithObject,
      { name: 'Player', group: 'ally', blockPass: true, keyReference: '1' }
      , 2, 1)
    )).to.throw('Position is not empty');
})

it('addObjectToMap add an object to a position that already have an object should fail', () => {
  expect(() => (
    addObjectToMap(
      basicMap,
      { name: 'Player', group: 'ally', blockPass: true, keyReference: '1' }
      , 0, -1)
    )).to.throw('Position does´t exist');
  expect(() => (
    addObjectToMap(
      basicMap,
      { name: 'Player', group: 'ally', blockPass: true, keyReference: '1' }
      , -1, 0)
    )).to.throw('Position does´t exist');
  expect(() => (
    addObjectToMap(
      basicMap,
      { name: 'Player', group: 'ally', blockPass: true, keyReference: '1' }
      , -1, -1)
    )).to.throw('Position does´t exist');
  expect(() => (
    addObjectToMap(
      basicMap,
      { name: 'Player', group: 'ally', blockPass: true, keyReference: '1' }
      , 0, 5)
    )).to.throw('Position does´t exist');
  expect(() => (
    addObjectToMap(
      basicMap,
      { name: 'Player', group: 'ally', blockPass: true, keyReference: '1' }
      , 5, 0)
    )).to.throw('Position does´t exist');
  expect(() => (
    addObjectToMap(
      basicMap,
      { name: 'Player', group: 'ally', blockPass: true, keyReference: '1' }
      , 5, 5)
    )).to.throw('Position does´t exist');
})


// TODO
// fail when try to add an object to a position that is out of the map
// 