const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req,res)=>{res.send('<h1>KCC PRO IS LIVE!</h1><p>Deploy imefanikiwa</p>')});
app.listen(PORT, ()=>console.log('KCC ONLINE on '+PORT));
