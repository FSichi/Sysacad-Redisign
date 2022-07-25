import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { MenuIcon, XIcon, LogoutIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { cursado, inscripciones, perfil, submenuCursado, submenuInscripcion } from './logs'
import './Navbar.css';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Popover className="relative bg-white">

            {/* MENU DESKTOP */}

            <div className="max-w-full mx-auto px-4 sm:px-6">

                <div className="flex justify-between items-center border-b-2 border-gray-200 py-6 md:justify-start md:space-x-10">

                    {/* LOGO */}

                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/home">
                            <span className="sr-only">SySacad</span>
                            <img
                                className="h-10 w-auto sm:h-12"
                                // src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                src={`../../assets/logo.png`}
                                alt=""
                            />
                        </Link>
                    </div>

                    {/* BOTON HAMBURGUESA */}

                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>

                    {/* MENU CENTRAL */}

                    <Popover.Group as="nav" className="hidden md:flex space-x-10">

                        {/* CURSADO */}

                        <Popover className="relative">
                            {({ open, close }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span>Cursado</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-50"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                                                    {cursado.map((item) => (
                                                        <Link
                                                            key={item.name} onClick={() => close()}
                                                            to={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-700"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-400" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-100">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="px-5 py-5 bg-gray-700 space-y-6 flex justify-center">
                                                    {submenuCursado.map((item) => (
                                                        <div key={item.name} className="flow-root">
                                                            <Link
                                                                to={item.href} onClick={() => close()}
                                                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-100 hover:bg-cyan-700"
                                                            >
                                                                <item.icon className="flex-shrink-0 h-6 w-6 text-teal-300" aria-hidden="true" />
                                                                <span className="ml-3">{item.name}</span>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        <Link to="/avisos" className="text-base font-medium text-gray-500 hover:text-gray-900"> Avisos </Link>
                        <Link to="/tramites" className="text-base font-medium text-gray-500 hover:text-gray-900"> Tramites  </Link>

                        {/* INSCRIPCIONES */}

                        <Popover className="relative">
                            {({ open, close }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span>Inscripciones</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-50"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                                                    {inscripciones.map((item) => (
                                                        <Link
                                                            key={item.name} onClick={() => close()}
                                                            to={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-700"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-400" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-100">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="px-5 py-5 bg-gray-700 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                    {submenuInscripcion.map((item) => (
                                                        <div key={item.name} className="flow-root">
                                                            <Link
                                                                to={item.href} onClick={() => close()}
                                                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-100 hover:bg-cyan-700"
                                                            >
                                                                <item.icon className="flex-shrink-0 h-6 w-6 text-teal-300" aria-hidden="true" />
                                                                <span className="ml-3">{item.name}</span>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </Popover.Group>

                    {/* PARTE DERECHA */}

                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

                        {/* PERFIL */}

                        <Popover className="relative">
                            {({ open, close }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? ' dark:text-teal-300' : 'text-white',
                                            'group rounded-md inline-flex items-center text-base font-medium focus:outline-none'
                                        )}
                                    >
                                        <span className="nav-link me-5">
                                            <img src={`../assets/profile5.svg`} alt="Perfil IMG" className="perfilPic" />
                                        </span>

                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-900 dark:text-teal-300' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-900'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-50"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel
                                            className="absolute z-10 left-7 transform -translate-x-96 mt-3 px-2 w-screen max-w-md sm:px-0"
                                        >

                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                                                    {perfil.map((item) => (
                                                        <Link
                                                            key={item.name} onClick={() => close()}
                                                            to={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-700"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-400" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-100">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="px-5 py-5 bg-pink-700 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                    <button
                                                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-pink-900 text-start"
                                                    >
                                                        <LogoutIcon className="flex-shrink-0 h-6 w-6 text-indigo-300 me-3" />

                                                        <div className="ml-4">
                                                            <p className="text-base font-medium text-gray-100 ">Cerrar Sesion</p>
                                                            <p className="mt-1 text-sm text-gray-300 ">Guarda los ultimos datos de la aplicacion y cierra sesion de manera segura</p>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                    </div>
                </div>

            </div>

            {/* HAMBURGER */}

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    {({ open, close }) => (
                        <>
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-800 divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-10 w-auto sm:h-32"
                                                // src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                src={`../../assets/logo.png`}
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            {cursado.map((item) => (
                                                <Link
                                                    key={item.name} onClick={() => close()}
                                                    to={item.href}
                                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                                >
                                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-400" aria-hidden="true" />
                                                    <span className="ml-3 text-base font-medium text-gray-100">{item.name}</span>
                                                </Link>
                                            ))}
                                            {inscripciones.map((item) => (
                                                <Link
                                                    key={item.name} onClick={() => close()}
                                                    to={item.href}
                                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                                >
                                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-400" aria-hidden="true" />
                                                    <span className="ml-3 text-base font-medium text-gray-100">{item.name}</span>
                                                </Link>
                                            ))}
                                            {perfil.map((item) => (
                                                <Link
                                                    key={item.name} onClick={() => close()}
                                                    to={item.href}
                                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                                >
                                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-400" aria-hidden="true" />
                                                    <span className="ml-3 text-base font-medium text-gray-100">{item.name}</span>
                                                </Link>
                                            ))}
                                           
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5 space-y-6">
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <Link to="/avisos" className="text-base font-medium text-gray-100 hover:text-gray-700" onClick={() => close()}> Avisos  </Link>
                                        <Link to="/tramites" className="text-base font-medium text-gray-100 hover:text-gray-700" onClick={() => close()}> Tramites </Link>
                                        {submenuInscripcion.map((item) => (
                                            <Link
                                                key={item.name} onClick={() => close()}
                                                to={item.href}
                                                className="text-base font-medium text-gray-100 hover:text-gray-700 mt-3"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                        {/* {submenuCursado.map((item) => (
                                            <Link
                                                key={item.name} onClick={() => close()}
                                                to={item.href}
                                                className="text-base font-medium text-gray-100 hover:text-gray-700 mt-3"
                                            >
                                                {item.name}
                                            </Link>
                                        ))} */}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </Popover.Panel>
            </Transition>

        </Popover>
    )
}