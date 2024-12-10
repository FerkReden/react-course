import { useEffect, useState } from "react";

import { todoService } from "../../services/todoService";
import { ITodo } from "../../interfaces/todosInterface";
import { Todo } from "./Todo";

const Todos = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        todoService.getAll().then(({data}) => setTodos(data));
    }, [])

    return (
        <div>
            {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </div>
    )
};

export { Todos };