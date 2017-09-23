'use strict';

//JSX
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life decisions in the hands of a computer',
    options: ['one', 'two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    )
);

//Conditional Rendering example
var user = {
    name: 'Vish',
    age: 26,
    location: 'New York'
};

function geoLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    geoLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
