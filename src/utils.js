console.log('utils.js is running');

export const square = (x) => x*x;
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
//named export
export { add, subtract as default }