const assert = require('assert');
const { test } = require('node:test');

const Calculator = require('../src/calculator');

// TODO: write your test cases here to kill mutants
test('Same month, valid input', () => {
    assert.strictEqual(Calculator.main(3, 5, 3, 10, 2024), 5);
});

test('Cross month, non-leap year', () => {
    assert.strictEqual(Calculator.main(1, 20, 2, 5, 2023), 16); // Jan:11 + Feb:5
});

test('Cross month, leap year', () => {
    assert.strictEqual(Calculator.main(2, 20, 3, 1, 2024), 10); // Feb:9 + Mar:1
});

// ✅ 合法案例：跨多月
test('Cross multiple months', () => {
    assert.strictEqual(Calculator.main(1, 1, 4, 1, 2021), 90); // Jan:31 + Feb:28 + Mar:31
});
  
// ❌ month1 無效
test('Invalid month1 < 1', () => {
    assert.throws(() => Calculator.main(0, 10, 3, 10, 2024), /invalid month1/);
});
  
test('Invalid month1 > 12', () => {
    assert.throws(() => Calculator.main(13, 10, 3, 10, 2024), /invalid month1/);
});
  
// ❌ month2 無效
test('Invalid month2 < 1', () => {
    assert.throws(() => Calculator.main(3, 10, 0, 10, 2024), /invalid month2/);
});
  
test('Invalid month2 > 12', () => {
    assert.throws(() => Calculator.main(3, 10, 13, 10, 2024), /invalid month2/);
});

// ❌ day1 無效
test('Invalid day1 < 1', () => {
    assert.throws(() => Calculator.main(3, 0, 4, 10, 2024), /invalid day1/);
});

test('Invalid day1 > 31', () => {
    assert.throws(() => Calculator.main(3, 32, 4, 10, 2024), /invalid day1/);
});

// ❌ day2 無效
test('Invalid day2 < 1', () => {
    assert.throws(() => Calculator.main(3, 10, 4, 0, 2024), /invalid day2/);
});

test('Invalid day2 > 31', () => {
    assert.throws(() => Calculator.main(3, 10, 4, 32, 2024), /invalid day2/);
});

// ❌ year 無效
test('Invalid year < 1', () => {
    assert.throws(() => Calculator.main(3, 10, 4, 10, 0), /invalid year/);
});

test('Invalid year > 10000', () => {
    assert.throws(() => Calculator.main(3, 10, 4, 10, 10001), /invalid year/);
});

// ❌ month1 > month2
test('month1 > month2', () => {
    assert.throws(() => Calculator.main(7, 10, 5, 10, 2024), /month1 must be less than month2/);
});

// ❌ month1 == month2, but day1 > day2
test('month1 == month2, day1 > day2', () => {
    assert.throws(() => Calculator.main(5, 20, 5, 10, 2024), /day1 must be less than day2/);
});

// 額外的測試案例來提高 mutation score

// 1. 邊界值測試 - 同月同日（差距為0）
test('Same month, same day (difference is 0)', () => {
    assert.strictEqual(Calculator.main(5, 15, 5, 15, 2024), 0);
});

// 2. 邊界值測試 - 相鄰日期
test('Same month, consecutive days', () => {
    assert.strictEqual(Calculator.main(6, 10, 6, 11, 2024), 1);
});

// 3. 月份邊界測試 - 1月到2月
test('January to February non-leap year', () => {
    assert.strictEqual(Calculator.main(1, 31, 2, 1, 2023), 1);
});

// 4. 月份邊界測試 - 1月到2月（閏年）
test('January to February leap year', () => {
    assert.strictEqual(Calculator.main(1, 31, 2, 1, 2024), 1);
});

// 5. 測試2月底到3月初（非閏年）
test('End of February to March non-leap year', () => {
    assert.strictEqual(Calculator.main(2, 28, 3, 1, 2023), 1);
});

// 6. 測試2月底到3月初（閏年）
test('End of February to March leap year', () => {
    assert.strictEqual(Calculator.main(2, 29, 3, 1, 2024), 1);
});

// 7. 年度邊界測試
test('Year boundary values', () => {
    assert.strictEqual(Calculator.main(1, 1, 1, 2, 1), 1); // 最小年份
    assert.strictEqual(Calculator.main(1, 1, 1, 2, 10000), 1); // 最大年份
});

// 8. 月份邊界測試
test('Month boundary values', () => {
    assert.strictEqual(Calculator.main(1, 1, 1, 2, 2024), 1); // 最小月份
    assert.strictEqual(Calculator.main(12, 1, 12, 2, 2024), 1); // 最大月份
});

// 9. 日期邊界測試
test('Day boundary values', () => {
    assert.strictEqual(Calculator.main(1, 1, 1, 2, 2024), 1); // 最小日期
    assert.strictEqual(Calculator.main(1, 31, 2, 1, 2024), 1); // 最大日期
});

// 10. 跨年測試（雖然程式碼沒有處理，但測試邊界）
test('Cross year boundary in same year', () => {
    assert.strictEqual(Calculator.main(1, 1, 12, 31, 2024), 365); // 閏年整年
    assert.strictEqual(Calculator.main(1, 1, 12, 31, 2023), 364); // 非閏年整年
});

// 11. 閏年特殊測試 - 測試各種閏年條件
test('Leap year edge cases', () => {
    // 測試能被4整除但不能被100整除的年份
    assert.strictEqual(Calculator.main(2, 1, 3, 1, 2020), 29); // 2020是閏年
    
    // 測試能被100整除但不能被400整除的年份
    assert.strictEqual(Calculator.main(2, 1, 3, 1, 1900), 28); // 1900不是閏年
    
    // 測試能被400整除的年份
    assert.strictEqual(Calculator.main(2, 1, 3, 1, 2000), 29); // 2000是閏年
});

// 12. 各月份天數測試
test('Different months with different days', () => {
    // 31天的月份
    assert.strictEqual(Calculator.main(1, 1, 2, 1, 2023), 31);
    assert.strictEqual(Calculator.main(3, 1, 4, 1, 2023), 31);
    assert.strictEqual(Calculator.main(5, 1, 6, 1, 2023), 31);
    assert.strictEqual(Calculator.main(7, 1, 8, 1, 2023), 31);
    assert.strictEqual(Calculator.main(8, 1, 9, 1, 2023), 31);
    assert.strictEqual(Calculator.main(10, 1, 11, 1, 2023), 31);
    assert.strictEqual(Calculator.main(12, 1, 12, 31, 2023), 30);
    
    // 30天的月份
    assert.strictEqual(Calculator.main(4, 1, 5, 1, 2023), 30);
    assert.strictEqual(Calculator.main(6, 1, 7, 1, 2023), 30);
    assert.strictEqual(Calculator.main(9, 1, 10, 1, 2023), 30);
    assert.strictEqual(Calculator.main(11, 1, 12, 1, 2023), 30);
});

// 13. 跨多個月份的詳細測試
test('Cross multiple months detailed', () => {
    // 跨3個月
    assert.strictEqual(Calculator.main(1, 15, 4, 10, 2023), 85); // (31-15) + 28 + 31 + 10
    
    // 跨6個月
    assert.strictEqual(Calculator.main(1, 1, 7, 1, 2023), 181); // 上半年天數
});

// 14. 同月邊界日期測試
test('Same month boundary days', () => {
    assert.strictEqual(Calculator.main(1, 1, 1, 31, 2023), 30);
    assert.strictEqual(Calculator.main(2, 1, 2, 28, 2023), 27); // 非閏年2月
    assert.strictEqual(Calculator.main(2, 1, 2, 29, 2024), 28); // 閏年2月
    assert.strictEqual(Calculator.main(4, 1, 4, 30, 2023), 29); // 30天月份
});

// 15. 驗證錯誤條件的邊界
test('Error boundary conditions', () => {
    // 測試 month1 == month2 但 day1 == day2 的情況（應該返回0，不應該報錯）
    assert.strictEqual(Calculator.main(5, 15, 5, 15, 2024), 0);
    
    // 測試 month1 == month2 且 day1 剛好比 day2 小1
    assert.strictEqual(Calculator.main(5, 14, 5, 15, 2024), 1);
});
