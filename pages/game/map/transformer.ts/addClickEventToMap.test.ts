import { expect } from 'chai';
import basicMap, { emptyFloor } from '../basicMap';
import biggerBasicMap from '../biggerBasicMap';
import addClickEventToMap from './addClickEventToMap';
import addObjectToMap from './addObjectToMap';

it('addClickEventToMap should be a function', () => {
  expect(addClickEventToMap).to.be.a('function')
})

it('addClickEventToMap with 0 range and "any" filter', () => {
  const fnc = () => {}
  expect(
    addClickEventToMap(basicMap, 1, 1, 0, fnc)
  ).to.deep.equal({
    name: 'map',
    tiles: [
      [emptyFloor, emptyFloor, emptyFloor],
      [
        emptyFloor, 
        { type: 'floor', objectIn: undefined, clickEvent: fnc},
        emptyFloor
      ],
      [emptyFloor, emptyFloor, emptyFloor],
    ]
  })
})

it('addClickEventToMap with 0 range and "empty" filter', () => {
  const fnc = () => {}
  expect(
    addClickEventToMap(basicMap, 1, 1, 0, fnc, 'empty')
  ).to.deep.equal({
    name: 'map',
    tiles: [
      [emptyFloor, emptyFloor, emptyFloor],
      [
        emptyFloor, 
        { type: 'floor', objectIn: undefined, clickEvent: fnc},
        emptyFloor
      ],
      [emptyFloor, emptyFloor, emptyFloor],
    ]
  })

  const mapWithObject = addObjectToMap(
    basicMap,
    { name: 'Player', group: 'ally', blockPass: true, keyReference: '1' },
    1, 1
  )
  expect(
    addClickEventToMap(mapWithObject, 1, 1, 0, fnc, 'empty')
  ).to.deep.equal({
    name: 'map',
    tiles: [
      [emptyFloor, emptyFloor, emptyFloor],
      [
        emptyFloor,
        {
          type: 'floor',
          objectIn: {
            name: 'Player',
            group: 'ally',
            blockPass: true,
            keyReference: '1'
          },
          clickEvent: fnc,
        },
        emptyFloor
      ],
      [emptyFloor, emptyFloor, emptyFloor],
    ]
  })
})

it('addClickEventToMap with 0 range and custom filter', () => {
  const fnc = () => true
  const filterTrue = () => true
  expect(
    addClickEventToMap(basicMap, 1, 1, 0, fnc, filterTrue)
  ).to.deep.equal({
    name: 'map',
    tiles: [
      [emptyFloor, emptyFloor, emptyFloor],
      [
        emptyFloor, 
        { type: 'floor', objectIn: undefined, clickEvent: fnc},
        emptyFloor
      ],
      [emptyFloor, emptyFloor, emptyFloor],
    ]
  })
  
  const filterFalse = () => false
  expect(
    addClickEventToMap(basicMap, 1, 1, 0, fnc, filterFalse)
  ).to.deep.equal({
    name: 'map',
    tiles: [
      [emptyFloor, emptyFloor, emptyFloor],
      [
        emptyFloor, 
        { type: 'floor', objectIn: undefined, clickEvent: fnc},
        emptyFloor
      ],
      [emptyFloor, emptyFloor, emptyFloor],
    ]
  })
})

it('addClickEventToMap with 1 range and "any" filter', () => {
  const fnc = () => true
  const emptyFloorWithClickEvent = 
    { type: 'floor', objectIn: undefined, clickEvent: fnc}
  expect(
    addClickEventToMap(basicMap, 1, 1, 1, fnc)
  ).to.deep.equal({
    name: 'map',
    tiles: [
      [emptyFloor, emptyFloorWithClickEvent, emptyFloor],
      [
        emptyFloorWithClickEvent, 
        emptyFloorWithClickEvent,
        emptyFloorWithClickEvent
      ],
      [emptyFloor, emptyFloorWithClickEvent, emptyFloor],
    ]
  })
})

it('addClickEventToMap with 3 range and "any" filter', () => {
  const fnc = () => true
  const _I_ = 
    { type: 'floor', objectIn: undefined, clickEvent: fnc}
  const ___ = emptyFloor
  expect(
    addClickEventToMap(biggerBasicMap, 3, 3, 3, fnc)
  ).to.deep.equal({
    name: 'map',
    tiles: [
      [___, ___, ___, _I_, ___, ___, ___],
      [___, ___, _I_, _I_, _I_, ___, ___],
      [___, _I_, _I_, _I_, _I_, _I_, ___],
      [_I_, _I_, _I_, _I_, _I_, _I_, _I_],
      [___, _I_, _I_, _I_, _I_, _I_, ___],
      [___, ___, _I_, _I_, _I_, ___, ___],
      [___, ___, ___, _I_, ___, ___, ___],
    ]
  })
})