const mapping = {
  "IMG-20260205-WA0014.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0015.jpg": "Wedding Sofas",
  "IMG-20260205-WA0016.jpg": "Stage Setups",
  "IMG-20260205-WA0017(1).jpg": "Stage Setups",
  "IMG-20260205-WA0018.jpg": "Event Accessories",
  "IMG-20260205-WA0019.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0020(1).jpg": "Stage Setups",
  "IMG-20260205-WA0022.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0023.jpg": "Stage Setups",
  "IMG-20260205-WA0025.jpg": "Event Accessories",
  "IMG-20260205-WA0026.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0027.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0028.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0029.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0030.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0031.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0032.jpg": "Event Accessories",
  "IMG-20260205-WA0033.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0034.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0035.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0036.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0037.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0038.jpg": "Wedding Sofas",
  "IMG-20260205-WA0039.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0040.jpg": "Stage Setups",
  "IMG-20260205-WA0041.jpg": "Stage Setups",
  "IMG-20260205-WA0042.jpg": "Event Accessories",
  "IMG-20260205-WA0043.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0044.jpg": "Event Accessories",
  "IMG-20260205-WA0045.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0046.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0047.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0048.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0049.jpg": "Stage Setups",
  "IMG-20260205-WA0050.jpg": "Stage Setups",
  "IMG-20260205-WA0051.jpg": "Event Accessories",
  "IMG-20260205-WA0052.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0053.jpg": "Wedding Sofas",
  "IMG-20260205-WA0054.jpg": "Wedding Sofas",
  "IMG-20260205-WA0055.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0056.jpg": "Event Accessories",
  "IMG-20260205-WA0057.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0058.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0059.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0060.jpg": "Stage Setups",
  "IMG-20260205-WA0061.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0062.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0063.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0064.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0065.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0066.jpg": "Event Accessories",
  "IMG-20260205-WA0067.jpg": "Event Accessories",
  "IMG-20260205-WA0068.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0069.jpg": "Event Accessories",
  "IMG-20260205-WA0070.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0071.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0072.jpg": "Stage Setups",
  "IMG-20260205-WA0073.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0074.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0075.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0077.jpg": "Stage Setups",
  "IMG-20260205-WA0078.jpg": "Lighting & Decorations",
  "IMG-20260205-WA0079.jpg": "Lighting & Decorations",
  "NEW-66.jpeg": "Event Accessories",
  "NEW-67.jpeg": "Stage Setups"
};

const fs = require('fs');

const products = [];
let id = 1;

for (const [img, cat] of Object.entries(mapping)) {
    let name = "";
    let desc = "";
    
    if (cat === "Lighting & Decorations") {
        name = `Premium ${img.includes('WA0028') || img.includes('WA0033') ? 'Chandelier' : 'Decor Light'}`;
        desc = "High-quality lighting solution for premium event decorations and stages.";
    } else if (cat === "Wedding Sofas") {
        name = "Royal Wedding Sofa";
        desc = "Elegant and comfortable sofa set for weddings and premium events.";
    } else if (cat === "Stage Setups") {
        name = "Full Stage Ensemble";
        desc = "Complete professional stage decorative setup including backdrops and lights.";
    } else if (cat === "Event Accessories") {
        name = "Premium Event Accessory";
        desc = "Essential decorative or functional accessory for professional event management.";
    } else if (cat === "Banquet Chairs") {
        name = "Luxury Banquet Chair";
        desc = "Durable and stylish chairs for banquet halls and large events.";
    } else if (cat === "Shamiana & Kanat") {
        name = "Decorative Kanat/Parda";
        desc = "High-quality fabric and tenting solutions for event spacing.";
    } else {
        name = "Professional Event Item";
        desc = "High-quality equipment for professional event setup.";
    }

    products.push({ id: id++, name: `${name} #${id-1}`, cat: cat, img: img, desc: desc });
}

fs.writeFileSync('src/data/products.json', JSON.stringify(products, null, 2));
console.log('Generated products.json');
