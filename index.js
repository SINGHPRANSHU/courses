const express = require('express');
const cors = require('cors');

import resolvers from './resolvers';
import schema from './schema';

import {graphqlHTTP} from 'express-graphql';

const app = express();
app.use(cors());
require('dotenv').config()

const PORT = process.env.PORT ;



app.get('/',(req,res)=>{
    res.send('hello')
});

const root = resolvers;  

app.use('/graphql',graphqlHTTP({
    schema,
    rootValue:root,
    graphiql: true
}));







app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
});