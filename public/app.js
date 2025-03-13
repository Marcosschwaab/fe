const App = () => {
    return (
      <React.Fragment>
        <Header />
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </React.Fragment>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById("root"))
  