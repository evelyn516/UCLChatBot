import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchbar';
import Button from "./components/SvgButton" ;
import { ReactComponent as RobotSVG } from './geekbot-svgrepo-com.svg';

function App() {


  const handleClick = () => {
    console.log('Button clicked!');
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SearchBar />
      <Button onClick={handleClick} icon={RobotSVG} label="Click me" />
    </div>
  );
}

export default App;
