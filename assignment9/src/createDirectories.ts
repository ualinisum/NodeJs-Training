import * as readline from "readline";
import * as fs from "fs";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const createDirectory = (directoryName: string, nestedDirectories: number) => {
    fs.mkdir(directoryName, (err) => {
        if (err) {
            console.error(err);
        } else {
            for (let i = 1; i <= nestedDirectories; i++) {
                const nestDirectoryName = `${directoryName}/${directoryName}_${i}`;
                fs.mkdir(nestDirectoryName, (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(`Directory ${nestDirectoryName} created`);
                    }
                });
            }
            console.log("Directory created successfully");
        }
    });
};

const askQuestion = async () => {
    rl.question("What is your name? ", (directoryName) => {
        if (fs.existsSync(directoryName)) {
            console.error("Directory already exist, Please use different name");
            rl.close();
            return;
        } else {
            rl.question(
                "Which number of directories do you want to  create? ",
                (numOfNestedDirectories) => {
                    const nestedDirectories = Number(numOfNestedDirectories);
                    if (isNaN(nestedDirectories) || nestedDirectories < 0) {
                        console.error("Please give number of directories");
                    } else {
                        createDirectory(directoryName, nestedDirectories);
                        rl.close();
                    }
                }
            );
        }
    });
};

askQuestion();
