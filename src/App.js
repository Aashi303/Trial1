import logo from './logo.svg';
import './App.css';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Form from './Form';
import Event1 from './Event1';
import Event2 from './Event2';
import Event3 from './Event3';
import Map1 from './Map1';
import Filter1 from './Filter1';
import Filter2 from './Filter2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Filter3 from './Filter3';
import Filter4 from './Filter4';
import Ex5 from './Ex5';
import Ex6 from './Ex6';
import Ex7 from './Ex7';
import Ex8 from './Ex8';
import Ex9 from './Ex9';
import Main1 from './Components1/Main1';
import Ex10 from './Ex10';
import Ex11 from './Ex11';
import Ex12 from './Ex12';
import Ex13 from './Ex13';
import Ex14 from './Ex14';
import Ex15 from './Ex15';
import Main3 from './Components4/Main3';
import Ex16 from './Ex16';
import Ex17 from './Ex17';
import Ex18 from './Ex18';
import Form1 from './Components5/Form1';
import Form2 from './Components5/Form2';
import Form3 from './Components5/Form3';
import Form4 from './Components5/Form4';
import Home from './Components5/Home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import One from './Exam/One';
import Three from './Exam/Three';
import Ex19 from './Ex19';
import Ex20 from './Ex20';
import Ex21 from './Ex21';
import Ex22 from './Ex22';

function App() {
//   var a = "Hello";
//   var b=8;
//   const obj1={Name:"Hiyan",Age:32,Branch:["CSE","CE","IT"]}
// const str = JSON.stringify(obj1);
const numbers = [1, 2, 3, 4, 5, 6];
const modifiedNumbers = numbers
  .filter(number => number % 2 === 0)
  .map(filteredNumber => filteredNumber * 2);


  return (
    <div className="App">
     
     {/* <h1> Hello world!!</h1> */}
     {/* <Ex1/> */}
     {/* <Ex2 name={n} rollnum="101" marks="20" /> 
     <Ex2 name="DEF" rollnum="102" marks="16" /> 
     <Ex2 name="GHI" rollnum="103" marks="22.5" /> */}
     {/* <Form/> */}
     {/* <Event1/>
     <Event2 /> */}
     {/* <Event3 /> */}
     {/* <Map1 /> */}
     {/* <Filter1 /> */}
     {/* <Filter2 /> */}
     {/* <Ex3 /> */}
     {/* <Ex4 /> */}
     <Filter3 />
     {/* <Filter4 /> */}
     {/* <Ex5 />
     <Ex6 />
     <Ex7 />
     <Ex8 />
     <Ex9 /> */}
     {/* <Main1/> */}
     {/* <Ex10/> */}
     {/* <Ex11/> */}
     {/* <Ex12/> */}
     {/* <Ex13/> */}
     {/* <Ex14/> */}
     {/* <Ex15 /> */}
     {/* <Main3/> */}
     {/* <Ex16/> */}
     {/* <Ex17/> */}
     {/* <Ex18/> */}
     {/* <Form1/> */}
     {/* <Form2/> */}
     {/* <Form3/> */}
     {/* <Router>
    <Routes> 
      
      <Route exact path="/" element={<Form4/>} />
      <Route exact path="/Home" element={<Home/>} />

      </Routes>
    </Router> */}
    {/* <One/> */}
    {/* <Three/> */}
    {/* <Ex19/> */}
    {/* <Ex21 Name={obj1} /> */}
    {/* <h1 style={{backgroundColor:"red"}}> The addition is: {a+2+b} </h1> */}
    {/* <ul>
      {modifiedNumbers.map((number) => (
        <li>{number}</li>
      ))}
    </ul> */}
    {/* <Ex22/> */}
    {/* <Ex20/> */}

    </div>
  );
}

export default App;
