// Budget API
const express = require('express');
const cors = require('cors');
const app  = express();
const port = 3000;
const dataLink = require("./info.json"); 

// Currently CORS is completely open - modify to a whitelist if necesary. 
app.use(cors());

const budget = {
    myBudget: [
    {
        title: 'Eat out',
        budget: 25
    },
    {
        title: 'Rent',
        budget: 375
    },
    {
        title: 'Grocery',
        budget: 110
    },
]
};


app.get('/budget', (req,res) => {
    console.log(dataLink);
    res.json(dataLink);
});

app.listen(port, () => {
    console.log('API listening at http://localhost:${port}')
});