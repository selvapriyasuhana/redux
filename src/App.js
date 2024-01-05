import{compose ,pipe}from 'lodash/fp'
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import counter from './counter';


/*function presslike() {
  return "thanks a lot"
}
function SayThanks(fn){
 return console .log((fn))
}

 SayThanks(presslike) */
 /*let input =  "   subscribe    ";
 let output="<div>"+ input.trim() +"</div>";
 //let output = `<div>${input.trim()}</div>`;


const trim = str=>str.trim()
const wrapInDiv = str =>`<div>$str</div>`

const transform =pipe(trim,wrapInDiv)
console.log (transform(input))
 function App(){
 }*/
 const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Simple Redux Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
};
 
export default App;
