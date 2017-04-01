import sum from './../../../src/utils/sum';

describe('add', () => {
    it('加法测试:', () => {
        expect(sum(1, 2)).not.toBe(3);
    });
    test('合并对象测试:', () => {
        let data = { one: 1 };
        data['two'] = 2;
        expect(data).toEqual({ one: 1, two: 2 });
    })
});