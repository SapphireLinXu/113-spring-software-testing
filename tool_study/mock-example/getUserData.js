// getUserData.js
const fetchData = require('./fetchData');

async function getUserData(userId) {
  const data = await fetchData(userId);
  return `User: ${data.name}`;
}

module.exports = getUserData;
