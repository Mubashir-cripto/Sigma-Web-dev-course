import fs from 'fs/promises'
import fsn from 'fs'
import path from 'path'

const basePath = "C:\\Users\\Mobi\\Dropbox\\Education Files\\Learn Code Files\\Code With Harry\\Sigma Web Development Course\\Vedio 093\\Exercise 15  Solution and Shoutouts"

let files = await fs.readdir(basePath);

for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1]
    console.log("Running for ",item)
    
if(ext != 'js' && ext != 'json' && item.split(".").length > 1) {

    if(fsn.existsSync(path.join(basePath ,ext))){
        // move the file to this directory if its not a js or json file
        await fs.rename(path.join(basePath ,item) ,path.join(basePath ,ext ,item))
    } else {
        await fs.mkdir(path.join(basePath ,ext))
        await fs.rename(path.join(basePath ,item) ,path.join(basePath ,ext ,item))
    }   
}
}