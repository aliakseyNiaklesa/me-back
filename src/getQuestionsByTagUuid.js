const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { ScanCommand } = require("@aws-sdk/lib-dynamodb");

const params = {
  TableName : 'question',
};

const client = new DynamoDB({
    region: 'us-east-1',
});

const command = new ScanCommand(params);

module.exports.handler = async (event) => {

    const data = await client.send(command);
    const Items = data.Items.filter(item => item.tagUuid === '14a94c0d-5aa5-469a-9dfb-d601dab8a38c');

    return {
        data: {
            Items,
            Count: Items.length,
            he: 'asdfa' + event.queryStringParameters?.tagUuid,
        },
        statusCode: 200,
    };
};


// const test = async () => {
//     const client = new DynamoDB({
//         region: 'us-east-1',
//     });
//     const command = new ScanCommand(params);
//     const data = await client.send(command);

//     console.log(data.Items);
// }

// test();