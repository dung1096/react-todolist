import React, { Component } from 'react';
import AddToDo from './AddToDo';
import ToDo from './ToDo';

class ToDoList extends Component {
    state = {
        addToDoValue: "",
        toDoList: [
            {
                id: 1,
                value: "todo 1",
                isDone: false
            },
            {
                id: 2,
                value: "todo 2",
                isDone: true
            },
            {
                id: 3,
                value: "todo 3",
                isDone: false
            }
        ]
    }

    handleDelete = (id) => {
        let toDoList = [...this.state.toDoList];
        const update = toDoList.filter((todo) => {
            return todo.id !== id
        });
        toDoList = update;
        this.setState({toDoList});
    }

    handleDone = (toDo) => {
        const toDoList = [...this.state.toDoList];
        toDoList.map((todo) => {
            if (todo.id === toDo.id) {
                todo.isDone = !toDo.isDone;
            }
            return todo;
        });
        this.setState({toDoList});
    }

    handleAdd = (value) => {
        if(value){
            let toDoList = [...this.state.toDoList]
            toDoList.push({
                    id: toDoList[toDoList.length-1].id+1,
                    value: value,
                    isDone: false
                });
            this.setState({
                    addToDoValue: "",
                    toDoList,
                })
        } else {
            console.log("Please Add Todo Text");
        }
    }

    render() {   
        return (
            <table className="table">
                <tbody>
                    {this.state.toDoList.map((todo, index) => (
                        <tr key={index}>
                            <ToDo todo={todo} deleteTodo={this.handleDelete} todoDone={this.handleDone} />
                        </tr>
                    ))}
                    <tr>
                        <AddToDo addNewTodo={this.handleAdd} addToDoValue={this.state.addToDoValue} />
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default ToDoList;
