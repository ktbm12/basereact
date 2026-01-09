import React from 'react';
import { createRoot } from 'react-dom/client'
import Vehicle from './Vehicle.jsx';
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

createRoot(document.getElementById('root')).render(
  <>
    <Car />
    
    <Cars />   
    

  </>
);

                    