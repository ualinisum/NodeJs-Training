async function asyncAwaitTimeoutExample(): Promise<string> {
    try {
      const result = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve('This is Async/await');
        }, 2000);
      });
      return result;
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    }
  }
  