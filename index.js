const express = require('express');
const path = require('path');
const sever = express();
sever.use(express.static('./www'));
sever.get('/',(req,res)=>{
    res.sendFile(
        path.resolve('./view/index.html')
    )
    }
)
sever.listen(330)