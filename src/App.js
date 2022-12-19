import { useState } from 'react';
import './App.css';

function App() {
  const [speed, setSpeed] = useState(0);
  const [speedLimit, setSpeedLimit] = useState(130);

  return (
    <div className="App">
      <section className='mid-page'>
        <div className='main-circle'>
          <div className={`${+speed > +speedLimit ? 'warning' : ''}`}>{speed}</div>
          <div className='measurment'>km/h</div>
          <div className={`speed-circle${+speed > +speedLimit ? ' on' : ''}`}>{speedLimit}</div>
        </div>
      </section>
      <section className='controls'>
        <div>
          <label>Speed({speed})</label>
          <input 
            type='range' min={0} max={180} id='speed-slider' value={speed} 
            onChange={(e) => setSpeed(e.target.value)} 
          />
          <label>Speed limit({speedLimit})</label>
          <input 
            type='range' min={10} max={130} id='speed-limit-slider' value={speedLimit} step={5}
            onChange={(e) => setSpeedLimit(e.target.value)} 
          />
        </div>
      </section>
    </div>
  );
}

export default App;
