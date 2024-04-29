import StatusBar from './Components/StatusBar/StatusBar';
import TraficLight from './Components/Trafic_Lights/Trafic_Light';

function App() {
  return (
    <div className="App">
      <TraficLight  tlColorDef = "Red" tlContoroller = {<StatusBar />}/>
       
    </div>
  );
}

export default App;
