import os from 'node:os';
import fs from 'node:fs';
import util from 'node:util';
import { welcomeMessage, getUserName } from "../utils.js"

console.log(util.format(welcomeMessage), getUserName());
