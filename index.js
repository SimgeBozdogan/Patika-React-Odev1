import getData from './app.js';

getData(1)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('Error during data retrieval:', error.message);
  });