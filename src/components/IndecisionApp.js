import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
        }
    }
    //LIFECYCLE METHODS

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({options: options}));
            }
        } catch(e) {
            //Do nothing at all
        }
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