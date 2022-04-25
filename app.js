const express = require('express');

const app = require ('./server');

app.listen(3000, () =>{
    console.log(`Running on http://localhost:3000`);
});