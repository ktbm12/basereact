import React from 'react';
import { createRoot } from 'react-dom/client'
import Car from './Vehicle.jsx';

class Cars extends React.Component {
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

                    