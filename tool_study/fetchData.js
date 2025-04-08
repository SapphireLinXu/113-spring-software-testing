// fetchData.js
async function fetchData(userId) {
    // Simulate a network request to fetch user data
    const response = await fetch(`https://api.example.com/users/${userId}`);
    return response.json();
  }
  
  module.exports = fetchData;
  