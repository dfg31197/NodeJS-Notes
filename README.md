# Basic NodeJS Project: Notes
- - -
## Why this exist
This project is part of Udemy's NodeJS course and is meant for learning NodeJS. This project specifically focuses on implementing node-cli interface using `yargs` and a simple JSON file as storage, using `fs` module for CRUD operations.

## Installation
##### Required
* node
* npm

$ `cd` into the cloned folder and run
$`npm install`

## Operations
```
Currently there are only basic CRUD operations you can perform. To run  any of the following operations, Run
```
$`node app.js <operation> [arguements]`

    List of available operations
* add
* remove
* all
* change
* clearall
```
To get information about all the operations, run
```
$ `node app.js --help`
```
Some operations require arguements to be passed along, like adding something will require you to do something like -
```
$`node app.js add --title="YOUR_TITLE" --body="YOUR_TEXT_BODY"`

```
To see detailed information about a specific operation, Run -
```
$ `node app.js <operation> --help`
