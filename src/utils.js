import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { access } from 'node:fs/promises';

export const getPath = (url) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  return __dirname;
};

export const getUserName = () => {
    var args = process.argv.slice(2);
    var username = args.filter(word => word.startsWith("--username"))[0].slice(11);
    return username.length > 0 ? username : "Anonymous";
};

export const errMessageOpFailed = "Operation failed";
export const errMessageInvalidInput = "Invalid input";
export const statusMessage = "You are currently in %s";
export const welcomeMessage = "Welcome to the File Manager, %s!";
export const goodbuyMessage = "Thank you for using File Manager, %s, goodbye!";

export const exists = async (path) => {  
  try {
    await access(path)
    return true
  } catch {
    return false
  };
};





