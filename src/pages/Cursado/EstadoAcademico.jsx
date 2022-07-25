import { useEffect, useState } from "react";
import { ButtonImprimir, TitleCursadoConFecha } from "../../components/CursadoComponents"
import { materias } from "../../helpers/data"
import { LoadingPage } from "../UI/LoadingPage";

export const EstadoAcademico = () => {

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
            <LoadingPage title={'Obteniendo Estado Academico...'}/>
        )
    }

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

            <TitleCursadoConFecha title={'Estado Academico de Sichi, Facundo'} />

            <div className="mt-6 max-w-5xl mx-auto">

                <div className="overflow-x-auto rounded-2xl mt-3">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs uppercase  bg-indigo-700 text-gray-100 ">
                            <tr>
                                <th scope="col" className="py-3 px-11">
                                    Año
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Materia
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Estado
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Plan
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {materias.map(item => (
                                <tr className="border-b bg-gray-900 border-gray-700 text-gray-100" key={item.id}>
                                    <th className="py-5 px-14 font-medium">
                                        {item.año}
                                    </th>
                                    <td className="py-5 px-6">
                                        {item.materia}
                                    </td>
                                    <td className="py-5 px-6">
                                        {item.estado}
                                    </td>
                                    <td className="py-5 px-6">
                                        {item.plan}
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