import { useDispatch, useSelector } from "react-redux";

import {
    increment,
    decrement,
    incrementByAmount,
    setStep,
    toggleActive
} from "../store/slices/counterSlice";

function Counter() {

    const count = useSelector((state) => state.counter.value);
    const step = useSelector((state) => state.counter.step);
    const isActive = useSelector((state) => state.counter.isActive);

    const dispatch = useDispatch();

    return (
        <div>

            <h2>Count: {count}</h2>

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

            <button onClick={() => dispatch(incrementByAmount(5))}>
                Add 5
            </button>

            <button onClick={() => dispatch(setStep(5))}>
                Set Step to 5
            </button>

            <button onClick={() => dispatch(toggleActive())}>
                Toggle Status
            </button>

        </div>
    );
}

export default Counter