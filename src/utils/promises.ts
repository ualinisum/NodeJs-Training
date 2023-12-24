function promiseFunction(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('This is a Promise');
      }, 2000);
    });
}