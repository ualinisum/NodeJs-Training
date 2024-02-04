import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
import * as fs from "fs/promises";
import * as syncFS from "fs";
const rl = readline.createInterface({ input, output });

type readWrite = {
    sourceFileForRead: string,
    targetFileForWrite: string,
};


const readWrite = async ({ sourceFileForRead, targetFileForWrite }: readWrite) => {
    try {
        await fs.access(sourceFileForRead);
        const data = await fs.readFile(sourceFileForRead, "utf8");

        await fs.writeFile(targetFileForWrite, data, "utf8");
    } catch (error) {
        console.error(error);
    }
};


const readAndAppend = async (targetFileForWrite: string) => {
    try {
        await fs.access(targetFileForWrite);
        const data = await fs.readFile(targetFileForWrite, "utf8");

        await fs.appendFile(targetFileForWrite, data, "utf8");
    } catch (error) {
        console.error(error);
    }
};

const getRequirements = async () => {
    try {
        const sourceFileForRead = await rl.question("In which file you want to read Data from => ");
        if (syncFS.existsSync(sourceFileForRead)) {
            const targetFileForWrite = await rl.question("In which file you want to write Data => ");

            if (syncFS.existsSync(targetFileForWrite)) {
                const questionForAppend = await rl.question(`${targetFileForWrite} already exist You want to append data on this file (y/N) => `);
                if (questionForAppend.toLowerCase() === "y") {
                    readAndAppend(targetFileForWrite);
                } else {
                    rl.close();
                }

            } else {
                readWrite({ sourceFileForRead, targetFileForWrite });
            }
        } else {
            console.error("Sorry! No file with this name exists");
        }
    } catch (err) {
        console.error(err);
    } finally {
        rl.close();
    }
};
getRequirements();