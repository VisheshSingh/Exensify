class IndecisionApp extends React.Component {
    render() {
    const titleName = 'Indecision App';    
    const subtitleName = 'Put you life decisions in the hands of the computer';
    const options = ['one','two','three'];
    return (
        <div>
            <Header title={titleName} subtitle={subtitleName}/>
            <Action/>
            <Options opt={options}/>
            <AddOption/>
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
    handleClick(){
        alert('Handle Click!');
    }
    render() {
    return (
        <div>
            <button onClick={this.handleClick}>What should I do?</button>
        </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll(){
        console.log(this.props.opt);
    }
    render() {
    return (
        <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
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
    handleAddOption(e) {
        e.preventDefault();
        const value = e.target.elements.option.value.trim();

        if(value){
            alert(value);
            e.target.elements.option.value = '';
        }
    }
    render() {
    return (
        <div>
            <form onSubmit = {this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));