import './App.css';
import SearchBar from './components/searchbar';
import Button from "./components/SvgButton" ;
import { ReactComponent as RobotSVG } from './geekbot-svgrepo-com.svg';
import { useState } from 'react';
function App() {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  const handleClick = () => {
    setIsChatBotOpen(!isChatBotOpen)
  };


  return (
    <div className="App">
        {
          isChatBotOpen ? (
            <>
            
            <SearchBar />
            <Button onClick={handleClick} icon={RobotSVG} label="Click me" isChatBotOpen={isChatBotOpen}/>
            </>

          ) : (
            <Button onClick={handleClick} icon={RobotSVG} label="Click me" isChatBotOpen={isChatBotOpen}/>
          )

        }
    </div>
  );
}

export default App;
