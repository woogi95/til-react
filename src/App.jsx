import { useAxios } from "./hooks/useAxios";
import useComponent from "./hooks/useComponent";
import { useCount } from "./hooks/useCount";
import { useLogin } from "./hooks/useLogin";

function App() {
  const { count, add, minus } = useCount();
  const { data, error, loading } = useAxios();
  const { data, loading, error, isLogin, login } = useLogin();
  const windowSize = useComponent();
  return (
    <div>
      <h1>카운트 : {count}</h1>
      <button onClick={() => add()}>증가</button>
      <button onClick={() => minus()}>감소</button>
    </div>
  );
}

export default App;
