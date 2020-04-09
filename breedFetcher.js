const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('Error :', error);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("I couldn't find that breed!");
  } else {
    const description = data[0].description;
    console.log(description);
  }
  
});