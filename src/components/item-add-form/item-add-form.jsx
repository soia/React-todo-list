import React, { Component } from 'react'
import './item-add-form.css';

export class itemAddForm extends Component {

    render() {
        const { text } = this.props;
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.props.addItem('Hello World')}
                >
                    {text}
                </button>
            </div>
        );
    };
};

export default itemAddForm;
