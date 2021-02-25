import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [nayoks, setNayoks] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setNayoks(data));
  }, []);

  // const nayoks = [{name: 'Shuvo', age: 26}, { name: 'Deepjol', age: 51}, {name: 'Siam', age: 25}, {name: 'Bappi', age: 29}];

  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {nayoks.map((nk) => (
        <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>
      ))}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h2>Number of Movies: {count}</h2>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
      <MovieDisplay movies={count + 8}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
    </div>
  );
}
function MovieDisplay(props) {
  return <h4>Movies I have acted: {props.movies}</h4>;
}
function Nayok(props) {
  // console.log(props)
  const nayokStyle = {
    border: "5px solid yellow",
    margin: "15px",
  };
  return (
    <div style={nayokStyle}>
      <h1> I am Actor: {props.name}</h1>
      <h3>I have done 5 movies in {props.age} years</h3>
    </div>
  );
}

export default App;
