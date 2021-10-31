import React, { Component } from 'react';

class ToDoList extends Component {
    state = {
        newTask: "",

        todos: [
            { text: 'LEARN' },
        ]

    }

    
    completeTask = (index) => {
        const todos = [...this.state.todos];
        todos.splice(index, 1);
        this.setState({
            todos
        });

    }

    updateNewTask = (event) => {
        this.setState({
            newTask: event.target.value
        });

    }

    addTask = () => {
        const todos = [...this.state.todos];
        todos.push({
            text: this.state.newTask
        });
        this.setState({
            todos,
            newTask: ''
        });
    }

   


render(){
    return (
        <div className="App">
            <h5>comments</h5>
            {this.state.todos.map((todo, index) => <li key={index}>
                {todo.text}
                <button onClick={() => { this.completeTask(index) }}>
                    Delete
                </button>
            </li>)}

            <input value={this.state.newTask} onChange={this.updateNewTask} />
            <button onClick={this.addTask}>Add</button>
        </div>
    )
}
}

export default ToDoList;