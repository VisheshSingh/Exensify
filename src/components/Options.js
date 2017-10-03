import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button className="button button--link" onClick={props.handleRemoveAll}>Remove All</button>
            {props.opt.length === 0 && <p>Please add an item to get started!</p>}
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

export default Options;