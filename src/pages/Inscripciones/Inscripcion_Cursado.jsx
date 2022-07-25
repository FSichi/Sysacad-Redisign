import { Link } from "react-router-dom"
import { ButtonImprimir, TitleCursadoConFecha } from "../../components/CursadoComponents"
import { materiasCursado } from "../../helpers/data"

export const Inscripcion_Cursado = () => {
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

            <TitleCursadoConFecha title={'Materias que puede inscribirse a Cursado Sichi, Facundo'} />

            <div className="mt-6 max-w-5xl mx-auto">

                <div className="overflow-x-auto rounded-2xl mt-3">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs uppercase  bg-pink-700 text-gray-100 ">
                            <tr>
                                <th scope="col" className="py-3 px-11">
                                    Año
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Materia
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Plan
                                </th>
                                <th scope="col" className="py-3 px-9">
                                    Inscripcion
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {materiasCursado.map(item => (
                                <tr className="border-b bg-gray-900 border-gray-700 text-gray-100" key={item.id}>
                                    <th className="py-5 px-14 font-medium">
                                        {item.año}
                                    </th>
                                    <td className="py-5 px-6">
                                        {item.materia}
                                    </td>
                                    <td className="py-5 px-6">
                                        {item.plan}
                                    </td>
                                    <td className="py-5 px-11 text-blue-400">
                                        <Link to={`/inscripciones/cursado/${item.id}`}>Inscribirse</Link>
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
