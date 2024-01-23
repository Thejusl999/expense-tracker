import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../../redux-store/counter';

const Counter=()=>{
    // const counter=useSelector(state=>state.counter);
    const counter=useSelector(state=>state.counter.counter);
    const dispatch=useDispatch();
    const show=useSelector(state=>state.showCounter);
    
    const incrementHandler=()=>{
        // dispatch({type:'increment'});
        dispatch(counterActions.increment());
    }
    const decrementHandler=()=>{
        dispatch({type:'decrement'});
        dispatch(counterActions.decrement());
    }

    const increaseHandler=()=>{
        // dispatch({type:'increase',amount:5});
        dispatch(counterActions.increase(5));  //REDUX TOOLKIT automatically creates- {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
        //Therefore, use action.payload now in index.js instead of action.amount as amount no longer exists
    }
    const decreaseHandler=()=>{
        // dispatch({type:'decrease',amount:5});
        dispatch(counterActions.decrease(5));
    }
    const toggleHandler=()=>{
        // dispatch({type:'toggle'});
        dispatch(counterActions.toggle());
    }
    return (
        <>
            <h3>Redux Counter</h3>
            {show&&<><div>
                <h3>{counter}</h3>
                <Button variant='dark' className='me-3' onClick={incrementHandler}>INCREMENT</Button>
                <Button variant='dark' onClick={decrementHandler}>DECREMENT</Button>
            </div><br></br>
            <div>
                <Button variant='dark' className='me-3' onClick={increaseHandler}>INCREMENT BY 5</Button>
                <Button variant='dark' onClick={decreaseHandler}>DECREMENT BY 5</Button>
            </div><br></br></>}
            <Button variant='primary' onClick={toggleHandler}>TOGGLE COUNTER</Button>
        </>
    );
}
export default Counter;