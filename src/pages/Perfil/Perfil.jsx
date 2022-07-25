
export const Perfil = () => {
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

            <div className=" max-w-md mx-auto md:max-w-3xl min-w-0 break-words bg-gray-800 w-full mb-6 shadow-2xl rounded-xl mt-16">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full flex justify-center">
                            <div className="">
                                <img src={`../../assets/pic.jpeg`} className="shadow-xl rounded-full align-middle border-none sm:absolute -m-16 -ml-20 lg:-ml-20 max-w-[160px]" alt="ProfilePic" />
                            </div>
                        </div>
                        <div className="w-full text-center mt-24">
                            <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                <div className="p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-100">36</span>
                                    <span className="text-md text-slate-400">Materias</span>
                                </div>
                                <div className="p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-100">8.52</span>
                                    <span className="text-md text-slate-400">Promedio</span>
                                </div>

                                <div className="p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-100">48.124</span>
                                    <span className="text-md text-slate-400">Legajo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <h3 className="text-4xl text-gray-100 font-bold leading-normal mb-1">Facundo Sichi</h3>
                        <div className="text-md mt-0 mb-2 text-slate-400 font-bold uppercase">
                            Ingenieria en Sistemas de Informacion
                        </div>
                        <div className="text-md mt-0 mb-2 text-blue-400 font-bold uppercase">
                            facundosichi@alu.frt.utn.edu.ar
                        </div>
                    </div>
                    <div className="mt-6 py-6 border-t border-slate-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4">
                                <p className="font-light leading-relaxed text-gray-300 mb-4">Alumno de la Universidad Tecnologica Nacional, Facultad Regional Tucuman</p>
                                <p className="font-light leading-relaxed text-gray-300 mb-4">Cursando Ingenieria en Sistemas de Informacion. Actualmente en 5TO Año.</p>
                                <p className="font-light leading-relaxed text-gray-300 mb-4">Fue condecorado con una mencion al progreso academico al pertenecer a los 10 mejores promedios del año 2022 en la UTN-FRT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
