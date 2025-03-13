const About = () => {
    const { motion } = window.Motion
  
    return (
      <section className="w-full py-24 lg:py-32 xl:py-38">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 py-2 order-2 lg:order-2"
            >
              <div className="space-y-2">  
              <h2 className="text-5xl text-gray-800 md:text-6xl xl:text-7xl">Dra. Fernanda Birk</h2>
                <p className="mt-4 text-lg text-gray-600 md:text-xl">
                Médica com especialização em Geriatria pela PUC RS (RQE xxx) e Clínica Médica pela UFSM (RQE xxx).

                Mais de 10 anos de estudo e formação com ênfase na experiência em ouvir e acolher pacientes e seus  familiares, entendendo a importância de explicar a medicina sem termos técnicos.
       
              <p>Experiência em saber ouvir e acolher os pacientes. Acredito que um atendimento bem feito começa pela devida atenção às histórias.
              </p>
              </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/30 rounded-2xl transform rotate-2" />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-100/20 to-purple-100/30 rounded-2xl transform -rotate-2" />
              <img
                src="./images/about_perfil.jpg?height=600&width=400"
                alt="Equipe médica geriátrica em consulta"
                className="relative z-10 w-full h-[600px] rounded-2xl shadow-xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    )
  }
  