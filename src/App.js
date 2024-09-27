import './App.css';
import ClassCounter from './Components/ClassCounter';
import ClassCounterTwo from './Components/ClassCounterTwo';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import IntervalClassCounter from './Components/IntervalClasscounter';
import IntervalHookCounter from './Components/IntervalHookCounter';
import HookMouse from './Components/HookMouse';
import Count1 from './Components/Hook Reducer/Count1';
import Count2 from './Components/Hook Reducer/Count2';
import LoginUseState from './Components/LoginUseState';
import Home from './Components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
     {/*
     <ClassCounter />
      <ClassCounterTwo/>
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/>
      <IntervalClassCounter/>
      <IntervalHookCounter/>
      <HookMoue/>
      <Count1/>
      <Count2/>
      */} 
      <Router>
      <Routes>
        <Route path="/" element={<LoginUseState />} /> {/* Login page */}
        <Route path="/dashboard" element={<Home />} /> {/* New page */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;