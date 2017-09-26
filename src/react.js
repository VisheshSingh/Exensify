class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : props.options
        }
    }
    //LIFECYCLE METHODS

    componentDidMount() {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        this.setState(() => ({options: options}));
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }   

    //Will work if a website has multiple pages
    componentWillUnmount() {
        console.log('Component will unmount');
    }

    handleRemoveAll() {
        this.setState(() => ({ options: []}));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        const val = this.state.options[random];
        alert(val);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter a valid item!'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This item already exisits'
        }
        
        this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    }

    render() { 
    const subtitleName = 'Put you life decisions in the hands of the computer';

    return (
        <div>
            <Header subtitle={subtitleName}/>
            <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
            <Options 
            opt={this.state.options} 
            handleRemoveAll={this.handleRemoveAll}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
        </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
           {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove All</button>
            {
                props.opt.map((option)=>{
                    return (
                        <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                        />
                    );
                })
            }    
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
            onClick={() => {
                props.handleDeleteOption(props.optionText);
                }
            }
            >
            Remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const value = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(value);

        this.setState(() => ({error: error}));
    }
    render() {
    return (
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit = {this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));