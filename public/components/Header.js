const Header = () => {
  const { motion } = window.Motion

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <motion.img whileHover={{ scale: 1.1 }} src="./images/logo5.png" alt="StreamLine Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-5">
            <li>
              <a href="#features" className="text-gray-600 hover:text-pink-700">
                Geriatria
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-gray-600 hover:text-pink-700">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-pink-700">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

