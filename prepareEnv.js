const fs = require('fs');

const feeds = fs.readFileSync('feeds.json', {
  encoding: 'utf-8',
});
const json = JSON.parse(feeds);
const env = `NEXT_PUBLIC_FEEDS=${JSON.stringify(json)}`;

fs.writeFileSync('.env.local', env);
