import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';

class AddToDo extends Component {
    state = {
        defaultValue: "",
        value: this.props.addToDoValue
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    clearInput = () => {
        document.getElementById("todoValue").value = "";
        this.setState({value:""});
    }

    addTodo = () => {
        this.props.addNewTodo(this.state.value);
        this.clearInput();
    }
    render() {
        return (
            <Fragment>
            <td colSpan="3">
                <input type="text" className="form-control" id="todoValue" placeholder="ToDo" onChange={this.handleChange} />
            </td>
            <td className="text-end">
                <button onClick={this.addTodo} className="btn btn-outline-success" type="button">Add New ToDo</button>
            </td>
            </Fragment>
        );
    }
}

export default AddToDo;
