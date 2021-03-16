let aggregators = require('./aggregators');
const { testCasesForData } = require('../test-utils');


describe('none', () => {
    testCasesForData([1, 2, 3, 4])('should return false if any value fulfils the predicate when given a(n) %s', (type, dataSource) => {
        const result = aggregators.none(x => x === 2)(dataSource);
        expect(result).toBeFalsy();
    });

    testCasesForData([1, 2, 3, 4])('should return true if no value fulfils the predicate when given a(n) %s', (type, dataSource) => {
        const result = aggregators.none(x => x === 5)(dataSource);
        expect(result).toBeTruthy();
    });

    testCasesForData([1, 2, 3, 4])('should return true if there are no values in the source when given a(n) %s', (type, dataSource) => {
        const result = aggregators.none(x => x === 5)(dataSource);
        expect(result).toBeTruthy();
    });
});
