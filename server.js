// server.js

console.log(`Your port is ${process.env.PORT}`); // undefined
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.PORT}`); // 8626
console.log(`Your API_KEY is ${process.env.API_KEY}`); // 8626
