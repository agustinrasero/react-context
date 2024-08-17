import Banderas from './components/Banderas';
import Cuerpo from './components/Cuerpo';
import './App.css';
import Provider from './context/provider';

function App() {
  return (
    <>
    <Provider>
      <div className="banderas">
        <Banderas></Banderas>
      </div>
      <div className='cuerpo'>
        <Cuerpo></Cuerpo>
      </div>
    </Provider>
    </>
  );
}

export default App;
