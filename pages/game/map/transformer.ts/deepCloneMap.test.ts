import { expect } from 'chai';
import basicMap from '../basicMap';
import deepCloneMap from './deepCloneMap';

it('deepCloneMap should be a function', () => {
  expect(deepCloneMap).to.be.a('function')
})

it('deepCloneMap should return the same object properties', () => {
  expect(deepCloneMap(basicMap)).to.be.deep.equal(basicMap)
})

it('deepCloneMap returned map should not be the same object of map argument', () => {
  // Map object itself
  const newMap = deepCloneMap(basicMap);
  newMap.name = 'newMap';
  expect(newMap.name).not.to.be.equal(basicMap.name)

  // Tiles in map object
  newMap.tiles[0][0].type = 'wall';
  expect(
    newMap.tiles[0][0].type
  ).not.to.be.equal(
    basicMap.tiles[0][0].type
  )
})