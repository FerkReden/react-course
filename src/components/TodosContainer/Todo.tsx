import { FC } from "react";

import { ITodo } from "../../interfaces/todosInterface";

interface IProps {
    todo: ITodo
}

const Todo: FC<IProps> = ({todo}) => {

    const { id, title, completed } = todo;

    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Completed: {completed}</div>
        </div>
    )
};

export { Todo };