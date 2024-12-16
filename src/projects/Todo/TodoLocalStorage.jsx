const todoKey = 'reactTodo';

export const getLocalStorageTodoData = () => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];

    return JSON.parse(rawTodos);
};

export const setToLocalStorageTodoData = (task) => {
    localStorage.setItem(todoKey, JSON.stringify(task));
};
