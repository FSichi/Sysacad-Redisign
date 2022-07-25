import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const featuresNew = [
    {
        name: 'Verifica tu Estado Academico',
        description:
            'Consulta el avance de las materias pertenecientes a tu carrera, verifica tus calificaciones finales y visualiza cuales son las materias que debes cursar.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Inscribete a una Materia o Examen',
        description:
            'A traves de este modulo de autogestion academico puedes realizar el proceso de inscripcion a las materias de tu carrera o a esos examenes que necesitas rendir.',
        icon: ScaleIcon,
    },
    {
        name: 'Consulta las ultimas novedades de tu carrera',
        description:
            'Por medio de este sitio y los canales de comunicacion, puedes consultar las noticias, novedades, actualizaciones y mas de la universidad como de tu carrera.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Perfil estudiantil',
        description:
            'Cada estudiante de la UTN-FRT posee su perfil estudiantil unico, el cual posee toda la informacion referente a tu progreso academico.',
        icon: AnnotationIcon,
    },
]

export const Home = () => {
    return (
        <>
            <section className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl text-indigo-600 font-semibold tracking-wide uppercase sm:mt-0 mt-3">Bienvenido Facundo Sichi</h2>
                        <p className="mt-5 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Universidad Tecnológica Nacional
                        </p>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Facultad Regional Tucuman
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Te encuentras en el SYSACAD (Sistema de Gestión Académica) de la Facultad Regional de Tucuman (UTN- FRT).
                        </p>
                    </div>

                    <div className="mt-32 md:mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            {featuresNew.map((feature) => (
                                <div key={feature.name} className=" bg-gray-900 p-3 rounded-2xl">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-24 w-12 rounded-md bg-indigo-500 text-white mt-1">
                                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-100">{feature.name}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-400">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>

            <div className="bg-white dark:bg-gray-800 ">
                <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-2xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span className="block">
                            Activa la funcionalidad de avisos y recordatorios
                        </span>
                        <span className="block text-indigo-500 mt-3">
                            Materias. Examenes. Noticias. Fechas.
                        </span>
                    </h2>
                    <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-400">
                        Al activar el modo de avisos, cada vez que se necesite publicar uno, se te enviara una notificacion a tu correo institucional. Esta funcionalidad puede ser deshabilitada en cualquier momento.
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                            <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Activar Avisos
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}