const express= require('express');
const bodyParser= require('body-parser');

//bodyParser is midlleware basically

const {PORT} = require('./config/serverConfig') 
const setupAndStartServer = async ()=>{
   // create express object
   const app=express();
   // Parse JSON bodies
   app.use(bodyParser.json());

   // Parse URL-encoded bodies
  app.use(bodyParser.urlencoded({ extended: true }));

   // Now req.body is available for us

   app.listen(PORT,()=>{
       console.log(`My server has Started at ${PORT}`);
      
   })
}

setupAndStartServer();