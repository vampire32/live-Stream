const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();
const PORT = 3000;
app.use(cors());
app.get('/proxy', async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Failed to fetch data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
