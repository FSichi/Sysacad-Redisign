import { ButtonImprimir, TitleCursadoConFecha } from "../../components/CursadoComponents"
import { cursado } from "../../helpers/data"

export const Cursado = () => {
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

            <TitleCursadoConFecha title={'Notas de Parciales de Sichi, Facundo'} />

            <div className="mt-6 max-w-5xl mx-auto">

                <div className="overflow-x-auto rounded-2xl mt-3">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-sm uppercase  bg-cyan-400 text-gray-900 text-center">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Año
                                </th>
                                <th scope="col" className="py-3 px-20">
                                    Materia
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Comision
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Aula
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Horarios
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Notas
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cursado.map(item => (
                                <tr className="border-b bg-gray-800 border-gray-700 text-gray-100" key={item.id}>
                                    <th className="py-5 px-14 font-medium text-center">
                                        {item.año}
                                    </th>
                                    <td className="py-5 px-6 text-center">
                                        {item.materia}
                                    </td>
                                    <td className="py-5 px-10 text-center">
                                        {item.comision}
                                    </td>
                                    <td className="py-5 px-6 text-center">
                                        {item.aula}
                                    </td>
                                    <td className="py-5 px-6 text-center">
                                        {item.horarios}
                                    </td>
                                    <td className="py-5 px-6 text-center">
                                        {item.notas}
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
