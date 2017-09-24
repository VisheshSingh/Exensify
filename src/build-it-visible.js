//JSX
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life decisions in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option)
        e.target.elements.option.value = '';
        render();
    }
}
const onRemove = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length);
    const option = app.options[random];
    alert(option);
}

const appRoot = document.getElementById('app'); 
const render = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemove}>Remove all</button>
        <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })
            }
        </ol>
        <form onSubmit = {onFormSubmit}>
            <input type="text" name="option" />
            <button>Add option</button>
        </form>
    </div>
    );

    ReactDOM.render(template, appRoot);
}

render();

/* let visible = true;

const details = () => {
    visible= !visible;
    render();
}

const appRoot = document.getElementById('app');
const render = () => {
    const visibility = (
        <div>
            <h1>Visibility</h1>
            <button onClick={details}>
                {visible ? 'Hide Details': 'Show details'}
            </button>
            {visible && (
                <p>Hello details</p>
            )}
        </div>
    );
    ReactDOM.render(visibility, appRoot);
};

render(); */