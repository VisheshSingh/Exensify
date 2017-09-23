//JSX
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life decisions in the hands of a computer',
    options: ['one', 'two']
}

var template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
</div>
);

//Conditional Rendering example
var user = {
    name: 'Vish',
    age: 26,
    location: 'New York'
}

function geoLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        {geoLocation(user.location)}
    </div>
    );
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);