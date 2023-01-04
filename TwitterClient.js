const { TwitterApi } = require("twitter-api-v2");
const dotenv = require('dotenv');

dotenv.config({ path: './config.env'  });

const client =  new TwitterApi({
    appKey: process.env.TWITTER_APP_KEY,
    appSecret: process.env.TWITTER_APP_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const rwClient = client.readWrite;

module.exports = rwClient