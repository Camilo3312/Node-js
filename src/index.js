const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('json spaces', 2)

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res)=> {
    res.json({"name":"Hello "})
})

app.listen(3000, () => {
    console.log('Server');
}); 