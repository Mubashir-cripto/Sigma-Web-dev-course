const fs = require('fs');
const path = require('path');

const TARGET_DIR = __dirname

function organizeDirectory(dirPath) {
  // Read all items in the directory
  const items = fs.readdirSync(dirPath);

  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stats = fs.statSync(fullPath);

    // Skip folders, only process files
    if (!stats.isFile()) return;

    // Get extension without the dot → "jpg", "pdf", "zip"
    const ext = path.extname(item).slice(1).toLowerCase();

    // Skip files with no extension
    if (!ext) return;

    if(ext === 'js' || ext === 'json') return;

    // Build the target folder path → ./myFolder/jpg
    const targetFolder = path.join(dirPath, ext);

    // Create the folder if it doesn't exist
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder);
      console.log(`Created folder: ${ext}/`);
    }

    // Move the file into the folder
    const destination = path.join(targetFolder, item);
    fs.renameSync(fullPath, destination);
    console.log(`Moved: ${item} → ${ext}/${item}`);
  });

  console.log('\n✅ Directory organized!');
}

organizeDirectory(TARGET_DIR);