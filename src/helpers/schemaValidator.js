const {Validator} = require('jsonschema');
const v = new Validator();
const assert = require('assert');

function validateSchema(response, schema) {
    const result = v.validate(response, schema);

    if(result.valid){
        console.log('Response is valid according to the schema.');
    }else {
        console.error("Response is NOT valid according to the schema")
        console.log(JSON.stringify(result, null, 2));
        result.errors.forEach(error => {
            console.error(`Error: ${error.stack}`);
        });
        assert.fail("Schema validation failed");
    }

    return result.valid;
}

module.exports = {validateSchema};