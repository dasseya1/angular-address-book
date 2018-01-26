require('dotenv').config();

const users = require('./users.json');
const contacts = require('./contacts.json');

const MongoClient = require('mongodb').MongoClient;

const bcrypt = require('bcrypt');

function seedCollection(collectionName, initialRecords) {
    MongoClient.connect(process.env.DB_CONN, (err, db) => {
        console.log('Connected to mongodb ...');
    })
}