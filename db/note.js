const util = require("util")
const fs = require("fs")
const notes = "./db/db.json"

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class note{
    
}