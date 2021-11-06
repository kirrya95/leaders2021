import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
// import {Route, Router} from "react-router-dom";
// import Home from "./components/Home";
// import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Routes
} from "react-router-dom";

const Main = () => <h1>Hello world</h1>;

ReactDOM.render(
    // <Router>
    //     {/*<Route path='/' component={App} />*/}
    //     {/*    <Route path="/" component={App}/>*/}
    //     {/*<path component={App}/>*/}
    //     {/*<Main path="/" />*/}
    //     {/*<App path="/home"/>*/}
    // </Router>,
    <App/>,
    document.getElementById('root')
);

// const Webpages = () => {
//     return(
//         <Router>
//             <Route exact path="/" component= {App} />
//             {/*<Route path = "/mybooks" component = {MyBooks} />*/}
//             {/*<Route path = "/favorites" component = {Favorites} />*/}
//         </Router>
//     );
// };

// ReactDOM.render(
//     <Router>
//             <Route exact path="/" component= {App} />
//             {/*<Route path = "/mybooks" component = {MyBooks} />*/}
//             {/*<Route path = "/favorites" component = {Favorites} />*/}
//         </Router>,
//     document.getElementById('root')
// );

// export default Webpages;


//
// ReactDOM.render(
//   <Router>
//     <Route path='/' component={App} />
//   </Router>,
//     // <App/>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
