import { useDispatch, useSelector } from "react-redux";

import {
    increment,
    decrement,
    setStep,
    resetStep,
    toggleActive
} from "../store/slices/counterSlice";

function Counter() {

    const count = useSelector((state) => state.counter.value);
    const step = useSelector((state) => state.counter.step);
    const isActive = useSelector((state) => state.counter.isActive);

    const dispatch = useDispatch();

    return (
        <div>

            <h2>Counter</h2>

            <h3>Count: {count}</h3>

            <p>Step: {step}</p>

            <p>
                Status: {isActive ? "Active" : "Inactive"}
            </p>

            <button onClick={() => dispatch(increment())}>
                +
            </button>

            <button onClick={() => dispatch(decrement())}>
                -
            </button>

            <button onClick={() => dispatch(setStep(5))}>
                Set Step to 5
            </button>

            <button onClick={() => dispatch(resetStep())}>
                Reset Step to 1
            </button>

            <button onClick={() => dispatch(toggleActive())}>
                Toggle Status
            </button>

        </div>
    );
}

export default Counter;