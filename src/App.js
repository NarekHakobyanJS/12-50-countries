import { API } from './api/api';
import { useEffect, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { reducer, initState } from './store/store';
import Home from './pages/Home';
import './App.css';
import Header from './components/Header/Header';

function App() {

  const [state, dispatch] = useReducer(reducer, initState)
  
  useEffect(() => {
   API.getAll(dispatch)
  }, [])

  
  return (
    <div className="App">
      <Header dispatch={dispatch}/>
      <Routes>
        <Route path='/' element={<Home countries={state.countries}/> }/>
      </Routes>
    </div>
  );
}

export default App;
