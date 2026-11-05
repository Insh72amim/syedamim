import{j as e}from"./ui-C9KrBvbE.js";import"./vendor-C-RugAsD.js";import{C as r}from"./CodeBlock-B1pjjoNU.js";import"./syntax-highlighter-BBv136ip.js";import"./vsc-dark-plus-CcVsXCy1.js";const o=()=>e.jsxs("div",{className:"max-w-4xl",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-white",children:"GraphQL: The Deep Dive"}),e.jsx("p",{className:"text-xl text-gray-300 mb-8",children:"A query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"What is GraphQL?"}),e.jsx("p",{className:"text-gray-300 mb-4",children:"GraphQL is a query language for APIs developed by Facebook in 2012 and open-sourced in 2015. Unlike REST, where you have multiple endpoints returning fixed data structures, GraphQL provides a single endpoint that allows clients to request exactly the data they need."}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-4",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"Key Benefits"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Precise Data Fetching:"})," Request exactly what you need, nothing more"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Single Request:"})," Get multiple resources in a single query"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Strongly Typed Schema:"})," Self-documenting API with type safety"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No Over/Under-fetching:"})," Eliminate the need for multiple endpoints"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rapid Product Iteration:"})," Add new fields and types without breaking existing queries"]})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Schema Definition Language (SDL)"}),e.jsx("p",{className:"text-gray-300 mb-4",children:"GraphQL uses a schema to define the structure of your API. The schema is written in GraphQL Schema Definition Language (SDL)."}),e.jsx(r,{language:"graphql",title:"Basic Schema Example",code:`type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
  createdAt: DateTime!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  published: Boolean!
  tags: [String!]!
}

type Query {
  user(id: ID!): User
  users(limit: Int, offset: Int): [User!]!
  post(id: ID!): Post
  posts(authorId: ID): [Post!]!
}

type Mutation {
  createUser(name: String!, email: String!): User!
  updateUser(id: ID!, name: String, email: String): User!
  deleteUser(id: ID!): Boolean!
  createPost(title: String!, content: String!, authorId: ID!): Post!
}

type Subscription {
  postAdded: Post!
  userUpdated(id: ID!): User!
}`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Queries"}),e.jsx("p",{className:"text-gray-300 mb-4",children:"Queries are used to fetch data from the server. You specify exactly which fields you want to retrieve."}),e.jsx(r,{language:"graphql",title:"Query Examples",code:`# Simple query
query GetUser {
  user(id: "123") {
    id
    name
    email
  }
}

# Query with nested fields
query GetUserWithPosts {
  user(id: "123") {
    id
    name
    email
    posts {
      id
      title
      published
    }
  }
}

# Query with variables
query GetUser($userId: ID!) {
  user(id: $userId) {
    id
    name
    email
    posts {
      id
      title
    }
  }
}

# Query with aliases
query GetTwoUsers {
  firstUser: user(id: "1") {
    id
    name
  }
  secondUser: user(id: "2") {
    id
    name
  }
}

# Query with fragments
query GetUsers {
  user1: user(id: "1") {
    ...UserFields
  }
  user2: user(id: "2") {
    ...UserFields
  }
}

fragment UserFields on User {
  id
  name
  email
  createdAt
}`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Mutations"}),e.jsx("p",{className:"text-gray-300 mb-4",children:"Mutations are used to modify data on the server (create, update, delete operations)."}),e.jsx(r,{language:"graphql",title:"Mutation Examples",code:`# Create a new user
mutation CreateUser {
  createUser(name: "John Doe", email: "john@example.com") {
    id
    name
    email
    createdAt
  }
}

# Update a user with variables
mutation UpdateUser($userId: ID!, $name: String!) {
  updateUser(id: $userId, name: $name) {
    id
    name
    email
  }
}

# Multiple mutations in one request
mutation CreateUserAndPost($userName: String!, $userEmail: String!, $postTitle: String!) {
  newUser: createUser(name: $userName, email: $userEmail) {
    id
    name
  }
  newPost: createPost(title: $postTitle, content: "...", authorId: "123") {
    id
    title
  }
}`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Subscriptions"}),e.jsx("p",{className:"text-gray-300 mb-4",children:"Subscriptions allow clients to receive real-time updates when specific events occur on the server."}),e.jsx(r,{language:"graphql",title:"Subscription Example",code:`# Subscribe to new posts
subscription OnPostAdded {
  postAdded {
    id
    title
    content
    author {
      name
    }
  }
}

# Subscribe to user updates
subscription OnUserUpdated($userId: ID!) {
  userUpdated(id: $userId) {
    id
    name
    email
  }
}`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Resolvers"}),e.jsx("p",{className:"text-gray-300 mb-4",children:"Resolvers are functions that handle fetching the data for each field in your schema."}),e.jsx(r,{language:"javascript",title:"Resolver Implementation (Node.js)",code:`const resolvers = {
  Query: {
    user: async (parent, { id }, context) => {
      return await context.db.user.findUnique({
        where: { id }
      });
    },
    users: async (parent, { limit = 10, offset = 0 }, context) => {
      return await context.db.user.findMany({
        take: limit,
        skip: offset
      });
    }
  },

  Mutation: {
    createUser: async (parent, { name, email }, context) => {
      return await context.db.user.create({
        data: { name, email }
      });
    },
    updateUser: async (parent, { id, name, email }, context) => {
      return await context.db.user.update({
        where: { id },
        data: { name, email }
      });
    }
  },

  User: {
    posts: async (parent, args, context) => {
      // This resolver is called when posts field is requested
      return await context.db.post.findMany({
        where: { authorId: parent.id }
      });
    }
  },

  Subscription: {
    postAdded: {
      subscribe: (parent, args, context) => {
        return context.pubsub.asyncIterator(['POST_ADDED']);
      }
    }
  }
};`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"DataLoader - Solving N+1 Problem"}),e.jsx("p",{className:"text-gray-300 mb-4",children:"DataLoader is a utility for batching and caching data fetches, preventing the N+1 query problem."}),e.jsx(r,{language:"javascript",title:"DataLoader Example",code:`const DataLoader = require('dataloader');

// Create a batch loading function
const batchUsers = async (userIds) => {
  const users = await db.user.findMany({
    where: { id: { in: userIds } }
  });
  
  // Return users in the same order as requested
  return userIds.map(id => 
    users.find(user => user.id === id)
  );
};

// Create DataLoader instance
const userLoader = new DataLoader(batchUsers);

// Use in resolver
const resolvers = {
  Post: {
    author: (post, args, context) => {
      // Instead of fetching directly:
      // return db.user.findUnique({ where: { id: post.authorId } });
      
      // Use DataLoader for batching:
      return context.loaders.user.load(post.authorId);
    }
  }
};

// In context setup
const context = {
  loaders: {
    user: new DataLoader(batchUsers)
  }
};`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Server Implementation"}),e.jsx(r,{language:"javascript",title:"Apollo Server Setup",code:`const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

// Define your schema
const typeDefs = \`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    user(id: ID!): User
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
\`;

// Define your resolvers
const resolvers = {
  Query: {
    user: (parent, { id }) => {
      return users.find(user => user.id === id);
    },
    users: () => users
  },
  Mutation: {
    createUser: (parent, { name, email }) => {
      const newUser = {
        id: String(users.length + 1),
        name,
        email
      };
      users.push(newUser);
      return newUser;
    }
  }
};

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => ({
    // Add context like database, auth, etc.
    db,
    user: await getUserFromToken(req.headers.authorization)
  })
});

console.log(\`🚀 Server ready at \${url}\`);`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Client Implementation"}),e.jsx(r,{language:"javascript",title:"Apollo Client (React)",code:`import { ApolloClient, InMemoryCache, gql, useQuery, useMutation } from '@apollo/client';

// Create Apollo Client
const client = new ApolloClient({
  uri: 'https://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

// Define queries
const GET_USER = gql\`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
\`;

const CREATE_USER = gql\`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
\`;

// Use in React component
function UserProfile({ userId }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.user.name}</h1>
      <p>{data.user.email}</p>
    </div>
  );
}

function CreateUserForm() {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    createUser({
      variables: {
        name: formData.get('name'),
        email: formData.get('email'),
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <button type="submit" disabled={loading}>
        Create User
      </button>
      {error && <p>Error: {error.message}</p>}
      {data && <p>Created user: {data.createUser.name}</p>}
    </form>
  );
}`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Best Practices"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"1. Use Pagination"}),e.jsx("p",{className:"text-gray-300 mb-3",children:"Always implement pagination for list queries to avoid performance issues."}),e.jsx(r,{language:"graphql",code:`type Query {
  users(
    limit: Int = 10
    offset: Int = 0
  ): [User!]!
  
  # Or cursor-based pagination
  userConnection(
    first: Int
    after: String
  ): UserConnection!
}

type UserConnection {
  edges: [UserEdge!]!
  pageInfo: PageInfo!
}

type UserEdge {
  node: User!
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  endCursor: String
}`})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"2. Input Types for Mutations"}),e.jsx("p",{className:"text-gray-300 mb-3",children:"Use input types to group mutation arguments for better organization."}),e.jsx(r,{language:"graphql",code:`input CreateUserInput {
  name: String!
  email: String!
  age: Int
}

input UpdateUserInput {
  name: String
  email: String
  age: Int
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
}`})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"3. Error Handling"}),e.jsx("p",{className:"text-gray-300 mb-3",children:"Implement proper error handling with custom error codes."}),e.jsx(r,{language:"javascript",code:`const { GraphQLError } = require('graphql');

const resolvers = {
  Query: {
    user: async (parent, { id }, context) => {
      const user = await context.db.user.findUnique({
        where: { id }
      });
      
      if (!user) {
        throw new GraphQLError('User not found', {
          extensions: {
            code: 'USER_NOT_FOUND',
            argumentName: 'id',
          },
        });
      }
      
      return user;
    }
  }
};`})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-400",children:"4. Authentication & Authorization"}),e.jsx(r,{language:"javascript",code:`const resolvers = {
  Query: {
    me: (parent, args, context) => {
      if (!context.user) {
        throw new GraphQLError('Not authenticated', {
          extensions: { code: 'UNAUTHENTICATED' }
        });
      }
      return context.user;
    },
    
    adminData: (parent, args, context) => {
      if (!context.user?.isAdmin) {
        throw new GraphQLError('Not authorized', {
          extensions: { code: 'FORBIDDEN' }
        });
      }
      return getAdminData();
    }
  }
};`})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"GraphQL vs REST"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-800",children:[e.jsx("th",{className:"border border-gray-700 px-4 py-3 text-left text-white",children:"Aspect"}),e.jsx("th",{className:"border border-gray-700 px-4 py-3 text-left text-white",children:"GraphQL"}),e.jsx("th",{className:"border border-gray-700 px-4 py-3 text-left text-white",children:"REST"})]})}),e.jsxs("tbody",{className:"text-gray-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Endpoints"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Single endpoint"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Multiple endpoints"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Data Fetching"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Client specifies exact data needed"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Server determines response structure"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Over/Under-fetching"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Eliminated"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Common problem"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Versioning"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Not needed (evolve schema)"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Often requires API versions"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Type System"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Strongly typed"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"No built-in type system"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Real-time"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Built-in subscriptions"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Requires WebSockets or SSE"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Caching"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"More complex (normalized cache)"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Simple (HTTP caching)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-700 px-4 py-3 font-semibold",children:"Learning Curve"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Steeper"}),e.jsx("td",{className:"border border-gray-700 px-4 py-3",children:"Gentler"})]})]})]})})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-400",children:"Popular GraphQL Tools"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"Apollo Server"}),e.jsx("p",{className:"text-gray-300",children:"Production-ready GraphQL server for Node.js"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"Apollo Client"}),e.jsx("p",{className:"text-gray-300",children:"Comprehensive state management library for JavaScript"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"GraphQL Yoga"}),e.jsx("p",{className:"text-gray-300",children:"Fully-featured GraphQL server with focus on easy setup"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"Hasura"}),e.jsx("p",{className:"text-gray-300",children:"Instant GraphQL APIs on your databases"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"Prisma"}),e.jsx("p",{className:"text-gray-300",children:"Next-generation ORM with GraphQL support"})]}),e.jsxs("div",{className:"bg-gray-800/50 border border-gray-700 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-green-400",children:"GraphQL Playground"}),e.jsx("p",{className:"text-gray-300",children:"Interactive IDE for exploring GraphQL APIs"})]})]})]})]});export{o as default};
