import { flattenObject } from './index';
describe('flattenObject', () => {
  it('should return same object if there no array property', () => {
    const a = { a: 123 }
    expect(flattenObject(a)).toEqual([a])
  })

  it('should return object with empty value when array is empty', () => {
    const a = { a: 123, b: [] }
    expect(flattenObject(a, '')).toEqual([{ a: 123, b: '' }])
  })

  it('should return 2  objects if there no array property', () => {
    const a = { a: 123, t: [1, 2] }
    expect(flattenObject(a)).toEqual([{ a: 123, t: 1 }, { a: 123, t: 2 }])
  })

  it('should return 6 objects if there no array property', () => {
    const a = { a: 123, t: [1, 2], v: [1, 2, 3] }
    expect(flattenObject(a).length).toEqual(6)
    expect(flattenObject(a)).toMatchSnapshot()
  })

  it('should return 6 objects if there no array property', () => {
    const a = { a: 123, t: [1, 2], v: [1, 2, 3], k: [9, 8, 7] }
    expect(flattenObject(a).length).toEqual(18)
    expect(flattenObject(a)).toMatchSnapshot()
  })
})
