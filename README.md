# Serverless Testing With Node, Jest Examples
This repository illustrates some strategies to test apps built using [Serverless framework](https://github.com/serverless/serverless).

## Setup

- Install Node > 8 (latest runtime supported by AWS Lambda)

- Install serverless (tested against serverless v1.28.0)
````
$ npm i -g serverless 
````
- Install node modules
````
$ npm i 
````
- Initialize env variables file
````
$ touch env.yml 
````
- Run tests
````
$ npm test
````

## Jest
Used [@globalSetup](https://jestjs.io/docs/en/configuration#globalsetup-string) and [@globalTearDown](globalTeardown) to run and stop serverless offline application

## Running locally
- Start serverless offline
````
$ sls offline
````
- Send an http request with [httpie](https://httpie.org/)
````
$ http :3000/example

HTTP/1.1 200 OK
Connection: keep-alive
Date: Mon, 16 Jul 2018 12:20:24 GMT
Transfer-Encoding: chunked
access-control-allow-credentials: true
access-control-allow-origin: *
cache-control: no-cache
content-encoding: gzip
content-type: application/json; charset=utf-8
vary: origin,accept-encoding

{
    "result": "Go Serverless v1.0! Your function executed successfully!"
}



````


## Contributions

If you would like to contribute to this repo and share some interesting test scenarios/usages with the serverless community, please feel free to open a PR !

You can reach me on Twitter: [@mbilalsha](https://twitter.com/mbilalsha)
You can reach me on LinkedIn: [@bilalshahch](https://www.linkedin.com/in/mbshahch/)
