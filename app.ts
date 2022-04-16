var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
import axios from 'axios';
import express, { Request, Response, NextFunction } from 'express';
var cors = require('cors')




// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type person {
   
  name: String,
  height: Int,
  mass: Int,
  gender: String,
  homeWorld: String

}
  type Query {
    people: [person]
    
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  people: async (args: {limit: number, cursor: number}) => {
      
      const response = await axios.get('https://swapi.dev/api/people/')   

      const r = response.data.results

     
    
      return r
  },
};





var app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(process.env.PORT || 4000);

console.log('Running a GraphQL API server at http://localhost:4000/graphql');