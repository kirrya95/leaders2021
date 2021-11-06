import logo from "../logo.svg";
import UploadFiles from "./upload-files.component";

export default function Home() {
    return (
        <body className="leading-normal tracking-normal" style="font-family: 'Source Sans Pro', sans-serif;">
        <nav id="header" className="fixed w-full z-30 top-0">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                    <a className="toggleColour text-black no-underline hover:no-underline text-xl lg:text-2xl italic"
                       href="#">

                        <img className="h-8 inline mr-2" src="https://i.ibb.co/FmfCWPp/image-1.png"/>
                        Команда cucumber <br/>
                    </a>
                </div>
                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle"
                            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div
                    className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
                    id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                        </li>
                        <li className="mr-3">
                        </li>
                        <li className="mr-3">
                        </li>
                    </ul>
                    <button id="navAction"
                            className="mx-auto lg:mx-0 hover:bg-purple-500 hover:text-white bg-white text-purple-500 font-bold border-2 border-purple-400 rounded-3xl mt-4 lg:mt-0 py-4 px-8 opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Найти
                        моего питомца
                    </button>
                </div>
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0"/>
        </nav>
        <div className="pt-24">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <h1 className="my-4 text-4xl font-bold leading-tight">Найдите своего потерявшегося животного всего
                        за несколько кликов</h1>
                    <p className="leading-normal text-2xl mb-8">С помощью сети камер городского видеонаблюдения
                        г.Москвы</p>
                    <button
                        className="mx-auto lg:mx-0 hover:bg-purple-400 hover:text-white bg-white text-purple-400 border-2 border-purple-400 font-bold rounded-2xl my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Найти
                        моего питомца
                    </button>
                </div>
                <div className="w-full md:w-3/5 py-6 text-center">
                    <img className="w-4/5 md:w-4/5 z-50 mx-auto"
                         src="https://i.ibb.co/FBKB4W9/image-3-removebg-preview.png"/>
                </div>
            </div>
        </div>
        <div className="relative -mt-12 lg:-mt-24">
            <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                        <path
                            d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                            opacity="0.100000001"></path>
                        <path
                            d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                            opacity="0.100000001"></path>
                        <path
                            d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                            id="Path-4" opacity="0.200000003"></path>
                    </g>
                    <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                        <path
                            d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                    </g>
                </g>
            </svg>
        </div>
        <section className="bg-white border-b py-">
            <div className="container max-w-5xl mx-auto m-8">
                <h1 className="w-full my-8 text-4xl font-bold leading-tight text-center text-gray-800">Потеряли своего
                    питомца?</h1>
                <div className="w-full">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-5/6 sm:w-1/2 px-6 py-20">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Теперь вы можете не
                            беспокоиться. Мы поможем вам его найти</h3>
                        <p className="text-gray-600 mb-8">
                            С помощью искусственного интеллекта мы найдем наиболее похожие совпадения и выдадим адреса,
                            дату, время снимка

                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 p-5 -my-6">

                        <img className="w-full sm:h-190 mx-auto"
                             src="https://i.ibb.co/nrqpM0s/vector-abstract-brain-symbol-design-removebg-preview.png"/>
                    </div>
                </div>
                <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                    <div className="w-full sm:w-1/2 p-6 mt-0">

                        <img className="w-5/6 sm:h-70 mx-auto" src="https://i.ibb.co/LpfX4hP/2021-11-05-02-45-1-1.png"/>
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-20">
                        <div className="align-middle">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Более 75 тысяч камер
                                видеонаблюдения</h3>
                            <p className="text-gray-600 mb-8">
                                В процессе поиска система пройдется по всем камерам и выдаст наиболее похожих питомцев

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex pt-0 pb-12">
                <button
                    className="mx-auto justify-center hover:bg-purple-400 hover:text-white bg-white text-purple-400 border-2 border-purple-400 font-bold rounded-2xl my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Найти
                    моего питомца
                </button>
            </div>
        </section>

        <section className="mb-10">
            <div>
                <h1 className="w-full mt-8 text-3xl font-bold leading-tight text-center text-gray-800">Заполните
                    информацию о вашем питомце</h1>
                <h1 className="w-full mt-3 text-xl leading-tight text-center text-gray-800">После этого вы увидите
                    результаты поиска</h1>


                <form className="w-full max-w-sm mx-auto mt-10">
                    <div className="md:flex md:items-center mb-6 text-center">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   htmlFor="inline-full-name"> Город поиска </label>
                        </div>
                        <div className="inline-block relative w-64">
                            <select
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option>Москва</option>

                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 text-center">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   htmlFor="inline-full-name"> Кого нужно найти? </label>
                        </div>
                        <div className="inline-block relative w-64">
                            <select
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option>Собака</option>

                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 text-center">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   htmlFor="inline-password"> Цвет питомца </label>
                        </div>
                        <div className="inline-block relative w-64">
                            <select
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option>Бежевый</option>
                                <option>Тёмный</option>
                                <option>Белый</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 text-center">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   htmlFor="inline-password"> Порода питомца (ближайшая) </label>
                        </div>
                        <div className="inline-block relative w-64">
                            <select
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option>Пудель</option>
                                <option>Немецкая овчарка</option>
                                <option>Бульдог</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 text-center">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   htmlFor="inline-password"> Длина хвоста </label>
                        </div>
                        <div className="inline-block relative w-64">
                            <select
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option>Длинный</option>
                                <option>Короткий</option>
                                <option>Без хвоста</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 text-center">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   htmlFor="inline-full-name"> Примерный адрес, где <br/>потерялся питомец </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-64 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-full-name" type="text" value="Парк Горького, южный вход"/>
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 text-center">
                        <div className="md:w-1/3"></div>
                        <label className="md:w-2/3 block text-gray-500 font-bold">
                            <input className="mr-2 leading-tight" type="checkbox"/>
                            <span className="text-sm"> Находить также фото с хозяином </span>
                        </label>
                    </div>
                    <div className="md:flex md:items-center text-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button
                                className="mx-auto justify-center hover:bg-purple-400 hover:text-white bg-white text-purple-400 border-2 border-purple-400 font-bold rounded-2xl my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Найти
                                моего питомца
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>

        <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                    <g className="wave" fill="#f8fafc">
                        <path
                            d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                    </g>
                    <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                        <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                            <path
                                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                                opacity="0.100000001"></path>
                            <path
                                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                                opacity="0.100000001"></path>
                            <path
                                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                                opacity="0.200000003"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

        <footer className="bg-white">
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 text-black">
                        <a className="text-pink-600 no-underline hover:no-underline font-bold text-xl lg:text-xl"
                           href="#">

                            <img className="h-10" src="https://i.ibb.co/FmfCWPp/image-1.png"/>
                            leaders2021
                        </a>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Links</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Social</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Company</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Official
                                    Blog</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">About
                                    Us</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        </body>)};

