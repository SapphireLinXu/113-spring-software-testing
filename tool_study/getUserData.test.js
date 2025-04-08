// getUserData.test.js
const getUserData = require('./getUserData');
const fetchData = require('./fetchData');

// ✅ Mock fetchData 模組
jest.mock('./fetchData');

test('should return formatted user name', async () => {
  // 模擬 fetchData 回傳的資料
  fetchData.mockResolvedValue({ name: 'Alice' });

  const result = await getUserData(123);

  expect(result).toBe('User: Alice');
  expect(fetchData).toHaveBeenCalledWith(123);
});
