const express = require ('express');
const router = express.Router();
/*const https = require('https');

const options = {
  hostname: 'randomuser.me',
  port: 443,
  path: '/api/?inc=name,location,login',
  method: 'GET'
}*/

router.get('/', (req, res) => {    
  res.send('Pets Endpoint');
  });    
   
module.exports = router;