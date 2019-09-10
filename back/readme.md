# Back-end

REST API for mongodb
CRUD on customer

## Dev & Tests

### Jest

Uses in memory MongoDb

### Manual request

- Launch the mongoDb database
- Test the API using the calls.rest file
- Check the MongoDB in compass

## Customers API

### Get customers list

/customers

### Get customer by id

/customers/id

### Post customer

/customers
{"name": "a", "email": "a@a.fr"}

## User API

### /register

Require email and password
create an entry in the database

will then need to auth to get the token

### /auth

Receive a token if sucessful authentication :
in db by email + correct password
