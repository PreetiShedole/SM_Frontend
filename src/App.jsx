import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Functionalities from './components/Functionalities';
import data from './components/Data';
import LatestUpdates from './components/LatestUpdates';
import LatestUpdatesData from './components/LatestUpdateData';
import Footer from './components/Footer';


function App() {
  const [functionalities, setFunctionalities] = useState(data);
  const [latestUpdates, setLatestUpdates] = useState(LatestUpdatesData);
  return (<>
  <Navbar/>
  <Home/>
  
  <Functionalities functionalities={functionalities}></Functionalities>

  
  <LatestUpdates latestUpdates={latestUpdates}></LatestUpdates>
  <Footer></Footer>
  
  
</>)
}

export default App;