import React, { useReducer } from 'react'

const Counter = () => {

    const value = {
        count: 0
    };
    function reducer(state, action) {
        switch (action.type) {
            case "add+":
                return{count:state.count+1}
            case "sub-":
        return{count:state.count-1}


            default:
                return state;
            
        }
    }
     const [state, dispatch] = useReducer(reducer, value);

    return (
        <div>
<h2>count:{state.count}</h2>
<button onClick={()=>dispatch({type:"add+"})}>add</button>
<button onClick={()=>dispatch({type:"sub-"})}>add</button>
        </div>
    )
}

export default Counter
