import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { materiasCursado } from '../../helpers/data';
import { getMateriaById } from '../../helpers/selectors';

export const InscripcionScreen = () => {

    const { materiaId } = useParams();
    const [materia, setMateria] = useState({});
    const [render, setRender] = useState(false);

    useEffect(() => {
        setMateria(getMateriaById(materiaId, materiasCursado));
        setRender(true);
    }, [materiaId]);

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {
                render &&
                (
                    <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">

                        <div className="p-4 bg-gray-800 border-t-4 border-pink-500 rounded-lg ">
                            <h1 className="text-gray-100 text-center text-3xl">
                                {materia.materia}
                            </h1>
                        </div>

                        <div className="space-y-6 mt-7">
                            <div className='flex justify-between'>
                                <div className="w-1/3 mr-5 text-center ml-3">
                                    <label htmlFor="name-with-label" className="text-gray-700 text-xl">
                                        Año
                                    </label>
                                    <input type="text" disabled value={materia.año} className="text-center mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-900 text-gray-100 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Your name" />
                                </div>
                                <div className="w-1/3 mr-5 text-center">
                                    <label htmlFor="name-with-label" className="text-gray-700 sm:text-xl text-sm">
                                        Plan de Estudio
                                    </label>
                                    <input type="text" disabled value={materia.plan} className="text-center mt-3 sm:mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-900 text-gray-100 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Your name" />
                                </div>
                                <div className="w-1/3 text-center mr-3">
                                    <label htmlFor="name-with-label" className="text-gray-700 text-xl">
                                        Codigo
                                    </label>
                                    <input type="text" disabled value={materia.id} className="text-center mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-900 text-gray-100 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Your name" />
                                </div>
                            </div>

                            <hr />

                            <div className="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0">
                                <h2 className="max-w-lg mx-auto md:w-1/3 text-2xl text-center mr-16">
                                    Informacion del Estudiante
                                </h2>
                                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                                    <input type="text" id="user-info-name" disabled value={'Facundo Sichi'} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-900" />
                                    <input type="text" id="user-info-phone" disabled value={'Legajo: 48124'} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700" />
                                </div>
                            </div>

                            <hr className='h-0.5 bg-gray-200' />

                            <div className="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0">
                                <h2 className="max-w-lg mx-auto md:w-2/6 text-2xl text-center sm:mr-16">
                                    Comisiones Disponibles
                                </h2>
                                <div className=" mx-auto space-y-5 md:w-full">
                                    {materia.comision.map(comision => (
                                        <div className='bg-gray-700 p-4 text-gray-100 rounded-xl' key={comision}>
                                            <label className="flex items-center space-x-3 mb-3">
                                                <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-teal-300 checked:border-transparent focus:outline-none" />
                                                <span className="font-bold text-lg">
                                                    {comision}
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className='h-0.5 bg-gray-200' />

                            <div className="px-4 pb-4 ml-auto text-gray-500 flex justify-center">
                                <button type="submit" className="py-2 px-4 bg-indigo-600 hover:bg-cyan-500 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-52 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                                    Inscribirse a Cursado
                                </button>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    )
}