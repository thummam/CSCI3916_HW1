//pulling an express to create the API server
const express = require('express');
const app = express();

//creating a route hat listensfor GET requests on the root URL
app.post('/', (req, res) => {
    const acceptHeader = req.get('Accept');
   

    if (acceptHeader){
        res.setHeader('Accept',acceptHeader)
    }

    const responseBody= {
    acceptHeader:acceptHeader,
    ...req.body
    }


    res.json(responseBody)

});
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

module.exports = server;

