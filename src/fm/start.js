import os from 'node:os';
import fs from 'node:fs';

// import { createReadStream } from 'node:fs';

import { join } from 'node:path';

import util from 'node:util';
import { welcomeMessage, statusMessage, goodbuyMessage } from "../utils.js"
import { getPath, getUserName } from '../utils.js';


const initialDir = process.env.HOME;
const currentDir = process.cwd();
const username = getUserName();




process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  var input = process.stdin.read();
  // while(true) {
    if(input !== null) {
  
      var command = input.trim();

      

      if(command === '.exit') {
        console.log(util.format(goodbuyMessage), username);
        process.exit(0);
      }
    }
  // }
});

console.log(util.format(welcomeMessage), username);
console.log(util.format(statusMessage), initialDir);
