import React,{useReducer} from "react";

function reducer(state,action){

    if(action.type==="increment"){
        return state+1;
    }
    return state;
}

function Counter(){

    const[count,dispatch]=useReducer(reducer,120);

    return(
        <>
            <div>Counter</div>
            <button onClick={()=>dispatch({type:"increment"})}>Click</button>

            <p>Count:{count}</p>
        </>
    )
}

export default Counter;