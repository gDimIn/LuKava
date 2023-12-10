import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

let inc = 0;

function TestApp() {

  return (  <div className='btnClick'>
    <button onClick={increment}>ClickMe</button>
    <label id='label'> {inc} </label>
    </div> )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
//const label = ReactDOM.document.getElementById('label');
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);*/
root.render(<TestApp/>);

function increment(){
  console.log(inc);
  inc= inc + 1;
  root.render(<TestApp/>);
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
