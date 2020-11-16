import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";


const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
})
server.start(() => console.log("Server is running on localhost:4000"))



const functions = require('firebase-functions')
const express = require('express')
const { graphqlExpress } = require('apollo-server-express')
const bodyParser = require('body-parser')
const { makeExecutableSchema } = require('graphql-tools')

const schema = makeExecutableSchema({
  typeDefs: [/* Your schema.graphql */],
  resolvers: {/* Your resolver */}
})

const server = express().use(
  bodyParser.json(),
  graphqlExpress({ schema, context: {} })
)

exports.graphql = functions.https.onRequest(server)