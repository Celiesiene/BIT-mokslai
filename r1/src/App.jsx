import './app.css';
import './buttons.scss';
import Checkbox from './Components/044/Chechbox.jsx';
import Mygtukai from './Components/044/Mygtukai';
import Radio from './Components/044/Radio.jsx';
import Select from './Components/044/Select.jsx';
import Text from './Components/044/Text.jsx';
 
function App() {
  return (
    <div className="app">
      <header className="app-header">
 <Mygtukai/>
 <Text/>
 <Select/>
 <Checkbox/>
 <Radio/>
      </header>
    </div>
  );
}
 
export default App;
 