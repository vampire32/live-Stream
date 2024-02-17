// lib/api.js
const base64 = require('base-64');

export async function  fetchChannelListings() {
  const username = process.env.API_USERNAME;
  const password = process.env.API_PASSWORD;
  const url = `${process.env.NEXT_PUBLIC_API_URL}`;

  const headers = new Headers();
  headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));

  console.log('Fetching channels from:', url); // Debugging URL
  console.log('Authorization:', headers.get('Authorization')); // Debugging headers

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch channel listings:", error);
    return [];
  }
}
