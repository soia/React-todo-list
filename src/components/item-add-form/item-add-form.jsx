import React, { Component } from 'react'
import './item-add-form.css';

export class itemAddForm extends Component {

    state = {
        label: ""
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
          });
    };

    render() {

        const { text } = this.props;

        return (
            <form
                className="d-flex w-100 item-add-form"
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="Whats need to be done"
                    value={this.state.label}
                />

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    {text}
                </button>
            </form>
        );
    };
};

export default itemAddForm;