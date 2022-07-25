import { ButtonImprimir, TitleCursadoConFecha } from "../../components/CursadoComponents"
import { correlatividadRendir } from "../../helpers/data"

export const Correlativa_Rendir = () => {
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

            <TitleCursadoConFecha title={'Correlatividad para Rendir de Sichi, Facundo'} />

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
                                    Correlatividad
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Plan
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {correlatividadRendir.map(item => (
                                <tr className="border-b bg-gray-800 border-gray-700 text-gray-100" key={item.id}>
                                    <th className="py-5 px-14 font-medium text-center">
                                        {item.año}
                                    </th>
                                    <td className="py-5 px-6"> {/* text-center */}
                                        {item.materia}
                                    </td>
                                    <td className="py-5 px-10">
                                        {
                                            item.correlatividad.map(item => (
                                                <p className="text-md" key={item}>{item}</p>
                                            ))
                                        }
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