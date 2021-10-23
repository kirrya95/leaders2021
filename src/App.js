import React, {useState} from "react";
import './App.css';
// import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css"

import logo from './/site-images/logo.png';


import UploadFiles from "./components/upload-files.component";
import DetectionResult from "./components/detection-result.component";


function App() {

    return (
        <div>

            <div className="container" style={{width: "1000px", marginTop: "80px"}}>
                <div className="headers" style={{
                    width: "1000px", height: "100px", display: "flex",
                    marginBottom: "120px"
                }}>
                    <img src={logo} alt="123" style={{width: "120px", margin: "2%"}}/>

                    <div style={{display: "", paddingTop: "2%", width: "50%"}}>
                        Лидеры цифровой трансформации<br/>
                        Система распозначания животных
                    </div>
                    <div style={{position: "relative", marginLeft: "20%", marginTop: "2%"}}>
                        Команда <div style={{color: "red", fontStyle: "italic", fontWeight: "600"}}>cucumber</div>
                    </div>


                </div>
                {/*<img src="../logo.svg"/>*/}
                <div style={{margin: "5% 0", width: ""}}>
                    <h3></h3>
                    <h4 align="center">Загрузите снимки с камер наблюдения.<br></br>После нажатия на кнопку вы увидите
                        результаты по каждому снимку</h4>
                </div>


                {/*<DetectionResult/>*/}
            </div>
            <UploadFiles/>
        </div>);
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
