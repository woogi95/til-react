import { useReducer } from "react";
import { CounterDispatchContext, CounterStateContext } from "./counterContext";
// 1. 기본값
const initialState = { count: 0 };
// 2. 리듀서 함수
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return;
  }
}
// Context Provider 생성
export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterStateContext value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext>
  );
}
