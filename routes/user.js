const express = require ('express');
const router = express.Router();
const https = require('https');

const options = {
  hostname: 'randomuser.me',
  port: 443,
  path: '/api/?inc=name,location,login',
  method: 'GET'
}

router.get('/', (req, res) => {
  let data = '';
           
  const request = https.request(options, response => {
    
    //console.log(`statusCode: ${res.statusCode}`);
  
    response.on('data', (chunk) => {
        data += chunk;
    });
  
    response.on('end', () => {
        
        console.log(data)

        let title = JSON.parse(data).results[0].name.title;
        let name = JSON.parse(data).results[0].name.first;
        let last = JSON.parse(data).results[0].name.last;
        let street_number = JSON.parse(data).results[0].location.street.number
        let street_name = JSON.parse(data).results[0].location.street.name;
        let city = JSON.parse(data).results[0].location.city;
        let state = JSON.parse(data).results[0].location.state;
        let country = JSON.parse(data).results[0].location.country;
        let user_name = JSON.parse(data).results[0].login.username;
        res.send(title + ' ' + name + ' ' + last + ' lives at ' + street_number + ' ' + street_name + ' in ' + city + ' ' + state + ' ' + country + '. Has logged in with username ' + user_name);        
        
      });
      
  });
  
  request.on('error', error => {
  console.error(error)
  })
  
  request.end()
  
  //console.log(data);
      
  
  });    
   
module.exports = router;




