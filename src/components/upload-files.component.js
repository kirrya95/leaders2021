import React, {Component, useEffect, useState} from "react";
import Dropzone from "react-dropzone";
// import
import UploadService from "../services/upload-files.service";
// import Card from '../components/card'

// import Ap from App

import detectionResults from "../components/detection-result.component"


// import App from "../App";

// function SetupLoading () {
//     useEffect(() => {
//         App.setLoading(true);
//         // setTimeout(()=> {
//         //     setLoading(false);
//         // }, 1000)
//
//     }, [])
// }

    // function Card(value, index) {
    //     // console.log(index.data);
    //     // alert(index);
    //     // await new Promise(r => setTimeout(r, 50000));
    //     let y_pos = 150 + 500 * index + 'px';
    //     let margin_l = (window.screen.width - 1049) / 2
    //     // alert(value['src_file'])
    //     // console.log((window.screen.width))
    //     return (<div className="card" key={index} style={{
    //         minHeight: "150px", width: "80%", left: "10%",
    //         borderRadius: "15px", backgroundColor: "#EEEEEE"
    //     }}>
    //         <div className="title" align="center" style={{fontWeight: "600", marginTop: "1%", fontSize: "20px"}}>
    //             Название файла: {value['fileName']}</div>
    //         {/*<div className="img_container" style={{float: "left", marginLeft: "0%", marginTop: "0%", marginRight: "0"}}>*/}
    //         {/*    <img className="" style={{*/}
    //         {/*        position: "relative",*/}
    //         {/*        borderRadius: "10px",*/}
    //         {/*        height: '10%',*/}
    //         {/*        width: "15%",*/}
    //         {/*        marginTop: "5%",*/}
    //         {/*        marginBottom: "1%",*/}
    //         {/*        marginLeft: "5%"*/}
    //         {/*    }}*/}
    //         {/*         src={'http://localhost:3000/cropped/' + 'test' + index + '.jpg'}/>*/}
    //         {/*    <div style={{position: "relative", marginLeft: "10%", marginBottom: "5%"}}>*/}
    //         {/*        <a target='Оригинал' style={{color: "green", fontWeight: "600"}}*/}
    //         {/*           href={'http://localhost:5000/cropped/' + 'test' + index + '.jpg'}>Оригинал</a>*/}
    //         {/*    </div>*/}
    //         {/*</div>*/}
    //         <div style={{float: "left", marginLeft: "0%", marginTop: "2%", marginRight: "0"}}>
    //             <div style={{float: "left", marginRight: "-15%"}}><img className="" style={{
    //                 position: "relative",
    //                 borderRadius: "10px",
    //                 height: '25%',
    //                 width: "35%",
    //                 marginTop: "5%",
    //                 marginBottom: "1%",
    //                 marginLeft: "10%",
    //                 marginRight: "0%"
    //             }}
    //                                                                    src={'http://localhost:3000/cropped/' + 'test' + index + '.jpg'}/>
    //                 <div style={{position: "relative", marginLeft: "20%", marginBottom: "5%"}}>
    //                     <a target='Оригинал' style={{color: "green", fontWeight: "600"}}
    //                        href={'http://localhost:5000/cropped/' + 'test' + index + '.jpg'}>Оригинал</a>
    //                 </div>
    //             </div>
    //             <div style={{
    //                 float: "left",
    //                 width: "500px",
    //                 height: "100px",
    //                 marginTop: "2%"
    //             }}>DOG, {'color: ' + value.color}, {'tail: ' + value.tail}, без хозяина
    //             </div>
    //             <div style={{float: "left", width: "100px", height: "100px", marginTop: "2%"}}>content++</div>
    //         </div>
    //         {/*</div>*/}
    //
    //
    //     </div>)
    // }


function renderDetected(value, index) {
    // console.log(index.data);
    // alert(index);
    // await new Promise(r => setTimeout(r, 50000));
    let y_pos = 150 + 500 * index + 'px';
    let margin_l = (window.screen.width - 1049) / 2
    // alert(value['src_file'])
    // console.log((window.screen.width))

    return (<div className="e578_574" key={index} style={{marginTop: y_pos, marginLeft: "10%"}}>
        <div className="e575_421"></div>
        <span
            className="e577_441">DOG, {'color: ' + value.color}, {'tail: ' + value.tail}, без хозяина</span><span
        className="e578_473">Адрес камеры:</span><span
        className="e578_526">Время съёмки:</span><span
        className="e578_474">{value.cam_adress}</span><span className="e578_527">{value['time_photographed']}</span>
        <div className="e578_499"><span className="e577_443">Топ-3 породы:</span>
            <div className="e578_444">
                <div className="e577_442">
                    <div className="e575_423"></div>
                    <span className="e575_422">{value['top3Breed'][0]}</span></div>
                <div className="e577_429">
                    <div className="e577_430"></div>
                    <span className="e577_431">{value['top3Breed'][1]}</span></div>
                <div className="e577_435">
                    <div className="e577_436"></div>
                    <span className="e577_437">{value['top3Breed'][2]}</span></div>
            </div>
        </div>
        <span className="e575_428">{value['src_file']}</span>
        <div className="e578_498"><a target='Оригинал' className="e577_440"
                                     href={'http://localhost:5000/cropped/' + 'test' + index + '.jpg'}>Оригинал</a>
            <img className="e577_434" src={'http://localhost:5000/cropped/' + 'test' + index + '.jpg'}/>
        </div>
    </div>)
}


function Card_(value, index) {
    return (value["is_animal_there"] ? <div className="py-10">
                <div className=" max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0 my-auto md:ml-2 ">
                            <img className="h-48 w-full object-cover md:h-3/5 md:w-48 my-auto rounded"
                                 src={window.location.href+'cropped/' + 'test' + index + '.jpg'}
                                 alt="Man looking at item at a store"/>
                        </div>
                        <div className="p-8">
                            <div className=" tracking-wide text-sm text-green-500 font-semibold">{value['filename']}
                            </div>
                            <p className="block mt-2 text-lg leading-tight font-medium text-black">
                                Cобака, {'цвет: ' + value.color}, {'хвост: ' + value.tail}, owner_there: {value['is_the_owner_there']}</p>
                            <div className="flex">
                                <p className="mt-2 text-gray-500">
                                    Топ-3 породы:
                                </p>
                                <p className="ml-1 mt-2 mx-auto px-2 rounded-3 "
                                   >{value['top3_breed'][0]}</p>
                                <p className="mt-2 mx-auto px-2 rounded-3 "
                                   >{value['top3_breed'][1]}</p>
                                <p className="mt-2 mx-auto px-2 rounded-3 "
                                   >{value['top3_breed'][2]}</p>
                            </div>
                            <div className="flex">
                                <p className="mt-3 tracking-wide text-sm font-semibold">Адрес камеры:</p>
                                <p className="ml-4 mt-3 tracking-wide text-sm">{value['address']}</p>
                            </div>
                            <div className="flex">
                                <p className="mt-3 tracking-wide text-sm font-semibold">Время съёмки:</p>
                                <p className="ml-4 mt-3 tracking-wide text-sm">{value['date']}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <div className=" max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0 my-auto md:ml-2 ">

                        </div>
                        <div className="p-8">
                            <div className=" tracking-wide text-sm text-green-500 font-semibold">open_moscow_cam_531
                            </div>
                            <p className="block mt-2 text-lg leading-tight font-medium text-black">
                                Собаки не обнаружено.</p>
                        </div>
                    </div>
                </div>)
}

function __Card(value, index) {
    return (<div className="pt-6 pb-12 max-h-md">
        <div id="card" className="">
            <h2 className="text-center sans-serif text-4xl xl:text-5xl mb-5">Результаты распознавания</h2>
            <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
                <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    <div className="h-75 w-auto md:w-1/2">
                        <img className="inset-0 h-full w-full object-cover object-center"
                             src="https://i.ibb.co/BLCzQSP/1123.png"/>
                    </div>
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col ">
                        <h3 className="font-semibold text-lg leading-tight truncate mb-2">Название файла:
                            open_moscow_cam_531</h3>
                        <p className="mt-1">
                            Cобака, цвет чёрный, с длинным хвостом, без хозяина
                        </p>

                        <h3 className="mt-2 font-semibold text-lg leading-tight truncate">
                            Топ-3 породы:</h3>
                        <p className="mt-1 py-0.5 ml-1 bg-green-500 mx-auto px-2  rounded-md text-white">saddssadadsadsdas </p>
                        <p className="mt-1 py-0.5 ml-1 bg-green-500 mx-auto px-2 rounded-md text-white">Бульдог </p>
                        <p className="mt-1 py-0.5 ml-1 bg-green-500 mx-auto px-2 rounded-md text-white">Овчарка </p>

                        <p className="mt-3 text-lg leading-tight">Адрес камеры: Москва, ул.Первомайская д30к7</p>
                        <p className="mt-3 text-lg leading-tight">Время съёмки: 10.10.2021 в 13:15</p>

                    </div>
                </div>
            </div>
        </div>
    </div>)
}



export default class UploadFiles extends Component {
    constructor(props) {
        super(props);
        // ...

        this.state = {
            selectedFiles: undefined,
            currentFile: undefined,
            progress: 0,
            message: "",

            fileInfos: [

                // {
                //     fileName: "open_moscow_cam_531",
                //     animal: "собака",
                //     color: "цвет чёрный",
                //     tail: 'длинный хвост',
                //     withOwner: "false",
                //     Top3breed: ['Чихуахуа', "Бульдог", "Овчарка"],
                //     camAdress: "Москва, ул.Первомайская д30к7",
                //     datetime: "10.10.2021 в 13:15",
                //     croppedFilename: "img1.png"
                // }
            ],
        }
        ;
        this.onDrop = this.onDrop.bind(this);
        this.upload = this.upload.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this);


    }


    onDrop(files) {
        // console.log(files);
        if (files.length > 0) {
            this.setState({selectedFiles: files});
        }
    };

    upload(event) {
        // event.preventDefault();
        let currentFile = this.state.selectedFiles[0];
        // alert(currentFile.name);
        this.setState({
            progress: 0,
            currentFile: currentFile,
        });

        // SetupLoading();

        UploadService.upload(this.state.selectedFiles, (event) => {
            event.preventDefault();

            this.setState({
                progress: Math.round((100 * event.loaded) / event.total),
            });

        })
            .then((response) => {
                // console.log(response)
                // alert()
                this.setState({
                    // message: response.data.message,
                    fileInfos: response.data,
                    // selectedFiles: undefined,

                });
                // const d = JSON.parse(response)
                // console.log(d);
                // console.log((response.data))
                // console.log( typeof this.state.fileInfos)
                // return UploadService.getFiles();
            })
            .catch(() => {
                this.setState({
                    progress: 0,
                    message: "Не получилось загрузить файл!",
                    currentFile: undefined,
                });
                // alert()
            });

        this.setState({
            selectedFiles: undefined,
        });
        // alert()
    }


    // componentDidMount() {
    //     UploadService.getFiles().then((response) => {
    //         console.log(response.data.data);
    //
    //         this.setState({
    //             fileInfos: response.data.data,
    //         });
    //     });
    // }


    render() {
        var {selectedFiles, currentFile, progress, message, fileInfos} = this.state;


        // return (
        //     <div>
        //       <span className="e578_446">
        //         Загрузите снимки с камер наблюдения <br/>После нажатия на кнопку вы увидите результаты по каждому снимку</span>
        //     <div className="e575_417">
        //         <span className="e575_412">
        //             Перетащите сюда файлы, либо нажмите для выбора
        //         </span>
        //     </div>
        //     </div>
        // )
        // return (<div>
        //     <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        //         <div className="flex-shrink-0 з">
        //
        //         </div>
        //         <div>
        //             <div className="text-xl font-medium text-black">ChitChat</div>
        //             <p className="text-gray-500">You have a new message!</p>
        //         </div>
        //     </div>
        //     <div className="container p-4">
        //     {/*<MyButton/>*/}
        //         </div>
        // </div>)

        return (
            <div style={{marginBottom: ''}}>
                {currentFile && progress !== 100 && (
                    <div className="progress mb-3">
                        <div
                            className="progress-bar progress-bar-info progress-bar-striped"
                            role="progressbar"
                            aria-valuenow={progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{width: progress + "%"}}
                        >
                            {progress}%
                        </div>
                    </div>
                )}
                <div className="mx-auto" style={{maxWidth: "800px", marginLeft: "10%"}} align="">
                    <Dropzone style={{alignSelf: "center"}} onDrop={this.onDrop} multiple={true}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                                <div {...getRootProps({className: "dropzone"})}>
                                    <input {...getInputProps()} />
                                    {selectedFiles && selectedFiles[0].name ? (
                                        <div className="selected-file">
                                            Загружено: {selectedFiles.length} файлов
                                        </div>
                                    ) : (
                                        "Перетащите сюда файлы, либо нажмите для выбора файлов"
                                    )}
                                </div>
                                <aside className="selected-file-wrapper">
                                    <button
                                        className="btn btn-success" style={{backgroundColor:"#28A745", border:'0'}}
                                        disabled={!selectedFiles}
                                        onClick={this.upload}
                                    >
                                        Получить метки
                                    </button>
                                </aside>
                            </section>
                        )}
                    </Dropzone>
                </div>

                <div className="alert alert-light" role="alert">
                    {message}
                </div>

                {/*<table className="styled-table">*/}
                {/*  <thead>*/}
                {/*  <tr>*/}
                {/*    <th>Название снимка</th>*/}
                {/*    <th></th>*/}
                {/*    <th>Points</th>*/}
                {/*    <th>Points</th>*/}
                {/*    <th>Points</th>*/}
                {/*  </tr>*/}
                {/*  </thead>*/}
                {/*  <tbody>*/}
                {/*  <tr>*/}
                {/*    <td>Dom</td>*/}
                {/*    <td>6000</td>*/}
                {/*  </tr>*/}
                {/*  <tr className="active-row">*/}
                {/*    <td>Melissa</td>*/}
                {/*    <td>5150</td>*/}
                {/*  </tr>*/}
                {/*  </tbody>*/}
                {/*</table>*/}

                {/*{fileInfos.length >0 ? (*/}
                {/*  <div className="card">*/}
                {/*    <div className="card-header">Список загруженных файлов:</div>*/}
                {/*    <ul className="list-group list-group-flush">*/}
                {/*      {fileInfos.map((file, index) => (*/}
                {/*        <li className="list-group-item" key={index}>*/}
                {/*          <a href={file.url}>{file}</a>*/}
                {/*        </li>*/}
                {/*      ))}*/}
                {/*    </ul>*/}
                {/*  </div>*/}
                {/*): ""}*/}
                {/*(this.state.fileInfos.length > 0 &&)*/}
                {/*{alert(fileInfos)}*/}
                {/*{fileInfos.length !== 0 ?*/}
                {/*    <div style={{marginBottom: "1000px", marginTop: "100px", width: "80%", marginLeft: "10%"}}>*/}
                {/*        <div style={{display: "flex"}}>*/}
                {/*            <div style={{fontWeight: "600", fontSize: "20px", width: "800px"}}>Результаты распознавания*/}
                {/*            </div>*/}
                {/*            /!*<div style={{float: "right", width: "80%"}}>*!/*/}
                {/*            <button style={{*/}
                {/*                backgroundColor: "#E1FFDE", border: "3px", borderColor: "#28A745",*/}
                {/*                borderRadius: "10px", alignSelf: "center", position: "relative", marginLeft: "20%",*/}
                {/*                width: "200px", height: "40px"*/}
                {/*            }}*/}
                {/*                    onClick={this.downloadCSV}>*/}
                {/*                Скачать csv*/}
                {/*            </button>*/}
                {/*        </div>*/}

                {/*        /!*<div style={{marginTop: "100px"}}>*!/*/}
                {/*        /!*    {detectionResults.map((file, index) => (*!/*/}
                {/*        /!*        <div style={{*!/*/}
                {/*        /!*            width: "100%",*!/*/}
                {/*        /!*            minHeight: "250px",*!/*/}
                {/*        /!*            backgroundColor: "#EEEEEE",*!/*/}
                {/*        /!*            borderRadius: "20px"*!/*/}
                {/*        /!*        }}>*!/*/}
                {/*        /!*            <p style={{paddingTop: "10px", fontWeight: "600", fontSize: "20px"}}*!/*/}
                {/*        /!*               align="center">{detectionResults[0].fileName}</p>*!/*/}
                {/*        /!*            <div style={{display: "flex"}}>*!/*/}
                {/*        /!*                /!*{import }*!/*!/*/}
                {/*        /!*                <img src={img} style={{width: "220px", paddingTop: "25px", paddingLeft: "30px"}}/>*!/*/}
                {/*        /!*                <div style={{*!/*/}
                {/*        /!*                    paddingLeft: "65px", paddingTop: "5px", fontWeight: "450",*!/*/}
                {/*        /!*                    fontSize: "17px"*!/*/}
                {/*        /!*                }}>*!/*/}
                {/*        /!*                    Cобака, цвет чёрный, с длинным хвостом, без хозяина*!/*/}
                {/*        /!*                </div>*!/*/}

                {/*        /!*                <div style={{display: "flex"}}>*!/*/}
                {/*        /!*                    <p>Топ-3 породы:</p><br/>*!/*/}
                {/*        /!*                    {detectionResults[0].Top3breed.map((value,i) => (*!/*/}
                {/*        /!*                        <div className="btn btn-success">*!/*/}
                {/*        /!*                            {detectionResults[0].Top3breed[i]}*!/*/}
                {/*        /!*                        </div>*!/*/}

                {/*        /!*                    ))}*!/*/}
                {/*        /!*                </div>*!/*/}
                {/*        /!*            </div>*!/*/}

                {/*        /!*        </div>*!/*/}
                {/*        /!*    ))}*!/*/}
                {/*        /!*</div>*!/*/}
                {/*        /!*{[123].map(()=>alert('123'))}*!/*/}
                {/*        /!*{alert((fileInfos))}*!/*/}
                {/*{__Card(1,1)}*/}
                {/*{console.log((fileInfos))}*/}
                {Array.isArray(fileInfos) && fileInfos.map((value, index) => {
                    // console.log(index, value);
                    return Card_(value, index);
                })}

                {/*{Card(fileInfos[0], 0)}*/}


                {/*<Card/>*/}
            </div>
        );
    }
}

