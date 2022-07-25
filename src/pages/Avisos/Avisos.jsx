import { useState } from "react"

export const Avisos = () => {

    const [details, setdetails] = useState(false)


    return (
        <div >

            <section className="bg-gradient bg-indigo-500 dark:bg-gray-800 py-8 md:py-20 border-b-2 border-gray-700">
                <div className="max-w-5xl mx-auto px-5 box-content">
                    <div className="flex items-center flex-col md:flex-row -mx-5">
                        <div className="w-full px-5 mb-5 md:mb-0 text-center md:text-left">
                            <h6 className="uppercase font-semibold text-xs md:text-base text-indigo-800 dark:text-gray-100">
                                Las Inscripciones se Habilitan el Dia:
                            </h6>
                            <h3 className="font-bold font-heading text-2xl md:text-4xl text-indigo-400 mt-3">
                                Lunes 1 de Agosto
                            </h3>
                            <h3 className="font-bold font-heading text-lg md:text-xl text-white leading-tight">
                                @ 10:00 AM
                            </h3>
                            <div className="mt-7 w-full md:w-56">
                                <button
                                    type="button" onClick={() => setdetails(!details)}
                                    className="py-3 px-4 bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                >
                                    {details ? "Ocultar Detalles" : "Ver Detalles"}
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-auto px-5">
                            <div className="flex justify-center text-white text-center">
                                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                    <div className="text-2xl md:text-3xl font-semibold">
                                        <span>
                                            0
                                        </span>
                                        <span>
                                            8
                                        </span>
                                    </div>
                                    <div className="opacity-100 text-xs mt-3 uppercase">
                                        Dias
                                    </div>
                                </div>
                                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                    <div className="text-2xl md:text-3xl font-semibold">
                                        <span>
                                            0
                                        </span>
                                        <span>
                                            6
                                        </span>
                                    </div>
                                    <div className=" opacity-100 text-xs mt-3 uppercase">
                                        Horas
                                    </div>
                                </div>
                                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                    <div className="text-2xl md:text-3xl font-semibold">
                                        <span>
                                            5
                                        </span>
                                        <span>
                                            6
                                        </span>
                                    </div>
                                    <div className=" opacity-100 text-xs mt-3 uppercase">
                                        Minutos
                                    </div>
                                </div>
                                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                    <div className="text-2xl md:text-3xl font-semibold">
                                        <span>
                                            1
                                        </span>
                                        <span>
                                            9
                                        </span>
                                    </div>
                                    <div className=" opacity-100 text-xs mt-3 uppercase">
                                        Second
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="mt-10 w-full md:w-56">
                                    <button type="button" className="py-3 px-4 bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                                        Agregar Recordatorio
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {
                details &&
                (
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-1 py-6 "> {/* bg-gray-800 */}

                        <div className="sm:flex flex-wrap justify-between items-center text-center gap-4">

                            <div className="sm:w-1/2 md:w-1/2 lg:w-72 mr-3 ml-3 sm:mr-3 sm:ml-0 px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-900 sm:mt-0">

                                <h3 className="text-2xl sm:text-xl text-gray-700 font-bold dark:text-indigo-400 py-4">
                                    Sexto y Quinto Año
                                </h3>
                                <p className="text-lg  text-gray-500 dark:text-gray-200 py-4">
                                    Desde las 10 hs del Lunes 1 Hasta las 10hs del Martes 2
                                </p>
                            </div>

                            <div className="sm:w-1/2 md:w-1/2 lg:w-72 mr-3 ml-3 sm:mr-3 sm:ml-0 px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-900 sm:mt-0 mt-4">

                                <h3 className="text-2xl sm:text-xl text-gray-700 font-bold dark:text-indigo-400 py-4">
                                    Cuarto y Tercer Año
                                </h3>
                                <p className="text-lg  text-gray-500 dark:text-gray-200 py-4">
                                    Desde las 10 hs del Martes 2 Hasta las 10hs del Jueves 4
                                </p>
                            </div>

                            <div className="sm:w-1/2 md:w-1/2 lg:w-72 mr-3 ml-3 sm:mr-3 sm:ml-0 px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-900 sm:mt-0 mt-4">

                                <h3 className="text-2xl sm:text-xl text-gray-700 font-bold dark:text-indigo-400 py-4">
                                    Segundo Año
                                </h3>
                                <p className="text-lg  text-gray-500 dark:text-gray-200 py-4">
                                    Desde las 10 hs del Jueves 4 Hasta las 10hs del Sabado 6
                                </p>
                            </div>

                            <div className="sm:w-1/2 md:w-1/2 lg:w-72 mr-3 ml-3 sm:ml-0 sm:mr-0 px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-900 sm:mt-0 mt-4">

                                <h3 className="text-2xl sm:text-xl text-gray-700 font-bold dark:text-indigo-400 py-4">
                                    Primer Año
                                </h3>
                                <p className="text-lg  text-gray-500 dark:text-gray-200 py-4">
                                    Desde las 10 hs del Sabado 6 Hasta las 18 hs del Domingo 7
                                </p>
                            </div>
                        </div>

                    </div>
                )
            }

            <div className="bg-white dark:bg-gray-800 border-b-2 border-gray-700">
                <div className="max-w-7xl mx-auto px-5 box-content">
                    <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block sm:text-start text-center">
                                Semana de la ingenieria 2023?
                            </span>
                            <span className="block text-indigo-500 sm:text-start text-center text-3xl">
                                Reserva tu sitio
                            </span>
                        </h2>
                        <div className="lg:mt-0 lg:flex-shrink-0 sm:text-start text-center">
                            <div className="mt-5 sm:mt-0 inline-flex rounded-md shadow">
                                <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-52 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                                    Obtener Informacion
                                </button>
                            </div>
                            <div className="mt-5 sm:mt-0 sm:ml-3 inline-flex rounded-md shadow">
                                <button type="button" className="py-4 px-6  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-52 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                                    Asistir con Amigos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white dark:bg-gray-800 ">
                <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span className="block">
                            Necesitamos tu Ayuda
                        </span>
                        <span className="block text-indigo-500 text-3xl">
                            Completa una pequeña encuesta
                        </span>
                    </h2>
                    <p className="text-xl mt-4 max-w-7xl mx-auto text-gray-400">
                        Desde la Secretaría de Asuntos Estudiantiles y la Secretaría de Transformación Digital les solicitamos que lean con atención y completen la siguiente información del Censo de Salud y Discapacidad que servirá para la toma de decisiones vinculadas a la salud de la población estudiantil de la UTN - FRT.
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                            <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Link al Formulario
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}