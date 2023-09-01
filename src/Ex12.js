import React, { useReducer } from 'react';
const initialstate = 0;
function reducer(state,action){
    if(action.type==='increment'){
        return state+1;
    }
}
const Ex12 = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
          <button onClick={()=> dispatch({type:"increment"})}>
      Click me
      </button>
      <h1>{state}</h1>
    </div>
  )
}

export default Ex12
