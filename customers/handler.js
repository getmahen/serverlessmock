'use strict';

const customerData = [
  {
    id : 100,
    firstName : 'Mahendra',
    lastName : 'Rekapally'
  },
  {
    id : 101,
    firstName : 'John',
    lastName : 'Doe'
  },
]

const extractCustomerById = (customerId) => {
  return customerData.find(customer => customer.id === customerId);
}

module.exports.getCustomer = (event, context, callback) => {

  const customerId = event.queryStringParameters.customerId;
  const customer = extractCustomerById(parseInt(customerId))
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
      customer :
        {
          firstName : customer ? customer.firstName : '',
          lastName: customer ? customer.lastName : ''
        }
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
