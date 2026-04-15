const fs = require('fs');
const path = require('path');

const dstDir = 'public/assets';
const files = fs.readdirSync(dstDir);

const images = [];
const videos = [];

files.forEach(f => {
    const ext = path.extname(f).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) {
        images.push(f);
    } else if (['.mp4', '.webm', '.ogg'].includes(ext)) {
        videos.push(f);
    }
});

// Sort for consistency
images.sort();
videos.sort();

const content = `const ASSET_BASE = "/assets";

// For production/dev convenience, we use the public /assets folder.
export const getAsset = (name) => {
    return \`\${ASSET_BASE}/\${name}\`;
};

export const images = [
${images.map(img => `    "${img}",`).join('\n')}
];

export const videos = [
${videos.map(vid => `    "${vid}",`).join('\n')}
];
`;

fs.writeFileSync('src/utils/assets.js', content);
console.log('Updated src/utils/assets.js');
