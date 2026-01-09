import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <h2>I am a {props.color} Car!</h2>
  );
}
function Cars(props) {
  return (
    <table>
      <tr>
        <Car color="red"/>
        <Car color="blue"/>
        <Car color="green"/>
      </tr>
      <tr>
        <Car color="red"/>
        <Car color="blue"/>
        <Car color="green"/>
      </tr>
      <tr>
        <Car color="red"/>
        <Car color="blue"/>
        <Car color="green"/>
      </tr>
    </table>
  );
}



createRoot(document.getElementById('root')).render(
  <>
    <Car color="red"/>
    <Cars/>
  </>
);