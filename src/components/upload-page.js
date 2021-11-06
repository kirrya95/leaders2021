import logo from "../site-images/logo.png";
import UploadFiles from "./upload-files.component";
import React from "react";

export default function UploadPage() {
    return (<div>
        <div className="headerline flex">
            <img src={logo} alt="123" style={{width: "120px", margin: "1%"}}/>
            <div className="mt-3">
                <p>Лидеры цифровой трансформации</p>
                <p>Система распознавания животных</p>
            </div>

            <p className="mx-auto mt-3">Команда <p className="text-red-500">cucumber</p></p>
        </div>
        <p className="text-center my-20">Загрузите снимки с камер наблюдения<br/>После нажатия на кнопку вы увидите
            результаты по каждому снимку</p>
        <UploadFiles/>

        {/*<div className="py-10">*/}
        {/*    <div className=" max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">*/}
        {/*        <div className="md:flex" >*/}
        {/*            <div className="md:flex-shrink-0 my-auto md:ml-2 ">*/}
        {/*                <img className="h-48 w-full object-cover md:h-3/5 md:w-48 my-auto rounded"*/}
        {/*                     src="http://localhost:3000/cropped/test0.jpg"*/}
        {/*                     alt="Man looking at item at a store"/>*/}
        {/*            </div>*/}
        {/*            <div className="p-8">*/}
        {/*                <div className=" tracking-wide text-sm text-green-500 font-semibold">open_moscow_cam_531*/}
        {/*                </div>*/}
        {/*                <p className="block mt-2 text-lg leading-tight font-medium text-black">*/}
        {/*                    Cобака, цвет чёрный, с длинным хвостом, без хозяина</p>*/}
        {/*                <div className="flex">*/}
        {/*                    <p className="mt-2 text-gray-500">*/}
        {/*                        Топ-3 породы:*/}
        {/*                    </p>*/}
        {/*                    <p className="ml-1 mt-2 mx-auto px-2 rounded-3 "*/}
        {/*                       >Чихуахуа</p>*/}
        {/*                    <p className="mt-2 mx-auto px-2 rounded-3 "*/}
        {/*                       >Бульдог</p>*/}
        {/*                    <p className="mt-2 mx-auto px-2 rounded-3 "*/}
        {/*                       >Овчарка</p>*/}
        {/*                </div>*/}
        {/*                <div className="flex">*/}
        {/*                    <p className="mt-3 tracking-wide text-sm font-semibold">Адрес камеры:</p>*/}
        {/*                    <p className="ml-4 mt-3 tracking-wide text-sm">Москва, ул.Первомайская д30к7</p>*/}
        {/*                </div>*/}
        {/*                <div className="flex">*/}
        {/*                    <p className="mt-3 tracking-wide text-sm font-semibold">Время съёмки:</p>*/}
        {/*                    <p className="ml-4 mt-3 tracking-wide text-sm">10.10.2021 в 13:15</p>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

    </div>)
};