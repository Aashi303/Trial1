import React, { useReducer } from 'react';

const initialState = {
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
const Ex14 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted")
    // You can handle form submission logic here
    console.log('Submitted:', state);
  };
  return (
    <div>
       <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={state.email} onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })} required/>

        <label>Password:</label>
        <input type="password" value={state.password} onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })} required/>

        <button type="submit">Login</button>
       
       
      </form>
      <h1>The Email id is: {state.email}</h1>
    </div>
  )
}

export default Ex14
