import reducer, { setSearchCache, setTotalPagesFetched } from '../fetchCacheStore'


test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(
    { searchCache: {}, totalPagesFetched: 100 })
})

test('should change searchCache value', () => {
  const previousState = {}
  const searchCacheMock = {
    'web-stars-1': {}
  }
  expect(reducer(previousState, setSearchCache(searchCacheMock))).toEqual(
    { searchCache: searchCacheMock }
  )
})

test('should change totalPagesFetchedq value', () => {
  const previousState = {}
  expect(reducer(previousState, setTotalPagesFetched(75))).toEqual(
    { totalPagesFetched: 75 }
  )
})

