const express = require("express");
const v1 = require('./api/routes/v1');
const app = express();


  

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.use('/v1', v1);


