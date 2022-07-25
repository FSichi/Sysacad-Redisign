
export const Page404 = () => {
    return (
        <section className="flex items-center h-full p-16 dark:bg-white dark:text-gray-700">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl mb-10 ">Lo siento, parece que la seccion que buscabas no esta disponible</p>
                    {/* <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p> */}
                    <a rel="noopener noreferrer" href="./home" className="px-8 py-3 font-semibold rounded dark:bg-indigo-600 dark:text-gray-200">Volver al Inicio</a>
                </div>
            </div>
        </section>
    )
}
