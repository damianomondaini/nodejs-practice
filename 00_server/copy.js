let fs = require('fs');
let file = "demo.mp4";

fs.stat(file, (err, stat) => {
    let total = stat.size;
    let progress = 0;
    let write = fs.createWriteStream('copy.mp4');
    let read = fs.createReadStream(file);
    read.on('data', (chunk) => {
        progress += chunk.length;
        console.log("J'ai lu " + Math.round(100 * progress / total) + "% ");        
    })

    read.pipe(write);
    write.on('finish', () => {
        console.log("Le fichier est copié");
    })
})