import { useEffect, useState } from "react";
import { ButtonImprimir, TitleCursadoConFecha } from "../../components/CursadoComponents"
import { examenes } from "../../helpers/data"
import { LoadingPage } from "../UI/LoadingPage";

export const Examenes = () => {

    const [loadingPage, setLoadingPage] = useState(false);

    useEffect(() => {

        if (!loadingPage) {
            setTimeout(() => {
                setLoadingPage(true);
            }, 2000);
        } 
        
    }, [loadingPage]);

    if (!loadingPage) {
        return (
            <LoadingPage title={'Obteniendo Examenes del Alumno...'}/>
        )
    }

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

            <TitleCursadoConFecha title={'Examenes de Sichi, Facundo'} />

            <div className="mt-6 max-w-5xl mx-auto">

                <div className="overflow-x-auto rounded-2xl mt-3">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs uppercase  bg-teal-400 text-gray-900">
                            <tr>
                                <th scope="col" className="py-3 px-16">
                                    Fecha
                                </th>
                                <th scope="col" className="py-3 px-20">
                                    Materia
                                </th>
                                <th scope="col" className="py-3 px-6 text-center">
                                    Nota
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Especialidad
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Plan
                                </th>
                                <th scope="col" className="py-3 px-3">
                                    Codigo
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {examenes.map(item => (
                                <tr className="border-b bg-gray-800 border-gray-700 text-gray-100" key={item.id}>
                                    <th className="py-4 px-14 font-medium">
                                        {item.fecha}
                                    </th>
                                    <td className="py-4 px-6">
                                        {item.materia}
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <p className="bg-gray-500 rounded-xl p-2">
                                            {item.nota}
                                        </p>
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.especialidad}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.plan}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.codigo}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <ButtonImprimir />

            </div>

        </div>
    )
}