const express= require('express');

const {PORT} = require('./config/serverConfig') 
const setupAndStartServer = async ()=>{
   // create express object
   const app=express();

   app.listen(PORT,()=>{
       console.log(`My server has Started at ${PORT}`);
      
   })
}

setupAndStartServer();