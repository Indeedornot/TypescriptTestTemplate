import {returnHi} from '../index'

test('Should return hi', () => {
    const hi = returnHi();
    expect(hi).toEqual('Hi')
});