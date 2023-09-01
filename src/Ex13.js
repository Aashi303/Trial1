import React,{useReducer} from 'react'
function reducer(state,action){
    return state+2;
}

const Ex13 = () => {
    const [state,dispatch]=useReducer(reducer,20);
  return (
    <div>
      <h1 align="center">{state}</h1>
        <button onClick={()=>dispatch(5)}>Add</button>
    </div>
  )
}

export default Ex13
