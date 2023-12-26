
function callbackFunction(parameter: () => void) {
    setTimeout(() => {
      console.log('This is a Callback Function');
      parameter();
    }, 2000);
}
  