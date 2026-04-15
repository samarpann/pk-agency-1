const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function getHash(filename) {
    const fileBuffer = fs.readFileSync(filename);
    return crypto.createHash('md5').update(fileBuffer).digest('hex');
}

const srcDir = 'src/image';
const dstDir = 'public/assets';

if (!fs.existsSync(dstDir)) {
    fs.mkdirSync(dstDir, { recursive: true });
}

// Map hashes of existing files in public/assets
const existingHashes = {};
if (fs.existsSync(dstDir)) {
    fs.readdirSync(dstDir).forEach(f => {
        const fullPath = path.join(dstDir, f);
        if (fs.lstatSync(fullPath).isFile()) {
            existingHashes[getHash(fullPath)] = f;
        }
    });
}

// Copy unique from src/image
let copiedCount = 0;
if (fs.existsSync(srcDir)) {
    fs.readdirSync(srcDir).forEach(f => {
        const fullPath = path.join(srcDir, f);
        if (fs.lstatSync(fullPath).isFile()) {
            const h = getHash(fullPath);
            if (!existingHashes[h]) {
                const ext = path.extname(f);
                const isVid = ext.toLowerCase() === '.mp4';
                const count = Object.keys(existingHashes).length + 1;
                const newName = isVid ? `NEW-VID-${count}${ext}` : `NEW-${count}${ext}`;
                
                fs.copyFileSync(fullPath, path.join(dstDir, newName));
                existingHashes[h] = newName;
                console.log(`Copied ${f} as ${newName}`);
                copiedCount++;
            } else {
                console.log(`Skipped duplicate: ${f} (same as ${existingHashes[h]})`);
            }
        }
    });
}

console.log(`Finished. Copied ${copiedCount} new files.`);
