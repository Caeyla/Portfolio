const sum = require('./sum');
// toBe for primitive values
test('2+3 equal 5', () => {
    const result = sum.sum(2, 3);
    const expected = 5;
    expect(result).toBe(expected);
});
// toEqual for objects
test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});
// for undefinded, null, and false,blank
test('null is falsy', () => {
    const n = '';
    expect(n).toBeFalsy();
})
// toBeTruthy for true
test('true is truthy', () => {
    const n = 1;
    expect(n).toBeTruthy();
});

test('throw error', () => {
    const input = 'input';
    expect(() => sum.input(input)).toThrow();
})

test('fetchData', (done) => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }
    sum.fetchData(callback);
})
test('fetchPromise', () => {
    expect(sum.fetchPromise()).resolves.toBe('peanut butter');
})
test('fetchPromise with reject', () => { 
    expect(sum.fetchPromise()).rejects.toThrow('error');
});