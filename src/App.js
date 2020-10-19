import React from 'react';
import './App.css';

//import component
import Header from './component/Header';
import MainGrid from './component/MainGrid';
//import chart
import {Bar} from 'react-chartjs-2';
// import Materi ui 
import {Button} from '@material-ui/core/';

//import context
import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <div>
     <GlobalProvider >
    <Header/>
    <MainGrid/>
    </GlobalProvider>
    </div>
  );
}

export default App;
