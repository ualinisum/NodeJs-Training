import * as fs from 'fs';
import { exec } from "child_process";
import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });


const runCommand = (command: string) => {
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(err.message, "Error running command or Command Not Found: " + command);
            return;
        }
        if (stderr) {
            console.error(stderr, "Error" + command);
            return;
        }

        console.log("Output: ", stdout,);
    });
};

const askCommand = () => {
    rl.question("Enter command => ").then((command: string) => {
        runCommand(command);
        rl.close();
    }).catch((err: Error) => {
        console.error(err, "Error");
    });
};

askCommand();