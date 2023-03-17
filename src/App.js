import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slices/todo";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const state = useSelector((state) => state);

  console.log(state.todo);

  return (
    <div className="App">
      <h1>Lis of Todos</h1>
      {state.todo.isLoading && <p>Loading...</p>}
      {state.todo.todos &&
        state.todo.todos.map((todo) => <p key={todo.id}>{todo.title}</p>)}
    </div>
  );
}
