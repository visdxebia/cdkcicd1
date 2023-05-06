const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");
const fs = require('fs');

(async ()=>{
  const ddbClient = new DynamoDBClient({ region: 'us-east-1' });
  const {Items} = await ddbClient.send(new ScanCommand({
    TableName: "sensing-solution-tenant",
    AttributesToGet: ["id","host"]
  }));

  fs.writeFileSync('./bin/data.json', JSON.stringify(Items, null, 2));
})();
