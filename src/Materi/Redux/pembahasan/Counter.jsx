
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, decrementWithCheckingAction, increment } from "../../../app/features/Counter/action";

const Counter = () => {
    let {count} = useSelector(state => state.counter)
    const dispacth = useDispatch();
    return (
        <div>
            <button onClick={() => dispacth(decrementWithCheckingAction(1)) }> - </button>
            {' '} <span> {count}</span> {' '}
            <button onClick={ () => dispacth(increment(2)) }> + </button>
        </div>
    )
}
export default Counter;