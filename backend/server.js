import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from './db.js';

// App config
const app = express();
const port = process.env.PORT || 8001;
const mongooseURL = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(mongooseURL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to Mongo successfully");
})

// API endpoints
app.get('/', (req, res) => {
    res.status(200).send("Successfull sending of requests");
})

app.post('/cards/addnewcard', (req, res) => {
    const card = req.body;
    // creating new doc using req.body data
    Cards.create(card, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

app.get('/cards/getallcards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})


// Listener
app.listen(port, () => {
    console.log(`Server running successfully at localhost : ${port}`);
})