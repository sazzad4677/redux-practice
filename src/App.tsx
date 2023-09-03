import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex gap-x-2 justify-center">
        <div>
          <button
            className="border rounded-md border-green-500 px-2 py-3"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="border rounded-md border-green-500 px-2 py-3"
            onClick={() => dispatch(incrementByAmount(10))}
          >
            Increment By Value
          </button>
        </div>
        <div className="border rounded-md px-2 py-3">{count}</div>
        <div>
          <button
            className="border rounded-md border-red-500 px-2 py-3"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
