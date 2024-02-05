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
        
      <SearchBar />
      <Button onClick={handleClick} icon={RobotSVG} label="Click me" />
    </div>
  );
}

export default App;
