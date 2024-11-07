const express = require('express');
const mongoose = require('mongoose');
const redis =require('redis');
const PORT = 3000;
const app = express();
app.get('/', (req, res) => res.send('<h1> pleaseeee ziad Hello kTresmerge!1 hikkkkk ffffffffffff </h1>'));
app.listen(PORT, () => console.log(`App is up and running on port: ${PORT}`));
const REDIS_PORT= 6379;
const REDIS_HOST = 'redis';
const redisClient = redis.createClient({  
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});
    redisClient.on('error', err => console.log('Redis Client Error', err))
    redisClient.connect();
const DB_USER = 'root';
const DB_PASSWORD= 'example';
const DB_PORT = 27017;
const IP ='172.19.0.2';
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${IP}:${DB_PORT}`;
mongoose.connect(URI);
