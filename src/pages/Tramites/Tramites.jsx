
export const Tramites = () => {
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

            {/* PREGUNTAS FRECUENTES */}

            <section className="mt-1">

                <h2 className="text-4xl font-extrabold leading-relaxed border-b-2 border-indigo-400 text-gray-900 mb-11 text-center">
                    Preguntas Frecuentes
                </h2>

                <ul className="flex items-start gap-10 flex-wrap justify-center ml-3">
                    <li className="sm:w-2/5 w-100">
                        <p className="text-xl font-medium leading-6 text-gray-900">
                            ¿ Donde puedo consultar Cuestiones Academicas ?
                        </p>
                        <div className="mt-2">
                            <p className="text-base leading-6 text-gray-500">
                                Podes consultar sobre cuestiones académicas relacionadas con CURSADO y EXAMENES a través de los mails:
                            </p>

                            <p className="text-base leading-6 text-blue-500 mt-5 font-medium">
                                dptoalumnos@frt.utn.edu.ar
                            </p>
                            <p className="text-base leading-6 text-blue-500 mt-2 font-medium">
                                legajosyactas@frt.utn.edu.ar
                            </p>

                        </div>
                    </li>
                    <li className="sm:w-2/5 w-100">
                        <p className="text-xl font-medium leading-6 text-gray-900">
                            ¿ Como solicito una cuenta del campus virtual ?
                        </p>
                        <div className="mt-2">
                            <p className="text-base leading-6 text-gray-500">
                                Para registrarte como usuario del Campus Virtual de la UTN-FRT, solicitá la creación de una cuenta enviando los siguientes datos a:
                            </p>
                            <p className="text-base leading-6 text-blue-500 font-medium mt-3">
                                campusvirtual@frt.utn.edu.ar
                            </p>
                            <p className="text-base leading-6 text-gray-500 mt-2">
                                Contenido: 1. Apellido y Nombre Completo 2. Nro. de legajo 3.Nro de DNI 4. Localidad y pais de origen 5. Materia y Carrera
                            </p>
                        </div>
                    </li>
                    <li className="sm:w-2/5 w-100">
                        <p className="text-xl font-medium leading-6 text-gray-900">
                            No puedo ingresar al campus virtual
                        </p>
                        <div className="mt-2">
                            <p className="text-base leading-6 text-gray-500">
                                En caso de no poder ingresar a tu cuenta envia un email al siguiente correo específicando el inconveniente. (Nota: esta cuenta no es igual a una cuenta institucional)
                            </p>
                            <p className="text-base leading-6 text-blue-500 font-medium mt-3">
                                campusvirtual@frt.utn.edu.ar
                            </p>
                        </div>
                    </li>
                    <li className="sm:w-2/5 w-100">
                        <p className="text-xl font-medium leading-6 text-gray-900">
                            No pude inscribirme en el cursado de una materia
                        </p>
                        <div className="mt-2">
                            <p className="text-base leading-6 text-gray-500">
                                Si no pudiste inscribirte a cursado, cualquiera sea el motivo (falta de cupo, requisito académico, etc.), y sabes que reglamentariamente estas habilitado para asistir a clases no te preocupes; podrás cursar la materia a través del Campus Virtual (Ciclo Lectivo 2020)
                            </p>
                        </div>
                    </li>
                    <li className="sm:w-2/5 w-100">
                        <p className="text-xl font-medium leading-6 text-gray-900">
                            Olvide / Quiero cambiar mi contraseña de Sysacad
                        </p>
                        <div className="mt-2">
                            <p className="text-base leading-6 text-gray-500">
                                Para cambiar tu contraseña de la cuenta del Sysacad Web, envía un mail con los siguientes datos a:
                            </p>
                            <p className="text-base leading-6 text-blue-500 mt-5 font-medium">
                                dptoalumnos@frt.utn.edu.ar
                            </p>
                            <p className="text-base leading-6 text-gray-500 mt-2">
                                Contenido: 1. Apellido y Nombre  2. Legajo 3. DNI
                            </p>
                        </div>
                    </li>
                    <li className="sm:w-2/5 w-100">
                        <p className="text-xl font-medium leading-6 text-gray-900">
                            ¿ Existe un medio de contacto que sea en tiempo real ?
                        </p>
                        <div className="mt-2">
                            <p className="text-base leading-6 text-gray-500">
                                Por cualquier inquietud o consulta academica / administrativa, podes chatear online con nosotros utilizando TEAMS CHAT desde tu cuenta de correo institucional.
                            </p>
                            <p className="text-base leading-6 text-gray-500 mt-3">
                                Horarios: 14:30 hs. - 18:30 hs.
                            </p>
                        </div>
                    </li>
                </ul>

            </section>

            {/* PERSONAL */}

            <section className="mt-10">

                <h2 className="text-3xl sm:text-4xl font-extrabold sm:leading-relaxed border-b-2 border-indigo-400 text-gray-900 mb-11 text-center">
                    Tienes alguna duda ? Nosotros te Asesoramos
                </h2>

                <div className="xl:flex xl:justify-between ml-1 mr-1">

                    <div className="max-w-xl py-3 mx-auto">
                        <div className="flex flex-col items-center  bg-gray-800 rounded-lg shadow">
                            <div className="px-4 py-5 sm:px-6 border-b w-full">
                                <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-white text-center">
                                    Personal de Administracion
                                </h3>
                                <p className="mt-1 max-w-2xl text-md text-gray-500 dark:text-gray-200 text-center">
                                    Horarios de atencion y contacto
                                </p>
                            </div>
                            <ul className="flex flex-col divide divide-y">
                                <li className="flex flex-row">
                                    <div className="select-none flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                            <img alt="profil" src={'../../assets/personal/6.jpg'} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                Jean Marc
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Bedelia
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-md">
                                            8:00 AM - 12 AM
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-row">
                                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                            <img alt="profil" src={'../../assets/personal/10.jpg'} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                Ana Douglas
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Bedelia
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-md">
                                            8:00 AM - 12 AM
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-row">
                                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                            <img alt="profil" src={'../../assets/personal/3.jpg'} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                Lia Menglis
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Bedelia
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-md">
                                            12:30 AM - 6:00 PM
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-row">
                                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                            <img alt="profil" src={'../../assets/personal/7.jpg'} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                Arisa Tamen
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Bedelia
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-md">
                                            12:30 AM - 6:00 PM
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="max-w-xl py-3 mx-auto">
                        <div className="flex flex-col items-center  bg-teal-800 rounded-lg shadow">
                            <div className="px-4 py-5 sm:px-6 border-b w-full">
                                <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-white text-center">
                                    Personal de Tesoreria
                                </h3>
                                <p className="mt-1 max-w-2xl text-md text-gray-500 dark:text-gray-200 text-center">
                                    Horarios de atencion y contacto
                                </p>
                            </div>
                            <ul className="flex flex-col divide divide-y">
                                <li className="flex flex-row">
                                    <div className="select-none flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                            <img alt="profil" src={'../../assets/personal/6.jpg'} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                Jean Marc
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Contador
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-md">
                                            8:00 AM - 12 AM
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-row">
                                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                            <img alt="profil" src={'../../assets/personal/10.jpg'} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                Ana Douglas
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Contador
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-md">
                                            8:00 AM - 12 AM
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-row">
                                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                            <img alt="profil" src={'../../assets/personal/3.jpg'} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                Lia Menglis
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Contador
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-md">
                                            12:30 AM - 6:00 PM
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-row">
                                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                            <img alt="profil" src={'../../assets/personal/7.jpg'} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                Arisa Tamen
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Contador
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-md">
                                            12:30 AM - 6:00 PM
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="max-w-xl py-3 mx-auto">
                        <div className="flex flex-col items-center  bg-cyan-800 rounded-lg shadow">
                            <div className="px-4 py-5 sm:px-6 border-b w-full">
                                <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-white text-center">
                                    Personal de Maestranza
                                </h3>
                                <p className="mt-1 max-w-2xl text-md text-gray-500 dark:text-gray-200 text-center">
                                    Horarios de atencion y contacto
                                </p>
                            </div>
                            <ul className="flex flex-col divide divide-y">
                                <li className="flex flex-row">
                                    <div className="select-none flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                            <img alt="profil" src={'../../assets/personal/6.jpg'} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                Jean Marc
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Jefe Sistemas
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-md">
                                            09:00 AM - 6:00 PM
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-row">
                                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                            <img alt="profil" src={'../../assets/personal/10.jpg'} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                Ana Douglas
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Jefe Mecanica
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-md">
                                            09:00 AM - 6:00 PM
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-row">
                                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                            <img alt="profil" src={'../../assets/personal/3.jpg'} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                Lia Menglis
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Jefe Civil
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-md">
                                            09:00 AM - 6:00 PM
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-row">
                                    <div className="select-none cursor-pointer flex flex-1 items-center p-1.5">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                            <img alt="profil" src={'../../assets/personal/7.jpg'} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                Arisa Tamen
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Jefe Electrica
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Jefe Electronica
                                            </div>

                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-md">
                                            09:00 AM - 6:00 PM
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    )
}