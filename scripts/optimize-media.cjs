const fs = require("fs");
const path = require("path");
const sharp = require("/Users/rh/Documents/pistachio-portal/node_modules/sharp");

const srcDir = "/Users/rh/Documents/pistachio-web/_media-review";
const outBase = "/Users/rh/Documents/pistachio-web/public/media";

const jobs = [
  // Hero poster (JPG, 1920px wide)
  { src: "IMG_9644.JPG", out: "hero/hero-poster.jpg", format: "jpeg", maxDim: 1920, maxKB: 320 },

  // Weekend flow (12)
  { src: "IMG_9592.JPG", out: "weekend/welcome-kit.webp" },
  { src: "IMG_9819.JPG", out: "weekend/pool-guests.webp" },
  { src: "IMG_9595.JPG", out: "weekend/bouzouki.webp" },
  { src: "IMG_0370.JPG", out: "weekend/chuppah-drone.webp" },
  { src: "IMG_9716.JPG", out: "weekend/chuppah-sunset.webp" },
  { src: "IMG_0185.JPG", out: "weekend/dinner-trees.webp" },
  { src: "IMG_9625.JPG", out: "weekend/dinner-flowers.webp" },
  { src: "IMG_9673.JPG", out: "weekend/dinner-lights.webp" },
  { src: "IMG_9816.JPG", out: "weekend/party-bride-bw.webp" },
  { src: "IMG_9781.JPG", out: "weekend/party-energy-bw.webp" },
  { src: "IMG_0136.JPG", out: "weekend/morning-beach.webp" },
  { src: "IMG_9772.JPG", out: "weekend/morning-couple.webp" },


  // Venue 2: Private Cove & Chapel (4)
  { src: "IMG_0095.JPG", out: "venues/private-cove/01-cove-drone.webp" },
  { src: "IMG_0321.JPG", out: "venues/private-cove/02-coastline-aerial.webp" },
  { src: "IMG_0131.JPG", out: "venues/private-cove/03-chapel-steps.webp" },
  { src: "IMG_0185.JPG", out: "venues/private-cove/04-olive-table.webp" },

  // Seafront Resort and Amphitheater media (v2-*) were converted separately; see src/data/venues.ts

  // Editorial couples & details (5)
  { src: "IMG_2493.JPG", out: "editorial/couple-bw-water.webp" },
  { src: "IMG_9614.JPG", out: "editorial/couple-balcony.webp" },
  { src: "IMG_9844.JPG", out: "editorial/couple-silhouette.webp" },
  { src: "IMG_9734.JPG", out: "editorial/couple-bougainvillea.webp" },
  { src: "IMG_0026.JPG", out: "editorial/bouquet-ring.webp" },

  // About (3)
  { src: "IMG_0094.JPG", out: "about/raday-noga-wedding.webp" },
  { src: "IMG_9667.JPG", out: "about/raday-noga-onsite.webp" },
  { src: "IMG_9823.JPG", out: "about/production-chuppah.webp" },
];

async function runJob(job) {
  const inPath = path.join(srcDir, job.src);
  const outPath = path.join(outBase, job.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const maxDim = job.maxDim || 1600;
  const maxKB = job.maxKB || 295;
  let q = 82;
  let buf;
  while (q >= 60) {
    const pipe = sharp(inPath)
      .rotate()
      .resize({ width: maxDim, height: maxDim, fit: "inside", withoutEnlargement: true });
    buf = job.format === "jpeg"
      ? await pipe.jpeg({ quality: q, mozjpeg: true }).toBuffer()
      : await pipe.webp({ quality: q, effort: 2 }).toBuffer();
    if (buf.length <= maxKB * 1024) break;
    q -= 8;
  }
  fs.writeFileSync(outPath, buf);
  console.log(`${job.out} | ${(buf.length / 1024).toFixed(0)}KB | q=${q}`);
}

(async () => {
  const arg = process.argv.find((a) => a.startsWith("--part="));
  let list = jobs;
  if (arg === "--part=1") list = jobs.slice(0, 17);
  if (arg === "--part=2") list = jobs.slice(17);

  for (let i = 0; i < list.length; i += 4) {
    await Promise.all(list.slice(i, i + 4).map(runJob));
  }
})();
