import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./public/css/dashboard.css";
import "./public/css/features.css";
import "./public/css/index.css";
import "./public/slick/slick.css"; 
import "./public/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//khai bao bien
const a = 10;
const b = 20;

const myName = <span>Vu Duc Trung</span>;
const person = {
  name: "Vu Van Long",
  age: 30
};
function total(a,b){
  return a+b;
}
// su dung
const element = (
  <div>
    <p>Tong la: {total(a,b)}</p>
    <p>Tên bố: {myName}</p>
    <p>
      Tên con: {person.name}, Tuổi {person.age}
    </p>
  </div>
);
//hien thi
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
