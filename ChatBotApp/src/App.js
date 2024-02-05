import './App.css';
import SearchAll from './components/handleInput';
import Button from "./components/SvgButton" ;
import { useState } from 'react';
import { ReactComponent as RobotSVG } from './assests/chatbot_icon.svg';
import { ReactComponent as CrossIcon } from './assests/cross.svg';
function App() {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  const handleClick = () => {
    setIsChatBotOpen(!isChatBotOpen)
  };
  const handleChatBoxToggle = () => {
    setIsChatBotOpen(!isChatBotOpen)
  };


  return (
    <div className="App">
        {
          isChatBotOpen ? (
            <>
            
              <SearchAll />
              <Button onClick={handleClick} icon={RobotSVG} sub_icon={CrossIcon} isChatBotOpen={handleChatBoxToggle}/>
            </>

          ) : (
            <Button onClick={handleClick} icon={RobotSVG}  isChatBotOpen={isChatBotOpen}/>
          )
}
    </div>
  );
}
export default App;
