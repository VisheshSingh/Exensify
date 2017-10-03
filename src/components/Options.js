import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header-title">Your Options</h3>
                <button className="button button--link" onClick={props.handleRemoveAll}>Remove All</button>
            </div>
            {props.opt.length === 0 && <p className="widget-message">Please add an item to get started!</p>}
            {
                props.opt.map((option, index)=>{
                    return (
                        <Option 
                        key={option} 
                        count={index + 1}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                        />
                    );
                })
            }    
        </div>
    );
}

export default Options;