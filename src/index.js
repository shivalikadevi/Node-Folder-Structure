const express = require('express');
const {ServerConfig,Logger } = require('./config');
const app = express();
const apiRoutes = require('./routes')
app.use('/api',apiRoutes);


app.listen(ServerConfig.PORT , ()=>{
    console.log(`Successfully started on ${ServerConfig.PORT}`)
    Logger.info("successfully started the server ")
})