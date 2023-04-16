const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { ScanCommand } = require("@aws-sdk/lib-dynamodb");

const params = {
  TableName : 'tag',
};

const client = new DynamoDB({
    region: 'us-east-1',
});

const command = new ScanCommand(params);

module.exports.handler = async (event) => {
  const data = await client.send(command);

  return {
    data,
    code: 200,
  };
};
