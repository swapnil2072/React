import Todos from "./components/Todos";
import "./App.css";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
    const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

    const addTodoHandler = (todoText: string) => {};
    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler}></NewTodo>
            <Todos items={todos}></Todos>
        </div>
    );
}

export default App;
