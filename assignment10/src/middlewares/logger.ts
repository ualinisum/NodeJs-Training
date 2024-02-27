import morgan from "morgan";

const customMorganMiddleware = () => {
    return morgan('combined', {
        stream: process.stdout
    });
};

export default customMorganMiddleware;