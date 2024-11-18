const express = require('express');
const fs = require('fs');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3001;

app.use(cors());

async function fetchAndSaveData() {
  try {
    console.log('Starting to read input files...');
    const rolls = fs.readFileSync('roll.txt', 'utf-8').split('\n').map(line => line.trim()).filter(Boolean);
    const names = fs.readFileSync('name.txt', 'utf-8').split('\n').map(line => line.trim()).filter(Boolean);
    const urls = fs.readFileSync('urls.txt', 'utf-8').split('\n').map(line => line.trim()).filter(Boolean);
    const sections = fs.readFileSync('sections.txt', 'utf-8').split('\n').map(line => line.trim()).filter(Boolean);

    if (rolls.length !== names.length || names.length !== urls.length || names.length !== sections.length) {
      console.error('Error: The number of rolls, names, URLs, and sections do not match.');
      return;
    }

    console.log('Input files read successfully.');
    const combinedData = [];

    for (let i = 0; i < rolls.length; i++) {
      const roll = rolls[i];
      const name = names[i];
      const url = urls[i];
      const section = sections[i];
      let studentData = { roll, name, url, section };

      console.log(`Processing data for roll number: ${roll}, name: ${name}, section: ${section}`);

      // Check if URL is a LeetCode URL
      if (url.startsWith('https://leetcode.com/u/')) {
        var username = url.split('/u/')[1];
        if(username.charAt(username.length-1) == '/') username = username.substring(0, username.length-1);
        console.log(`Fetching data for LeetCode username: ${username}`);

        try {
          const response = await axios.get(`https://leetcodeapi-v1.vercel.app/${username}`);
          const data = response.data;
          if (data && data[username]) {
            studentData = {
              ...studentData,
              username,
              totalSolved: data[username].submitStatsGlobal.acSubmissionNum[0].count || 0,
              easySolved: data[username].submitStatsGlobal.acSubmissionNum[1].count || 0,
              mediumSolved: data[username].submitStatsGlobal.acSubmissionNum[2].count || 0,
              hardSolved: data[username].submitStatsGlobal.acSubmissionNum[3].count || 0,
            };
            console.log(`Data for ${username} fetched and processed successfully.`);
          } else {
            console.log(`No data found for ${username}`);
          }
        } catch (error) {
          console.error(`Error fetching data for ${username}:`, error);
        }
      } else {
        console.log(`URL for ${name} is not a LeetCode profile. Skipping API call.`);
        studentData.info = 'No LeetCode data available';
      }
      combinedData.push(studentData);
    }

    // Sort the data by totalSolved in descending order, treating 'NA' or invalid values as 0
    combinedData.sort((a, b) => {
      const aTotalSolved = isNaN(a.totalSolved) ? 0 : a.totalSolved;
      const bTotalSolved = isNaN(b.totalSolved) ? 0 : b.totalSolved;
      return bTotalSolved - aTotalSolved;
    });

    fs.writeFileSync('data.json', JSON.stringify(combinedData, null, 2));
    console.log('Data saved to data.json successfully.');
  } catch (error) {
    console.error('Error processing data:', error);
  }
}

app.get('/data', (req, res) => {
  res.sendFile(__dirname + '/data.json');
});

// Initial data fetch and periodic refresh every hour
fetchAndSaveData();
setInterval(fetchAndSaveData, 60 * 60 * 1000);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});