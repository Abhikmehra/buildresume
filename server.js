const express = require('express');
const app = express();
const port = process.env.PORT || 5000;   //Use For Git
const path=require('path')    //Use For Git
app.use(express.json())

require('./dbConnect');  

const userRoute = require('./routes/userRoutes')

app.use('/api/user/',userRoute)


// For Github
if(process.env.NODE_ENV==="production"){
    app.use('/',express.static("client/build"))

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname , "client/build/index.html"));
    });
}


// End Github Code

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example App Listening On Port ${port}!`);
});
