import React, {useState, useEffect, Component} from "react";
import './App.css';
// import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css"

import logo from './/site-images/logo.png';
// import { Router, Route } from "react-router-dom";


import UploadFiles from "./components/upload-files.component";
import DetectionResult from "./components/detection-result.component";
// import ReactLoading from 'react-loading';
// import ContentLoader, {Facebook} from 'react-content-loader'
// import {ClipLoader} from "react-spinners";


import {BrowserRouter, Route, Router, Switch} from 'react-router-dom'

// import Home from "./components/Home";
import UploadPage from "./components/upload-page";

//
// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           {/*<Root>*/}
//             <Switch>
//               <Route exact path="/" component={Home} />
//               {/*<Route path="/user" component={User} />*/}
//               {/*<Route path="/home" component={Home} />*/}
//             </Switch>
//           {/*</Root>*/}
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// let routes = (
//   <div>
//     <Route path="/about">
//       <App />
//     </Route>
//     <Route path="/:user">
//       {/*<User />*/}
//     </Route>
//     <Route>
//       {/*<NoMatch />*/}
//     </Route>
//   </div>
// );


// import { Switch, Route } from 'react-router-dom'


const Main = () => <h1>Hello world</h1>;


function App() {
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     // setTimeout(()=> {
    //     //     setLoading(false);
    //     // }, 1000)
    //
    // }, [])

    return (
        <UploadPage/>)
        // <div>
        //     <div className="headerline flex">
        //         <img src={logo} alt="123" style={{width: "120px", margin: "1%"}}/>
        //         <div className="mt-3">
        //             <p>Лидеры цифровой трансформации</p>
        //             <p>Система распознавания животных</p>
        //         </div>
        //
        //         <p className="mx-auto mt-3">Команда <p className="text-red-500">cucumber</p></p>
        //     </div>
        //     <p className="text-center my-20">Загрузите снимки с камер наблюдения<br/>После нажатия на кнопку вы увидите
        //         результаты по каждому снимку</p>
        //     <UploadFiles/>
        //
        //     {/*<div className="py-10">*/}
        //     {/*    <div className=" max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">*/}
        //     {/*        <div className="md:flex" >*/}
        //     {/*            <div className="md:flex-shrink-0 my-auto md:ml-2 ">*/}
        //     {/*                <img className="h-48 w-full object-cover md:h-3/5 md:w-48 my-auto rounded"*/}
        //     {/*                     src="http://localhost:3000/cropped/test0.jpg"*/}
        //     {/*                     alt="Man looking at item at a store"/>*/}
        //     {/*            </div>*/}
        //     {/*            <div className="p-8">*/}
        //     {/*                <div className=" tracking-wide text-sm text-green-500 font-semibold">open_moscow_cam_531*/}
        //     {/*                </div>*/}
        //     {/*                <p className="block mt-2 text-lg leading-tight font-medium text-black">*/}
        //     {/*                    Cобака, цвет чёрный, с длинным хвостом, без хозяина</p>*/}
        //     {/*                <div className="flex">*/}
        //     {/*                    <p className="mt-2 text-gray-500">*/}
        //     {/*                        Топ-3 породы:*/}
        //     {/*                    </p>*/}
        //     {/*                    <p className="ml-1 mt-2 mx-auto px-2 rounded-3 "*/}
        //     {/*                       >Чихуахуа</p>*/}
        //     {/*                    <p className="mt-2 mx-auto px-2 rounded-3 "*/}
        //     {/*                       >Бульдог</p>*/}
        //     {/*                    <p className="mt-2 mx-auto px-2 rounded-3 "*/}
        //     {/*                       >Овчарка</p>*/}
        //     {/*                </div>*/}
        //     {/*                <div className="flex">*/}
        //     {/*                    <p className="mt-3 tracking-wide text-sm font-semibold">Адрес камеры:</p>*/}
        //     {/*                    <p className="ml-4 mt-3 tracking-wide text-sm">Москва, ул.Первомайская д30к7</p>*/}
        //     {/*                </div>*/}
        //     {/*                <div className="flex">*/}
        //     {/*                    <p className="mt-3 tracking-wide text-sm font-semibold">Время съёмки:</p>*/}
        //     {/*                    <p className="ml-4 mt-3 tracking-wide text-sm">10.10.2021 в 13:15</p>*/}
        //     {/*                </div>*/}
        //     {/*            </div>*/}
        //     {/*        </div>*/}
        //     {/*    </div>*/}
        //     {/*</div>*/}
        //
        // </div>)

    // <div className="py-5 mx-auto">
    //     <div className="w-4/5 mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
    //         <div className="w-100 my-5  mx-auto" >
    //             <img className="  mr-0 rounded-lg object-cover md:w-2/5 sm:w-3/5  mx-auto"
    //                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    //                  alt="photo"/>
    //             <p className="text-center mt-2">Оригинал</p>
    //         </div>
    //         <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
    //             <p className="text-xl text-gray-700 font-bold text-center">open_moscow_cam_531</p>
    //             <p className="text-base text-gray-400 font-normal ">Software Engineer</p>
    //             <p className="text-base leading-relaxed text-gray-500 font-normal">
    //                 Cобака, цвет чёрный, с длинным хвостом, без хозяина</p>
    //             <div className="flex justify-start space-x-2">
    //                 <a href="#" className="text-gray-500 hover:text-gray-600">
    //                     <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
    //
    //                     </svg>
    //                 </a>
    //                 <a href="#" className="text-gray-500 hover:text-gray-600">
    //                     <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
    //
    //                     </svg>
    //                 </a>
    //                 <a href="#" className="text-gray-500 hover:text-gray-600">
    //                     <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
    //
    //                     </svg>
    //                 </a>
    //                 <a href="#" className="text-gray-500 hover:text-gray-600">
    //                     <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
    //
    //                     </svg>
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // )

    {/*return (*/
    }
    {/*    <div>*/
    }
    {/*        {loading ?*/
    }
    {/*            <ClipLoader color="green"/>*/
    }
    {/*            : ''*/
    }
    {/*        }*/
    }
    {/*        <div className="container" style={{width: "1000px", marginTop: "80px"}}>*/
    }
    {/*            <div className="headers" style={{*/
    }
    {/*                width: "1000px", height: "100px", display: "flex",*/
    }
    {/*                marginBottom: "120px"*/
    }
    {/*            }}>*/
    }
    {/*                <img src={logo} alt="123" style={{width: "120px", margin: "2%"}}/>*/
    }

    {/*                <div style={{display: "", paddingTop: "2%", width: "50%"}}>*/
    }
    {/*                    Лидеры цифровой трансформации<br/>*/
    }
    {/*                    Система распозначания животных*/
    }
    {/*                </div>*/
    }
    {/*                <div style={{position: "relative", marginLeft: "20%", marginTop: "2%"}}>*/
    }
    {/*                    Команда <div style={{color: "red", fontStyle: "italic", fontWeight: "600"}}>cucumber</div>*/
    }
    {/*                </div>*/
    }


    {/*            </div>*/
    }
    {/*            /!*<img src="../logo.svg"/>*!/*/
    }
    {/*            <div className="center " style={{margin: "5% 0", width: ""}}>*/
    }
    {/*                <h3></h3>*/
    }
    {/*                <h4 align="center">Загрузите снимки с камер наблюдения.<br></br>После нажатия на кнопку вы увидите*/
    }
    {/*                    результаты по каждому снимку</h4>*/
    }
    {/*            </div>*/
    }


    {/*            /!*<DetectionResult/>*!/*/
    }
    {/*        </div>*/
    }
    {/*        <UploadFiles/>*/
    }
    {/*        /!*<ContentLoader viewBox="0 0 380 70">*!/*/
    }
    {/*        /!*    /!* Only SVG shapes *!/≠*!/*/
    }
    {/*        /!*    <rect x="0" y="0" rx="5" ry="5" width="70" height="70"/>*!/*/
    }
    {/*        /!*    <rect x="80" y="17" rx="4" ry="4" width="300" height="13"/>*!/*/
    }
    {/*        /!*    <rect x="80" y="40" rx="3" ry="3" width="250" height="10"/>*!/*/
    }
    {/*        /!*</ContentLoader>*!/*/
    }
    {/*        /!*<ReactLoading color='#ffffff' height={667} width={375} />*!/*/
    }
    {/*    </div>);*/
    }
}

export default App;


// const App = () => {

//         const [drag, setDrag] = useState(true);
//
//         function dragStartHandler(e) {
//             e.preventDefault();
//             setDrag(true);
//         }
//
//         function dragLeaveHandler(e) {
//             e.preventDefault();
//             setDrag(false);
//         }
//
//         function onDropHandler(e) {
//             e.preventDefault();
//             setDrag(false);
//
//             let files = [...e.dataTransfer.files];
//             console.log(files);
//             const formData = new FormData();
//             for (let i = 0; i < files.length; i++) {
//                 formData.append('file', files[i], files[i].name);
//             }
//
//             const URL = 'http://localhost:8080';
//             console.log('here');
//
//             axios.post(URL, formData, {
//                 headers: {
//                     'accept': 'application/json',
//                     'Accept-Language': 'en-US,en;q=0.8',
//                     'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
//                 }
//             });
//         }
//
//
//         return (
//             <div className='app'>
//                 {drag
//                     ? <div className='drop-area'
//                            onDragStart={e => dragStartHandler(e)}
//                            onDragLeave={e => dragLeaveHandler(e)}
//                            onDragOver={e => dragStartHandler(e)}
//                            onDrop={e => onDropHandler(e)}
//                     >Отпустите файлы, чтобы загрузить их</div>
//                     : <div
//                         onDragStart={e => dragStartHandler(e)}
//                         onDragLeave={e => dragLeaveHandler(e)}
//                         onDragOver={e => dragStartHandler(e)}
//                     >Перетащите файлы, чтобы загрузить их</div>}
//             </div>
//         )
//     }
// ;
//
//
// export default App;
