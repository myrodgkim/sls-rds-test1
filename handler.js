'use strict';

const AWS = require('aws-sdk');
AWS.config.update({
    region: "ap-northeast-2"
});

const hello = async event => {
  console.log(`Received : ${event}`);
  console.log(`dt : ${event.dt}`);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Got message ${event}`,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports = {
    hello,
}