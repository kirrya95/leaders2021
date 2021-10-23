import React, {Component} from "react";
import Dropzone from "react-dropzone";
// import
import UploadService from "../services/upload-files.service";
// import Card from '../components/card'


import detectionResults from "../components/detection-result.component"


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
                //     "Unnamed: 0": 0,
                //     "cam_adress": "улица Пушкина, д. Колотушкина",
                //     "color": "Silver",
                //     "croppedFileName": "/Users/kirillbogomolov/Desktop/Coding/react-2/build/cropped/test0.jpg",
                //     "isSomeoneHere": 1,
                //     "src_file": "168.png",
                //     "tail": "long",
                //     "time_photographed": "23.10.            2021 в 9:43",
                //     "top3Breed": [
                //         "dingo",
                //         "Siberian_husky",
                //         "kelpie"]
                // }
        //     {
        //         fileName: "open_moscow_cam_531",
        //         animal: "собака",
        //         color: "цвет чёрный",
        //         tail: 'длинный хвост',
        //         withOwner: "false",
        //         Top3breed: ['Чихуахуа', "Бульдог", "Овчарка"],
        //         camAdress: "Москва, ул.Первомайская д30к7",
        //         datetime: "10.10.2021 в 13:15",
        //         croppedFilename: "img1.png"}
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


        return (
            <div style={{marginBottom: '500px'}}>
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
                <div style={{width: "80%", marginLeft: "10%"}} align="">
                    <Dropzone style={{alignSelf: "center"}} onDrop={this.onDrop} multiple={true}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                                <div {...getRootProps({className: "dropzone"})}>
                                    <input {...getInputProps()} />
                                    {selectedFiles && selectedFiles[0].name ? (
                                        <div className="selected-file">
                                            {selectedFiles && selectedFiles[0].name}
                                        </div>
                                    ) : (
                                        "Перетащите сюда файлы, либо нажмите для выбора файлов"
                                    )}
                                </div>
                                <aside className="selected-file-wrapper">
                                    <button
                                        className="btn btn-success"
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
                {console.log(fileInfos)}
                {Array.isArray(fileInfos) && fileInfos.map((value, index) => {
                    // console.log(index, value);
                    return renderDetected(value, index);
                })}

                {}


                {/*<Card/>*/}
            </div>
        );
    }
}

