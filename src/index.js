import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function emmitComment(id) {
  setInterval(function () {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Content comment of lesson ${id}`
      })
    )
  }, 2000)
}
emmitComment(1)
emmitComment(2)
emmitComment(3)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
