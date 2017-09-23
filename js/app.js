'use strict';

//JSX
var template = React.createElement(
  'h1',
  null,
  'This is JSX from react.js'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
