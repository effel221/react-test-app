import reducer, { setSearchValue } from '../searchStore'



test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(
    { searchValue: '' })
})

test('should change searchValue value', () => {
  const previousState = {}
  expect(reducer(previousState, setSearchValue('new value'))).toEqual(
    { searchValue: 'new value' }
  )
})
