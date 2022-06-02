import React, { Component } from 'react';
import './App.css';

function Header(props) {
  return (
    <h1>{props.name}'s Cloud Kitchen</h1>
  )
}

function Tagline(props) {
  return (
    <p>we serve the <b>{props.highlight}</b> food in whitefield.</p>
  )
}

function Menu(props) {
  return (
    <section>
      <ul>
        {props.dishes.map((dish,idx) => (
          <li key={idx}>{dish}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p> Copyrights: {props.year}</p>
    </footer>
  )
}

const dishes = [
  'Kadhi Panner',
  'Rajma',
  'Chole',
  'Aloo Gobhi',
  'Bhindi',
  'Kadhi'
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Priyanshu"/>
        <Tagline highlight="tomie's full" />
        <Menu dishes={dishes} />
        <Footer year={new Date().getFullYear()} />
      </div>
    );
  }
}

export default App;
