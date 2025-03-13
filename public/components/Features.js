const Features = () => {
  const { motion } = window.Motion

  const features = [
    {
      image: "./images/idoso1.png",
      title: "Pessoas com mais de 60 anos",
      description: "Que buscam independência para seguir envelhecendo de forma saudável.",
    },
    {
      image: "./images/idoso2.png",
      title: "Idosos frágeis e seus familiares",
      description: "Com a finalidade de amenizar as possíveis dificuldades atreladas à essa trajetória",
    },
    {
      image: "./images/idoso3.png",
      title: "Pessoas com mais de 40 anos",
      description: "Que sintam a necessidade de iniciar acompanhamento clínico para melhorar os cuidados com sua saúde.",
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Para quem é</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-lg"
            >
               <img className="rounded-lg" src={feature.image} alt={feature.title} />
              <h3 className="text-xl font-semibold mb-2 mt-5">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}






