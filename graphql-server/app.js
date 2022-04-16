"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
var cors = require('cors');
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
    people: (args) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield axios_1.default.get('https://swapi.dev/api/people/');
        const r = response.data.results;
        return r;
    }),
};
var app = (0, express_1.default)();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
