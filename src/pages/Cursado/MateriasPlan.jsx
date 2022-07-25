import { ButtonImprimir, TitleCursadoSinFecha } from "../../components/CursadoComponents"
import { materiasPlan } from "../../helpers/data"

export const MateriasPlan = () => {
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

            <TitleCursadoSinFecha title={'Materias de Ingenieria en Sistemas de Informacion'} subtitle={'Plan 2008'} />

            <div className="mt-6 max-w-5xl mx-auto">

                <div className="overflow-x-auto rounded-2xl mt-3">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-sm uppercase  bg-red-400 text-gray-900 text-center">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Año
                                </th>
                                <th scope="col" className="py-3 px-20">
                                    Dictado
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Materia
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Se Cursa
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Se Rinde
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {materiasPlan.map(item => (
                                <tr className="border-b bg-gray-800 border-gray-700 text-gray-100" key={item.id}>
                                    <th className="py-5 px-14 font-medium text-center">
                                        {item.año}
                                    </th>
                                    <td className="py-5 px-6 text-center">
                                        {item.dictado}
                                    </td>
                                    <td className="py-5 px-10 text-center">
                                        {item.materia}
                                    </td>
                                    <td className="py-5 px-6 text-center">
                                        {item.cursa}
                                    </td>
                                    <td className="py-5 px-6 text-center">
                                        {item.rinde}
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