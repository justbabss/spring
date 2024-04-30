import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import Footer from './Footer'
import Pricing from './pricing'


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
              <Home/>
            </Route>
            <Route exact path="/Contact" >
              <Contact/>
            </Route>
            <Route exact path="/Pricing" >
              <Pricing/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </section>
    </Router>
  )
}

export default App
