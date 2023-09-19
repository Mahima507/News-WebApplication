// network call code...
/*
NEWS API Script:-
var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-09-18&' +
          'sortBy=popularity&' +
          'apiKey=5e799986fbba4269bab4326f27d32f2d';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })   
*/

    // HTTP/ HTTPS call
 import { URL } from '../utils/config.js';
 
 async function makeNetworkCall(){
    try{
  const response = await fetch(URL); // Block
  const object = await response.json(); // Block
   return object; // Wrap Promise    
}
// if we want that async code works like sync then we use await
    catch(err){
        console.log('Some Problem in API Call ',err);
        throw err;    
    }
}

export default makeNetworkCall;