// import React, {Component} from "react";
//
//
// import UploadService from "../services/upload-files.service";
// import Dropzone from "react-dropzone";
//
//
// const detectionResults = [
//     {
//         fileName: "open_moscow_cam_531",
//         animal: "собака",
//         color: "цвет чёрный",
//         tail: 'длинный хвост',
//         withOwner: "false",
//         Top3breed: ['Чихуахуа', "Бульдог", "Овчарка"],
//         camAdress: "Москва, ул.Первомайская д30к7",
//         datetime: "10.10.2021 в 13:15",
//         croppedFilename: "img1.png"
//     },
//     {
//         fileName: "open_moscow_cam_531",
//         animal: "собака",
//         color: "цвет чёрный",
//         tail: 'длинный хвост',
//         withOwner: "false",
//         Top3breed: ['Чихуахуа', "Бульдог", "Овчарка"],
//         camAdress: "Москва, ул.Первомайская д30к7",
//         datetime: "10.10.2021 в 13:15",
//         croppedFilename: "img1.png"
//     }];
//
//
// export default class DetectionResult extends Component {
//     constructor(props) {
//         super(props);
//         // ...
//
//         this.state = {
//             selectedFiles: undefined,
//             currentFile: undefined,
//             progress: 0,
//             message: "",
//
//             fileInfos: [],
//         };
//
//         this.downloadCSV = this.downloadCSV.bind(this);
//         // this.componentDidMount = this.componentDidMount.bind(this);
//     }
//
//     downloadCSV() {
//         alert("hello");
//     }
//
//
//     componentDidMount() {
//         UploadService.getFiles().then((response) => {
//             // console.log(response.data.data);
//
//             this.setState({
//                 fileInfos: response.data.data,
//             });
//         });
//     }
//
//     render() {
//
//         return (this.state.fileInfos.length > 0 &&
//             <div style={{minHeight: "1000px", marginTop: "100px", alignContent: "center"}}>
//                 <div style={{display: "flex"}}>
//                     <div style={{fontWeight: "600", fontSize: "20px", width: "800px"}}>Результаты распознавания</div>
//                     {/*<div style={{float: "right", width: "80%"}}>*/}
//                     <button style={{
//                         backgroundColor: "#E1FFDE", border: "3px", borderColor: "#28A745",
//                         borderRadius: "10px", alignSelf: "center", position: "relative", marginLeft: "20%",
//                         width: "200px", height: "40px"
//                     }}
//                             onClick={this.downloadCSV}>
//                         Скачать csv
//                     </button>
//                 </div>
//
//                 {/*<div style={{marginTop: "100px"}}>*/}
//                 {/*    {detectionResults.map((file, index) => (*/}
//                 {/*        <div style={{*/}
//                 {/*            width: "100%",*/}
//                 {/*            minHeight: "250px",*/}
//                 {/*            backgroundColor: "#EEEEEE",*/}
//                 {/*            borderRadius: "20px"*/}
//                 {/*        }}>*/}
//                 {/*            <p style={{paddingTop: "10px", fontWeight: "600", fontSize: "20px"}}*/}
//                 {/*               align="center">{detectionResults[0].fileName}</p>*/}
//                 {/*            <div style={{display: "flex"}}>*/}
//                 {/*                /!*{import }*!/*/}
//                 {/*                <img src={img} style={{width: "220px", paddingTop: "25px", paddingLeft: "30px"}}/>*/}
//                 {/*                <div style={{*/}
//                 {/*                    paddingLeft: "65px", paddingTop: "5px", fontWeight: "450",*/}
//                 {/*                    fontSize: "17px"*/}
//                 {/*                }}>*/}
//                 {/*                    Cобака, цвет чёрный, с длинным хвостом, без хозяина*/}
//                 {/*                </div>*/}
//
//                 {/*                <div style={{display: "flex"}}>*/}
//                 {/*                    <p>Топ-3 породы:</p><br/>*/}
//                 {/*                    {detectionResults[0].Top3breed.map((value,i) => (*/}
//                 {/*                        <div className="btn btn-success">*/}
//                 {/*                            {detectionResults[0].Top3breed[i]}*/}
//                 {/*                        </div>*/}
//
//                 {/*                    ))}*/}
//                 {/*                </div>*/}
//                 {/*            </div>*/}
//
//                 {/*        </div>*/}
//                 {/*    ))}*/}
//                 {/*</div>*/}
//
//
//                 <div className="e578_574" style={{marginTop: "150px"}} align="center">
//                     <div className="e575_421"></div>
//                     <span className="e577_441">Cобака, цвет чёрный, с длинным хвостом, без хозяина</span><span
//                     className="e578_473">Адрес камеры:</span><span className="e578_526">Время съёмки:</span><span
//                     className="e578_474">Москва, ул.Первомайская д30к7</span><span className="e578_527">10.10.2021 в 13:15</span>
//                     <div className="e578_499"><span className="e577_443">Топ-3 породы:</span>
//                         <div className="e578_444">
//                             <div className="e577_442">
//                                 <div className="e575_423"></div>
//                                 <span className="e575_422">Чихуаха</span></div>
//                             <div className="e577_429">
//                                 <div className="e577_430"></div>
//                                 <span className="e577_431">Бульдог</span></div>
//                             <div className="e577_435">
//                                 <div className="e577_436"></div>
//                                 <span className="e577_437">Овчарка</span></div>
//                         </div>
//                     </div>
//                     <span className="e575_428">open_moscow_cam_531</span>
//                     <div className="e578_498"><span className="e577_440">Оригинал</span>
//                         <img className="e577_434" src={img1}></img>
//                     </div>
//                 </div>
//
//             </div>
//         );
//     }
// }
//
