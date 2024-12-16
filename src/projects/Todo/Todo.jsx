import {useState} from 'react';
import './Todo.css';
import TodoForm from './TodoForm';
import {TodoList} from './TodoList';
import {TodaoDate} from './TodoDate';
import { getLocalStorageTodoData, setToLocalStorageTodoData } from './TodoLocalStorage';



export const Todo = () => {
    const [task, setTask] = useState(() => getLocalStorageTodoData());

    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask);
    };

    const handleClearTodoData = () => {
        // setInputValue('');
        setTask([]);
    };

    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} = inputValue;
        // to check if the input field is empaty or not
        if (!content) return;
        // to check if the data is already existing or not
        // if (task.includes(inputValue)) return;
        const ifTodoContentMatched = task.find(
            (curTask) => curTask.content === content
        );
        if (ifTodoContentMatched) return;

        setTask((prevTask) => [...prevTask, {id, content, checked}]);
    };

    // add data t localStorage
    setToLocalStorageTodoData(task);
    //todo Date and time

    //todo handleCheckedTodo functionality
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return {...curTask, checked: !curTask.checked};
            } else {
                return curTask;
            }
        });
        setTask(updatedTask);
    };

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodaoDate />
            </header>
            <TodoForm onAddTodo={handleFormSubmit} />
            <section className="myUnOrdeList">
                <ul>
                    {task.map((curTask) => {
                        return (
                            <TodoList
                                key={curTask.id}
                                data={curTask.content}
                                checked={curTask.checked}
                                onHandleDeleteTodo={handleDeleteTodo}
                                onHandleCheckedTodo={handleCheckedTodo}
                            />
                        );
                    })}
                </ul>
            </section>
            <section className="clear-btn" onClick={handleClearTodoData}>
                Clear All
            </section>
        </section>
    );
};
