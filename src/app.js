const express = require('express');
const bodyParser = require('body-parser');
const routerApi = require('./routes/api');
const cors = require("cors");

const app = express();

const jsonParser = bodyParser.json();
const urlEncoded = bodyParser.urlencoded({ extended: false });

app.use(cors());
app.use(jsonParser);
app.use(urlEncoded);

app.use('/api/v1', routerApi());

//404
app.use(function (req, res, next) {
    res.status(404).send('Not Found');
});

//500
app.use(function (err, req, res, next) {
    if (err) {
        console.error(err.stack);
    }

    res.status(500).send('Something broke!');
});

const port = process.env.PORT || 3000
// app.listen(port, () => console.log(`Server ready on ${port}`))

app.listen(3000, function () {
    console.log(`Server is running on http://localhost:${port}`);
});

// app.listen(3000, function () {
//     console.log('Server is running on http://localhost:3000');
// });