import { Todo } from "../types/todos";

interface TodosSummaryProps{
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({
    todos,
    deleteAllCompleted
} : TodosSummaryProps){
    const completedTodos = todos.filter(todo => todo.completed);

    return(
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                {completedTodos.length}/{todos.length} todos completed
            </p>
            {
                completedTodos.length > 0 && (
                    <button className="text-red-500 hover:underline text-sm font-medium" 
                    onClick={deleteAllCompleted}
                    >
                        Delete all completed
                    </button>
                )
            }
        </div>
    )
}