const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName : 'tag',
}

module.exports.handler = async (event) => {
  const data = await docClient.scan(params).promise();

  return {
    statusCode: 200,
    body: {
      data
    }
  };
};
