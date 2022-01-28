import Header from './components/top/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About';
import Algorithms from './pages/Algorithms'
const App = () => {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route> 
          <Route path="/algorithms" element = {<Algorithms/>}></Route>
        </Routes>
      </Router>
    </>
  )
}


export default App