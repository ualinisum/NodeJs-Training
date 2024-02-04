import * as fs from "fs";

const readFileWithStream = () => {
    const readStream = fs.createReadStream("app.txt", "utf8");
    const fileSize = fs.statSync("app.txt").size;

    let totalRead = 0;

    readStream.on("data", (chunk) => {
        totalRead += chunk.length;
        const progress = (totalRead / fileSize) * 100;
        console.log(`Read ${progress.toFixed(2)}% - ${totalRead} bytes`);
    });

    readStream.on("end", () => {
        console.log("readstream ended");
    });

    readStream.on("error", (err) => {
        console.error(`Error reading file: ${err}`);
    });
};
readFileWithStream();

const base64Encode = () => {
    var fileData = fs.readFileSync("test.jpg");
    const base64Str = Buffer.from(fileData).toString('base64');
    console.log(base64Str);
};

base64Encode()



