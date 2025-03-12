const Hero = () => {
  const { motion } = window.Motion

  return (
    <section className="w-full pt-24 pb-12 md:py-24 lg:py-32 xl:py-38 bg-gradient-to-r from-gray-100 bg-pink-700">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 py-2"
          >
            <div className="space-y-2">
              <h1 className="text-5xl font-bold text-gray-800 md:text-6xl xl:text-7xl">
                Geriatria: alcance a sua melhor versão em saúde e qualidade de vida.
              </h1>
              <p className="mt-6 text-lg text-gray-600 md:text-xl lg:text-2xl">
                Escolha nas opções abaixo como prefere seu atendimento
              </p>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="focus:outline-none text-pink-200 bg-pink-700 hover:bg-pink-200 text-sm hover:text-pink-700 border border-pink-700 hover:border-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Agendar consulta clínica
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="focus:outline-none text-pink-200 bg-pink-700 hover:bg-pink-200 text-sm hover:text-pink-700 border border-pink-700 hover:border-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Agendar consulta domiciliar
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/30 rounded-2xl transform rotate-2" />
            <div className="absolute inset-0 bg-gradient-to-l from-blue-100/20 to-purple-100/30 rounded-2xl transform -rotate-2" />
            <img
              src="./images/medica.jpg?height=200&width=400"
              alt="Caring medical professional with elderly patient"
              className="relative z-10 w-full h-[600px] rounded-2xl shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}




