import TodoAdd from "./components/todo/TodoAdd";
import TodoList from "./components/todo/TodoList";
import { TodoProvider } from "./contexts/todoProvider";
// 아래 provider 에 의해서 state, action 전달
function App() {
  return (
    <TodoProvider>
      <TodoAdd />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
