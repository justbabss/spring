import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import About from './About'

function App() {
  

  return (
    <Router>
      <section>
        <div className='bg-[#F6DA6F] h-full w-full'>
          <Navbar/>
        </div>
        <div>
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/Contact" >
              <Contact/>
            </Route>
            <Route exact path="/About" >
              <About/>
            </Route>
          </Switch>
        </div>
      </section>
    </Router>
  )
}

export default App
