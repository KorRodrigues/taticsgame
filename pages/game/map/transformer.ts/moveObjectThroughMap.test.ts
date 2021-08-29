import { expect } from 'chai';
import basicMap from '../basicMap';
import addObjectToMap from './addObjectToMap';
import MoveObjectThroughMap from './MoveObjectThroughMap';

it('MoveObjectThroughMap should be a function', () => {
  expect(MoveObjectThroughMap).to.be.a('function')
})

it('addObjectToMap empty map receive a object at position 2/1', () => {
  const startPosition = addObjectToMap(
    basicMap,
    { name: 'Player', group: 'ally', blockPass: true, keyReference: '1' }
    , 1, 1)
  const expectedToBeEqual = addObjectToMap(
    basicMap,
    { name: 'Player', group: 'ally', blockPass: true, keyReference: '1' }
    , 2, 2)
  
  expect(
    MoveObjectThroughMap(
      startPosition,
      1, 1,
      2, 2)
  ).to.deep.equal(expectedToBeEqual)
})

it('MoveObjectThroughMap try to move an object but current position do not exist', () => {
  expect(() => (
    MoveObjectThroughMap(basicMap, 0, -1, 0, 0)
  )).to.throw('Current position does´t exist');
  expect(() => (
    MoveObjectThroughMap(basicMap, -1, 0, 0, 0)
  )).to.throw('Current position does´t exist');
  expect(() => (
    MoveObjectThroughMap(basicMap, -1, -1, 0, 0)
  )).to.throw('Current position does´t exist');
  expect(() => (
    MoveObjectThroughMap(basicMap, 0, 5, 0, 0)
  )).to.throw('Current position does´t exist');
  expect(() => (
    MoveObjectThroughMap(basicMap, 5, 0, 0, 0)
  )).to.throw('Current position does´t exist');
  expect(() => (
    MoveObjectThroughMap(basicMap, 5, 5, 0, 0)
  )).to.throw('Current position does´t exist');
})

it('MoveObjectThroughMap try to move an object but target position do not exist', () => {
  expect(() => (
    MoveObjectThroughMap(basicMap, 0, 0, 0, -1)
  )).to.throw('Target position does´t exist');
  expect(() => (
    MoveObjectThroughMap(basicMap, 0, 0, -1, 0)
  )).to.throw('Target position does´t exist');
  expect(() => (
    MoveObjectThroughMap(basicMap, 0, 0, -1, -1)
  )).to.throw('Target position does´t exist');
  expect(() => (
    MoveObjectThroughMap(basicMap, 0, 0, 0, 5)
  )).to.throw('Target position does´t exist');
  expect(() => (
    MoveObjectThroughMap(basicMap, 0, 0, 5, 0)
  )).to.throw('Target position does´t exist');
  expect(() => (
    MoveObjectThroughMap(basicMap, 0, 0, 5, 5)
  )).to.throw('Target position does´t exist');
})

it('MoveObjectThroughMap try to move an object but current position is empty', () => {
  expect(() => (
    MoveObjectThroughMap(basicMap, 1, 1, 2, 2)
  )).to.throw('Current position is empty');
})

it('MoveObjectThroughMap try to move an object but target position is NOT empty', () => {
  const mapV1 = addObjectToMap(
    basicMap,
    { name: 'Player', group: 'ally', blockPass: true, keyReference: '1' }
    , 1, 1)
  const map = addObjectToMap(
    mapV1,
    { name: 'Player', group: 'ally', blockPass: true, keyReference: '2' }
    , 2, 2)
  
  expect(() => (
    MoveObjectThroughMap(map, 1, 1, 2, 2)
  )).to.throw('Target position is not empty');
})