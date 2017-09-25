class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
        }
    }

    handleRemoveAll() {
        this.setState(() => {
            return {
                options:[]
            };
        });
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
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    render() {
    const titleName = 'Indecision App';    
    const subtitleName = 'Put you life decisions in the hands of the computer';

    return (
        <div>
            <Header title={titleName} subtitle={subtitleName}/>
            <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
            <Options opt={this.state.options} handleRemoveAll={this.handleRemoveAll}/>
            <AddOption handleAddOption={this.handleAddOption}/>
        </div>
        )
    }
}

class Header extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
    return (
        <div>
            <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
        </div>
        );
    }
}

class Options extends React.Component {
    render() {
    return (
        <div>
            <button onClick={this.props.handleRemoveAll}>Remove All</button>
            {
                this.props.opt.map((option)=>{
                    return <Option key={option} optionText={option}/>
                })
            }    
        </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
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

        this.setState(() => {
            return {
                error: error
            };
        });
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