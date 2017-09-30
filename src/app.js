/* import './utils.js';
import subtract,{square, add} from './utils.js';

console.log('app.js is running!');
console.log(square(5));
console.log(add(541,123));
console.log(subtract(10,41)); */

/* import { isAdult, canDrink } from './person.js';

console.log(isAdult(31));
console.log(canDrink(12)); */

//install ->  import -> use npm modules
/* import validator from 'validator';

console.log(validator.isEmail('test@gmail.com')); */

//import, install and use react and react-dom npm modules
import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'Test123');
ReactDOM.render(template, document.getElementById('app'));