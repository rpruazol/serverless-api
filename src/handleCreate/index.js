'use strict'

const dynamoose = require("dynamoose");

// create the schema
const schema = new dynamoose.Schema({
  'id': String,
  'first_name': 'String',
}, {
  "saveUnknown": true,
  "timestamps": true
});

// create the model, which requires the name of the table and the schema
const Person = dynamoose.model('people', schema);

exports.handleCreate = async(event) => {
  console.log(event)
  const payload = JSON.parse(event.body)
  try{
    const res = await Person.create(event.body);
    console.log(res)
  } catch(e) {
    console.error(e);
  }

}